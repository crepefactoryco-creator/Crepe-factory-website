import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Crepe Factory - Franchise & Investors",
  description:
    "Explore franchise opportunities and investor support from Crepe Factory.",
  openGraph: {
    type: "website",
    title: "Crepe Factory - Franchise & Investors",
    description:
      "Explore franchise opportunities and investor support from Crepe Factory.",
    images: [
      {
        url: "https://example.com/crepe-factory-og.png",
        width: 1200,
        height: 630,
        alt: "Crepe Factory franchise",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

