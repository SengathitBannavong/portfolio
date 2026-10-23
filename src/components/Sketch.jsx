// Hand-drawn SVG strokes from the sketch theme. Decorative only.

const UNDERLINES = [
  "M2 9 C 40 3, 80 13, 120 6 S 180 4, 198 8",
  "M2 8 C 50 12, 90 2, 130 8 S 185 11, 198 6",
  "M2 7 C 30 11, 70 4, 110 9 S 170 5, 198 9",
];

export function Underline({ variant = 0 }) {
  return (
    <svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path
        d={UNDERLINES[variant % UNDERLINES.length]}
        stroke="var(--sk-red)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CurvedArrow({ className }) {
  return (
    <svg
      className={className}
      width="120"
      height="44"
      viewBox="0 0 120 44"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 6 C 24 34, 64 40, 106 28" />
      <path d="M96 20 L107 28 L95 35" />
    </svg>
  );
}
