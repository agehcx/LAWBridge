import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LAWBridge",
  description: "Experience the full potential of LAWBridge",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Header />
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-[8vh] bg-gradient-to-b from-gray-300 to-transparent z-30" />
          <div className="relative z-20">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
