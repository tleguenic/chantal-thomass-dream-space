// Black satin ribbon that writes the "C" like a pen: the band is traced
// progressively along the letter, with a pen tip leading the stroke.
const C =
  "M 118 14 C 150 4, 178 22, 162 46 C 132 16, 62 22, 46 76 C 32 126, 72 176, 126 166 C 156 160, 172 140, 162 125 C 152 111, 130 124, 145 140 C 160 156, 186 150, 196 134";

// Parallel strands offset along a diagonal make the line read as a flat ribbon
// that widens and narrows as the letter turns.
const STRANDS = 9;
const DUR = "2.8s";

const RibbonC = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-10 -10 220 200" className={`overflow-visible ${className}`} aria-hidden fill="none">
    {Array.from({ length: STRANDS }, (_, i) => {
      const edge = i === 0 || i === STRANDS - 1;
      return (
        <path
          key={i}
          d={C}
          pathLength={1}
          className="ribbon-write"
          transform={`translate(${i * 1.1} ${-i * 1.1})`}
          stroke="hsl(var(--foreground))"
          strokeWidth={edge ? 1.3 : 1.1}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={edge ? 1 : 0.55}
        />
      );
    })}
    {/* pen tip leading the stroke */}
    <circle r={3} fill="hsl(var(--foreground))" className="ribbon-tip">
      <animateMotion dur={DUR} path={C} fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.65 0 0.35 1" />
    </circle>
  </svg>
);

export default RibbonC;
