import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  weight: "variable",
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smart Chef",
  description: "Smart Chef is an AI generated recipe maker web app",
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
