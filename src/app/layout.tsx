import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../../components/Common/Navbar";
import BottomNav from "../../components/Common/BottomNav";
import Footer from "../../components/Common/Footer";

export const metadata: Metadata = {
  title: "MEDA",
  description: "A Football Tournament Registration Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-[#F9FAFB] h-screen"'>
        <Navbar />
        {children}
        <div className="block sm:hidden ">
          <BottomNav />
        </div>
        <Footer />
      </body>
    </html>
  );
}
