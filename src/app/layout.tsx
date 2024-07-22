import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veltson Bastien Portfolio",
  description: "Veltson Bastien is an entrepreneur with a tech background.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
