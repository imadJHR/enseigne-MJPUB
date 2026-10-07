import Image from "next/image";
import type { CSSProperties } from "react";

export default function BrandLogo({
  priority = true,
  filterId = "mjpub-logo-dark",
}: {
  priority?: boolean;
  filterId?: string;
}) {
  return (
    <>
      <svg
        className="brand-logo-filter"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter
            id={filterId}
            x="0"
            y="0"
            width="100%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            {/* Mask only the dark ink; keep the original colours and alpha. */}
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      -0.2126 -0.7152 -0.0722 0 1"
              result="inverse-luminance"
            />
            <feComponentTransfer in="inverse-luminance" result="dark-ink">
              <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 1" />
            </feComponentTransfer>
            <feComposite
              in="dark-ink"
              in2="SourceAlpha"
              operator="in"
              result="dark-ink-alpha"
            />
            <feFlood floodColor="#fff" result="white-ink" />
            <feComposite
              in="white-ink"
              in2="dark-ink-alpha"
              operator="in"
              result="light-ink"
            />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="light-ink" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <Image
        src="/logo.png"
        width={54}
        height={54}
        alt=""
        priority={priority}
        style={
          { "--brand-logo-filter": `url("#${filterId}")` } as CSSProperties
        }
      />
    </>
  );
}
