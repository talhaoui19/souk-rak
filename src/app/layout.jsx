import "./globals.css";
import { Navbar, Footer } from "../components/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./providers/AuthProvider";

export const metadata = {
  title: "Souk Rak | سوق راك",
  description: "ًWelcome To Souk-rak Ecommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head></head>
      <body>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            toastClassName="text-right"
            bodyClassName="font"
          />
        </AuthProvider>
      </body>
    </html>
  );
}
