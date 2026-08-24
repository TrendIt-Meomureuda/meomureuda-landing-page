import { ImageResponse } from "next/og";

export const alt = "머무르다, 제주 28–60박 성향 기반 장기 체류 추천";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#F7F1E5",
        color: "#17352D",
        padding: "76px 86px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "68%" }}>
        <div style={{ display: "flex", color: "#B84E08", fontSize: 24, fontWeight: 700, letterSpacing: 3 }}>
          MEOMUREUDA · JEJU LONG STAY
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.18 }}>
            나에게 맞는 제주에서,
          </div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.18 }}>
            한 달을 살아보다
          </div>
          <div style={{ display: "flex", marginTop: 30, color: "#54615B", fontSize: 27 }}>
            성향 기반 제주 권역 · 장기 체류 숙소 추천
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: -35,
          right: -65,
          display: "flex",
          width: 470,
          height: 470,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "#F57F20",
          color: "#27160A",
          fontSize: 116,
          fontWeight: 900,
          letterSpacing: -8,
        }}
      >
        28—60
      </div>
      <div
        style={{
          position: "absolute",
          right: 76,
          bottom: 70,
          display: "flex",
          border: "3px solid #2E7181",
          borderRadius: 999,
          color: "#2E7181",
          padding: "13px 24px",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        2026 관광데이터 활용 공모전
      </div>
    </div>,
    size,
  );
}
