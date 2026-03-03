import { ImageResponse } from "next/og"
import { TabIconProps } from "../types/ui.g"

export function TabIcon({
  image,
  title,
  size = { width: 64, height: 64 },
}: TabIconProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          fontSize: 18,
          fontWeight: 600,
          gap: 8,
          padding: 8,
        }}
      >
        <img
          src={image}
          width={size.width * 0.6}
          height={size.height * 0.6}
          style={{
            objectFit: "contain",
          }}
          alt="image icon"
        />

        <span
          style={{
            color: "#111",
            fontFamily: "sans-serif",
          }}
        >
          {title}
        </span>
      </div>
    ),
    size
  )
}