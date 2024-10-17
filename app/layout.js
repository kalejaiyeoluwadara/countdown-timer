import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHatText = Red_Hat_Text({
  weight: ["400", "700"], // Regular and Bold weights
  variable: "--font-red-hat-text",
  subsets: ["latin"],
});

export const metadata = {
  title: "CountDown || GDG",
  description: "GDG Frontend Intermediate Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${redHatText.variable} antialiased`}>{children}</body>
    </html>
  );
}
