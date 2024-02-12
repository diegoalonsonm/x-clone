import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "X-Clone",
  description: "Next JS X-Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
