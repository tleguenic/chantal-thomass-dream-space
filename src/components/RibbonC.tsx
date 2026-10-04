// Black rhythmic-gymnastics ribbon: wide sweeping arcs and loops, then it settles into the "C".
// All shapes share the same structure (M + 6 cubic curves) so they morph smoothly.
const W1 = "M -120 40 C -60 -40, 40 -40, 90 30 C 140 100, 220 120, 290 60 C 330 20, 300 -20, 260 10 C 220 40, 250 90, 290 80 C 320 70, 330 110, 300 140 C 270 170, 230 160, 250 130";
const W2 = "M 300 -20 C 220 -60, 120 -20, 60 60 C 0 140, -100 170, -110 100 C -120 40, -40 40, -20 90 C 0 140, 80 200, 160 180 C 230 160, 260 110, 230 90 C 200 70, 170 100, 200 130";
const W3 = "M -60 160 C -20 40, 60 -20, 140 20 C 220 60, 160 160, 100 130 C 40 100, 80 20, 150 40 C 220 60, 280 150, 220 180 C 180 200, 140 170, 160 140 C 180 110, 220 120, 240 100";
const C = "M 118 14 C 150 4, 178 22, 162 46 C 132 16, 62 22, 46 76 C 32 126, 72 176, 126 166 C 156 160, 172 140, 162 125 C 152 111, 130 124, 145 140 C 160 156, 186 150, 196 134";

const VALUES = [W1, W2, W3, W1, C].join(";");
const SPLINES = Array(4).fill("0.45 0 0.55 1").join(";");

// Parallel strands offset along a fixed diagonal: the band looks wide where the
// curve crosses that diagonal and thins to an edge where it runs along it,
// which reads as a flat satin ribbon twisting in the air.
const STRANDS = 9;

const RibbonC = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-10 -10 220 200" className={`overflow-visible ${className}`} aria-hidden fill="none">
    <g className="ribbon-float">
      {Array.from({ length: STRANDS }, (_, i) => {
        const edge = i === 0 || i === STRANDS - 1;
        return (
          <path
            key={i}
            d={C}
            transform={`translate(${i * 1.1} ${-i * 1.1})`}
            stroke="hsl(var(--foreground))"
            strokeWidth={edge ? 1.3 : 1.1}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={edge ? 1 : 0.55}
          >
            <animate attributeName="d" dur="4.2s" values={VALUES} keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" keySplines={SPLINES} fill="freeze" />
          </path>
        );
      })}
    </g>
  </svg>
);

export default RibbonC;
