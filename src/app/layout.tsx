import type { Metadata } from "next";
import { Inter, Calistoga, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});
const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: "400",
  variable: "--font-bangla",
});

export const metadata: Metadata = {
  title: "Muhammad Mizan",
  description: "Fullstack engineer from Rajshahi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          hindSiliguri.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
