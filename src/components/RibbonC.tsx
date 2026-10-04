// Black gymnast-style ribbon: it waves and swirls, then settles into the "C".
// All shapes share the same structure (M + 6 cubic curves) so they morph smoothly.
const W1 = "M 0 120 C 20 60, 45 60, 65 110 C 85 160, 110 160, 130 110 C 150 60, 170 60, 185 100 C 195 125, 200 140, 190 150 C 180 160, 165 150, 170 135 C 175 120, 190 125, 200 115";
const W2 = "M 10 160 C 40 40, 80 40, 100 100 C 120 160, 150 160, 170 90 C 180 50, 150 40, 140 70 C 130 100, 160 110, 175 95 C 190 80, 195 60, 185 50 C 175 40, 160 50, 170 60";
const W3 = "M 190 30 C 150 0, 100 30, 80 70 C 60 110, 40 150, 20 120 C 5 95, 30 80, 50 100 C 70 120, 100 170, 140 160 C 170 150, 185 130, 175 115 C 165 100, 150 110, 160 125";
const C = "M 118 14 C 150 4, 178 22, 162 46 C 132 16, 62 22, 46 76 C 32 126, 72 176, 126 166 C 156 160, 172 140, 162 125 C 152 111, 130 124, 145 140 C 160 156, 186 150, 196 134";

const VALUES = [W1, W2, W3, W2, C].join(";");
const SPLINES = Array(4).fill("0.45 0 0.55 1").join(";");

const Strand = ({ offset, width, opacity }: { offset: [number, number]; width: number; opacity: number }) => (
  <path
    d={C}
    transform={`translate(${offset[0]} ${offset[1]})`}
    stroke="hsl(var(--foreground))"
    strokeWidth={width}
    strokeLinecap="round"
    strokeLinejoin="round"
    opacity={opacity}
  >
    <animate attributeName="d" dur="3.6s" values={VALUES} keyTimes="0;0.25;0.5;0.72;1" calcMode="spline" keySplines={SPLINES} fill="freeze" />
  </path>
);

const RibbonC = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-10 -10 220 200" className={`overflow-visible ${className}`} aria-hidden fill="none">
    <g className="ribbon-float">
      {/* satin ribbon: a wide translucent band framed by two fine edges */}
      <Strand offset={[0, 0]} width={7} opacity={0.18} />
      <Strand offset={[2.5, -2.5]} width={1.6} opacity={1} />
      <Strand offset={[-2, 2.5]} width={0.9} opacity={0.75} />
    </g>
  </svg>
);

export default RibbonC;
