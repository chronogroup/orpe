import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/orpe/ClientLayout";

export const metadata: Metadata = {
  title: "The Orange Pepe",
  description: "NFA. DYORpe.",
  icons: {
    icon: [{ url: "/orpe%20logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
