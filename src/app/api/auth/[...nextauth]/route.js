import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

import { connectMongoDB } from "../../../../lib/db";
import UserModal from "../../../../lib/models/user";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        await connectMongoDB();

        const user = await UserModal.findOne({
          email: credentials.email,
        });

        if (!user) {
          return null;
        }

        const match = await bcrypt.compare(credentials.password, user.password);

        if (!match) {
          return null;
        }

        return user;
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt({ token, user, account }) {
      await connectMongoDB();

      if (account && user) {
        const existingUser = await UserModal.findOne({ email: user.email });

        if (!existingUser) {
          const newUser = new UserModal({
            email: user.email,
            name: user.name || "اسم افتراضي",
            phone: "",
            image: user.image || "",
          });
          await newUser.save();
          token.user = newUser;
        } else {
          existingUser.image = user.image || existingUser.image; // تحديث الصورة فقط إذا كانت موجودة
          await existingUser.save();
          token.user = existingUser;
        }
      } else if (token.user && token.user.email) {
        const updatedUser = await UserModal.findOne({
          email: token.user.email,
        });
        token.user = updatedUser;
      }

      return token;
    },

    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },

  events: {
    error: async (message) => {
      console.error("NextAuth error:", message);
      logError("NextAuth error: ", message);
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
