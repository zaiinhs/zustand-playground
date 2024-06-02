import type { Metadata } from "next";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import "./globals.css";
import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
  title: "Playground",
  description: "@zaiinhs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.rubik.variable}>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
