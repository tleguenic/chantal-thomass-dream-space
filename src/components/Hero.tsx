import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/60 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="text-foreground mb-10 animate-fade-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
          <h1 className="sr-only">Chantal Thomass Paris</h1>
          <Logo size="lg" aria-hidden />
        </div>
        <p className="font-text text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed italic animate-fade-up opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
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
            className="inline-flex items-center justify-center px-10 py-4 border border-foreground/40 text-foreground font-title text-sm tracking-widest hover:border-primary hover:text-rose-ink transition-all duration-300"
          >
            {t("nav.licensing")}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-rose-ink to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
