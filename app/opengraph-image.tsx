import { ImageResponse } from "next/og";

export const alt = "Bell & Cross, connected enterprise technology in Kenya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f4f6f9",
          color: "#182334",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
          <div style={{ color: "#264d98", fontSize: 25, fontWeight: 600, marginBottom: 32 }}>
            BELL &amp; CROSS
          </div>
          <div style={{ fontSize: 68, fontWeight: 600, letterSpacing: -2, lineHeight: 1.05 }}>
            Connected enterprise technology.
          </div>
          <div style={{ color: "#556377", fontSize: 28, marginTop: 28 }}>
            Systems, networks and digital services in Kenya.
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(140deg, #264d98, #84a9fa)",
            borderRadius: 180,
            height: 245,
            opacity: 0.9,
            width: 245,
          }}
        />
      </div>
    ),
    size,
  );
}
