import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mufid's Portfolio Page",
  description: "A passionate UI/UX designer with expertise in UI/UX tools such as Figma, Miro, Maze, and also I am expert in Front End Development. Experienced design and developing user-friendly applications and systems. Proven ability to slice design to code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-1BQ5W21NGE"/>
    </html>
  );
}
