import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm md:text-base font-title tracking-[0.4em] text-primary mb-6 animate-fade-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
          {t("hero.since")}
        </p>
        <h1 className="font-logo text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 animate-fade-up opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards] not-italic">
          Chantal Thomass
        </h1>
        <p className="font-text text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
          {t("hero.tagline")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
          <a
            href="#univers"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-title text-sm tracking-widest hover:bg-primary/90 transition-all duration-300 hover-rose-glow"
          >
            {t("hero.discover")}
          </a>
          <a
            href="#licensing"
            className="inline-flex items-center justify-center px-10 py-4 border border-foreground/30 text-foreground font-title text-sm tracking-widest hover:border-primary hover:text-primary transition-all duration-300"
          >
            {t("hero.universe")}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
