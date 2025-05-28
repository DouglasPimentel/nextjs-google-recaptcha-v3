import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export { geistSans, geistMono };
