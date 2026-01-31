import { useLanguage } from "@/contexts/LanguageContext";

const Licensing = () => {
  const { t } = useLanguage();

  const regions = [
    { key: "europe", icon: "🇪🇺" },
    { key: "asia", icon: "🌏" },
    { key: "americas", icon: "🌎" },
    { key: "middleeast", icon: "🌍" },
  ];

  return (
    <section id="licensing" className="py-32 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-sans tracking-[0.3em] text-primary uppercase mb-4">
            {t("licensing.label")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            {t("licensing.title")}
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("licensing.subtitle")}
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regions.map((region) => (
            <div
              key={region.key}
              className="group p-8 bg-background border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <span className="text-4xl mb-4 block">{region.icon}</span>
              <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {t(`licensing.region.${region.key}`)}
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                {t(`licensing.region.${region.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="bg-background border border-border p-12 mb-16">
          <h3 className="font-serif text-2xl text-foreground text-center mb-10">
            {t("licensing.categories.title")}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 border border-primary rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-serif text-lg text-foreground mb-2">
                {t("licensing.cat.lingerie")}
              </h4>
              <p className="font-sans text-sm text-muted-foreground">
                {t("licensing.cat.lingerie.desc")}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 border border-primary rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="font-serif text-lg text-foreground mb-2">
                {t("licensing.cat.accessories")}
              </h4>
              <p className="font-sans text-sm text-muted-foreground">
                {t("licensing.cat.accessories.desc")}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 border border-primary rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 className="font-serif text-lg text-foreground mb-2">
                {t("licensing.cat.home")}
              </h4>
              <p className="font-sans text-sm text-muted-foreground">
                {t("licensing.cat.home.desc")}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-sans text-muted-foreground mb-8 max-w-xl mx-auto">
            {t("licensing.cta.text")}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-12 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 hover-rose-glow"
          >
            {t("licensing.cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Licensing;
