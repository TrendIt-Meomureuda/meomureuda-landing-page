import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meomureuda-partners.vercel.app"),
  title: "머무르다 | 제주 한달살이 성향 기반 권역·숙소 추천",
  description:
    "여행 성향 진단으로 제주 권역과 28–60박 장기 체류 숙소를 추천하는 머무르다의 서비스 및 숙소 데이터 제휴 안내 페이지입니다.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "머무르다",
    title: "나에게 맞는 제주에서, 한 달을 살아보다",
    description:
      "제주 28–60박 장기 체류를 위한 성향 기반 권역·숙소 추천 서비스와 데이터 제휴 안내",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "머무르다 | 제주 한달살이 추천",
    description: "성향 기반 제주 권역·장기 체류 숙소 추천 서비스",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
