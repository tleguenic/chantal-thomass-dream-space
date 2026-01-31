import { useLanguage } from "@/contexts/LanguageContext";
import brandImage from "@/assets/brand-image.jpg";

const BrandStory = () => {
  const { t } = useLanguage();

  return (
    <section id="univers" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="text-sm font-title tracking-[0.3em] text-primary">
              {t("brand.label")}
            </p>
            <h2 className="font-title text-3xl md:text-4xl text-foreground leading-tight">
              {t("brand.title")}
              <span className="text-gradient-rose">{t("brand.title.highlight")}</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-text text-lg leading-relaxed">
              <p>{t("brand.text1")}</p>
              <p>{t("brand.text2")}</p>
            </div>
            <div className="pt-4">
              <a
                href="#licensing"
                className="inline-flex items-center gap-3 text-primary font-title text-sm tracking-widest group"
              >
                {t("brand.cta")}
                <span className="w-8 h-[1px] bg-primary transition-all duration-300 group-hover:w-12" />
              </a>
            </div>
          </div>

          {/* Right Content - Brand Image */}
          <div className="relative">
            <div className="aspect-[3/4] bg-card border border-border overflow-hidden">
              <img 
                src={brandImage} 
                alt="Chantal Thomass" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Quote overlay */}
            <div className="absolute -bottom-8 -left-8 bg-background border border-border p-8 max-w-xs">
              <p className="font-logo text-xl text-foreground italic mb-2">
                {t("brand.quote")}
              </p>
              <p className="text-sm text-muted-foreground font-title tracking-widest">
                — CHANTAL THOMASS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
