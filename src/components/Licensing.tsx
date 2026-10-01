import { useLanguage } from "@/contexts/LanguageContext";

const Licensing = () => {
  const { t } = useLanguage();

  const regions = [
    { key: "europe" },
    { key: "asia" },
    { key: "americas" },
    { key: "middleeast" },
  ];

  return (
    <section id="licensing" className="py-32 px-6 bg-background border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <p className="text-sm font-title tracking-[0.3em] text-rose-ink mb-4">
            {t("licensing.label")}
          </p>
          <p className="font-text text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("licensing.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-16">
          {regions.map((region) => (
            <div
              key={region.key}
              className="group p-10 bg-background hover:bg-primary/5 transition-all duration-500 text-center"
            >
              <div className="w-12 h-[1px] bg-rose-ink mx-auto mb-6 transition-all duration-500 group-hover:w-20" />
              <h3 className="font-title text-base text-foreground mb-3 group-hover:text-rose-ink transition-colors">
                {t(`licensing.region.${region.key}`)}
              </h3>
              <p className="font-text text-sm text-muted-foreground italic">
                {t(`licensing.region.${region.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-text text-lg text-muted-foreground italic mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("licensing.cta.text")}
          </p>
          <a
            href="mailto:contact@chantalthomass.com"
            className="inline-flex items-center justify-center px-12 py-4 bg-primary text-primary-foreground font-title text-sm tracking-widest hover:bg-primary/90 transition-all duration-300 hover-rose-glow"
          >
            {t("licensing.cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Licensing;
