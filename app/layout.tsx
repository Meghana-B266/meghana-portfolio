
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meghana B. | AI / ML Engineer",
  description:
    "Portfolio of Meghana B., an aspiring AI/ML Engineer passionate about machine learning, deep learning, computer vision, and intelligent solutions.",
  keywords: [
    "Meghana B",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Portfolio",
  ],
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
