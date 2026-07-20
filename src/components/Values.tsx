import { useLanguage } from "@/contexts/LanguageContext";

const Values = () => {
  const { t } = useLanguage();

  const values = [
    { key: "avantgardiste", num: "01" },
    { key: "creative", num: "02" },
    { key: "audacieuse", num: "03" },
    { key: "impertinente", num: "04" },
  ];

  return (
    <section id="values" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-sm font-title tracking-[0.3em] text-primary mb-4">
            {t("values.label")}
          </p>
          <h2 className="font-title text-3xl md:text-5xl text-foreground">
            {t("values.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {values.map((value) => (
            <div
              key={value.key}
              className="group bg-background p-10 hover:bg-primary/5 transition-all duration-500"
            >
              <div className="font-logo text-4xl text-primary mb-6 italic">
                {value.num}
              </div>
              <h3 className="font-title text-xl text-foreground mb-4">
                {t(`values.${value.key}`)}
              </h3>
              <div className="w-8 h-[1px] bg-primary mb-4 transition-all duration-500 group-hover:w-16" />
              <p className="font-text text-base text-muted-foreground leading-relaxed">
                {t(`values.${value.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
