import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/be-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #00652c 0%, #15803d 60%, #22a35a 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 104,
              height: 104,
              borderRadius: 24,
              background: "#ffffff",
            }}
          >
            <img src={logoSrc} alt="" width={84} height={72} />
          </div>
          <div style={{ fontSize: 44, fontWeight: 700 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1, maxWidth: 950 }}>
            {site.tagline}
          </div>
          <div style={{ fontSize: 32, color: "#e7f4ea" }}>
            Fitness · Diet · Learning — one family habit loop with an AI Coach
          </div>
        </div>
      </div>
    ),
    size,
  );
}
