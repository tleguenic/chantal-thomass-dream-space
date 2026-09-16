interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { name: "text-xl md:text-2xl", paris: "text-[9px]" },
  md: { name: "text-2xl md:text-3xl", paris: "text-[10px]" },
  lg: { name: "text-5xl md:text-7xl lg:text-8xl", paris: "text-sm md:text-base" },
};

const Logo = ({ size = "md", className = "" }: LogoProps) => {
  const s = sizes[size];

  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span className={`font-logo ${s.name} tracking-tight`}>Chantal Thomass</span>
      <span className="flex items-center gap-3 w-full mt-1">
        <span className="flex-1 h-px bg-current opacity-70" />
        <span className={`font-title font-normal ${s.paris} tracking-[0.35em]`}>PARIS</span>
        <span className="flex-1 h-px bg-current opacity-70" />
      </span>
    </span>
  );
};

export default Logo;
