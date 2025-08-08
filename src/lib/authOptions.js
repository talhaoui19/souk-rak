import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectMongoDB } from "@/lib/db";
import UserModal from "@/lib/models/user";
import { credentialsAuthorize } from "@/lib/auth/credentialsAuthorize";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: credentialsAuthorize,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: { signIn: "/login" },

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user, account }) {
      await connectMongoDB();

      if (account && user) {
        let existingUser = await UserModal.findOne({ email: user.email });

        if (!existingUser) {
          existingUser = await UserModal.create({
            email: user.email,
            name: user.name,
            phone: "",
            image: user.image || "",
          });
        } else {
          existingUser.image = user.image || existingUser.image;
          await existingUser.save();
        }

        token.user = existingUser;
      } else if (token.user?.email) {
        token.user = await UserModal.findOne({ email: token.user.email });
      }

      return token;
    },

    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },

  events: {
    error: (message) => {
      console.error("NextAuth error:", message);
    },
  },
};