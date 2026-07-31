import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Fullmarks — Notes and past papers, mapped to your exam board",
  description:
    "Revision notes and past papers for GCSE, IGCSE, IB, and A-Level, mapped spec point by spec point to your exact exam board.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
