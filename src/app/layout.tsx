import { Mulish } from "next/font/google";

import "./globals.scss";
import { ASSET_PREFIX } from "../../config";
import { ReactNode } from "react";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // You can add or remove weights
  variable: "--font-mulish",
  display: "swap",
});

export const metadata = {
  title: "Home Page",
  description: "Home Page",
  icons: {
    icon: `${ASSET_PREFIX}/assets/images/favicon.ico`,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} antialiased`}>{children}</body>
    </html>
  );
}
