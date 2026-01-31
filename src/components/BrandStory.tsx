import { useLanguage } from "@/contexts/LanguageContext";

const BrandStory = () => {
  const { t } = useLanguage();

  return (
    <section id="univers" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="text-sm font-sans tracking-[0.3em] text-primary uppercase">
              {t("brand.label")}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              {t("brand.title")}
              <span className="text-gradient-rose">{t("brand.title.highlight")}</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
              <p>{t("brand.text1")}</p>
              <p>{t("brand.text2")}</p>
            </div>
            <div className="pt-4">
              <a
                href="#collections"
                className="inline-flex items-center gap-3 text-primary font-sans text-sm tracking-widest uppercase group"
              >
                {t("brand.cta")}
                <span className="w-8 h-[1px] bg-primary transition-all duration-300 group-hover:w-12" />
              </a>
            </div>
          </div>

          {/* Right Content - Decorative */}
          <div className="relative">
            <div className="aspect-[3/4] bg-card border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-20 h-20 mx-auto mb-6 border border-primary rounded-full flex items-center justify-center">
                    <span className="font-serif text-3xl text-primary">CT</span>
                  </div>
                  <p className="font-serif text-2xl text-foreground italic mb-2">
                    {t("brand.quote")}
                  </p>
                  <p className="text-sm text-muted-foreground tracking-widest uppercase mt-4">
                    — Chantal Thomass
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
