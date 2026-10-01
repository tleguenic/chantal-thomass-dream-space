import { useLanguage } from "@/contexts/LanguageContext";
import moodboard from "@/assets/brand-photo.png";

const BrandStory = () => {
  const { t } = useLanguage();

  return (
    <section id="univers" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-sm font-title tracking-[0.3em] text-rose-ink">
              {t("brand.label")}
            </p>
            <h2 className="font-title text-3xl md:text-5xl text-foreground leading-tight">
              {t("brand.title")}
              <span className="text-gradient-rose">{t("brand.title.highlight")}</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-text text-lg leading-relaxed">
              <p>{t("brand.text1")}</p>
              <p>{t("brand.text2")}</p>
            </div>
            <div className="pt-4">
              <a
                href="#values"
                className="inline-flex items-center gap-3 text-rose-ink font-title text-sm tracking-widest group"
              >
                {t("brand.cta")}
                <span className="w-8 h-[1px] bg-rose-ink transition-all duration-300 group-hover:w-12" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-card border border-border overflow-hidden">
              <img
                src={moodboard}
                alt="Chantal Thomass Moodboard"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-background border border-primary/40 p-8 max-w-sm shadow-2xl">
              <p className="font-logo text-xl text-foreground italic leading-snug mb-3">
                {t("brand.quote")}
              </p>
              <p className="text-xs text-rose-ink font-title tracking-widest">
                — INSIGHT · CHANTAL THOMASS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
