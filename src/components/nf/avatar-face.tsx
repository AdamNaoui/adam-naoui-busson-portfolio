import type { Profile } from "@/data/resume";

const INK: Record<Profile["face"], string> = {
  smile: "#0b1f4b",
  serious: "#4a0909",
  glasses: "#0f3d2e",
  wink: "#3d2a0a",
};

export function AvatarFace({
  face,
  color,
  size = 148,
  className,
}: {
  face: Profile["face"];
  color: string;
  size?: number;
  className?: string;
}) {
  const ink = INK[face];
  return (
    <span
      className={className}
      style={{
        width: size,
        height: size,
        background: color,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Math.max(4, size * 0.04),
        boxSizing: "border-box",
      }}
    >
      <svg
        aria-hidden="true"
        width={size * 0.76}
        height={size * 0.76}
        viewBox="0 0 100 100"
        fill="none"
        stroke={ink}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {face === "smile" && (
          <>
            <circle cx="36" cy="42" r="5" fill={ink} stroke="none" />
            <circle cx="64" cy="42" r="5" fill={ink} stroke="none" />
            <path d="M34 64c8 8 24 8 32 0" />
            <path d="M28 30q8 -10 18 -4M72 30q-8 -10 -18 -4" />
          </>
        )}
        {face === "serious" && (
          <>
            <circle cx="36" cy="42" r="5" fill={ink} stroke="none" />
            <circle cx="64" cy="42" r="5" fill={ink} stroke="none" />
            <path d="M34 62h32" />
            <path d="M26 32l14 -6M74 32l-14 -6" />
          </>
        )}
        {face === "glasses" && (
          <>
            <rect x="26" y="34" width="20" height="14" rx="3" />
            <rect x="54" y="34" width="20" height="14" rx="3" />
            <path d="M46 41h8" />
            <path d="M36 64c8 8 20 8 28 0" />
          </>
        )}
        {face === "wink" && (
          <>
            <circle cx="36" cy="42" r="5" fill={ink} stroke="none" />
            <path d="M58 42h12" />
            <path d="M38 64q12 -6 24 0" />
          </>
        )}
      </svg>
    </span>
  );
}
