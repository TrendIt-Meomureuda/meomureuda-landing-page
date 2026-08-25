import type { Metadata, Viewport } from "next";

import "../../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meomureuda-partners.vercel.app"),
  title: "Meomureuda | Personalized Jeju Long-Stay Recommendations",
  description:
    "Meomureuda matches travelers with the right part of Jeju and 28–60-night stays based on travel style, with clear information for property data partners.",
  alternates: {
    canonical: "/en",
    languages: { "ko-KR": "/", "en-US": "/en" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/en",
    siteName: "Meomureuda",
    title: "Find your place in Jeju, then stay awhile",
    description: "Personalized area and long-stay recommendations for spending 28–60 nights in Jeju.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meomureuda | Personalized Jeju Long Stays",
    description: "Travel-style matching for Jeju areas and 28–60-night stays.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FFFFFF",
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
