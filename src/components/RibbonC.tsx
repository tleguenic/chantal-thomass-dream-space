const PATH =
  "M 118 14 C 150 4, 178 22, 162 46 C 132 16, 62 22, 46 76 C 32 126, 72 176, 126 166 C 156 160, 172 140, 162 125 C 152 111, 130 124, 145 140 C 160 156, 186 150, 196 134";

const RibbonC = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 190" className={className} aria-hidden fill="none">
    <defs>
      <linearGradient id="ribbon-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(var(--rose-quartz))" />
        <stop offset="55%" stopColor="hsl(var(--rose-ink))" />
        <stop offset="100%" stopColor="hsl(var(--rose-quartz))" />
      </linearGradient>
    </defs>
    {/* wide soft ribbon body */}
    <path d={PATH} pathLength={1} className="ribbon-draw" stroke="url(#ribbon-grad)" strokeWidth={9} strokeLinecap="round" opacity={0.55} />
    {/* offset edge giving the twisted satin look */}
    <path d={PATH} pathLength={1} className="ribbon-draw [animation-delay:0.12s]" transform="translate(3 -3)" stroke="hsl(var(--rose-ink))" strokeWidth={1.6} strokeLinecap="round" />
    <path d={PATH} pathLength={1} className="ribbon-draw [animation-delay:0.06s]" transform="translate(-2 3)" stroke="hsl(var(--rose-ink))" strokeWidth={0.8} strokeLinecap="round" opacity={0.7} />
  </svg>
);

export default RibbonC;
