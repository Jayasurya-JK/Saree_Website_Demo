import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Saree Boutique - Heritage in Soul. Modern in Execution.",
  description: "Discover handcrafted South Indian silk, cotton, and handloom sarees celebrating heritage and craftsmanship. Premium quality, authentic tradition.",
  keywords: ["saree", "silk saree", "cotton saree", "handloom", "South Indian saree", "traditional wear"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
