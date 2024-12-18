import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  weight: "variable",
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smart Chef - AI-Powered Recipe Generator",
  description: "Discover delicious recipes tailored to the ingredients you have at home with Smart Chef. Powered by AI, our web app provides easy-to-follow recipes, to make cooking simple and fun!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Smart Chef" />
      </head>
      <body className={`bg-orange-50 ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
