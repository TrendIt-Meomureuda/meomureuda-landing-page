import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "머무르다 | 제주 한달살이 추천",
    short_name: "머무르다",
    description: "성향 기반 제주 권역·장기 체류 숙소 추천 서비스",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F1E5",
    theme_color: "#F57F20",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
