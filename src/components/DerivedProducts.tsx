import { useLanguage } from "@/contexts/LanguageContext";
import parfum from "@/assets/product-parfum.jpg";
import lipstick from "@/assets/product-lipstick.jpg";
import jewelry from "@/assets/product-jewelry.jpg";
import slippers from "@/assets/product-slippers.jpg";
import lifestyle from "@/assets/product-lifestyle.jpg";

const DerivedProducts = () => {
  const { t } = useLanguage();

  const products = [
    { key: "parfum", image: parfum, span: "md:col-span-2 md:row-span-2" },
    { key: "lipstick", image: lipstick, span: "" },
    { key: "jewelry", image: jewelry, span: "" },
    { key: "slippers", image: slippers, span: "" },
    { key: "lifestyle", image: lifestyle, span: "md:col-span-2" },
  ];

  return (
    <section id="derived" className="py-32 px-6 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-sm font-title tracking-[0.3em] text-rose-ink mb-4">
            {t("derived.label")}
          </p>
          <h2 className="font-title text-3xl md:text-5xl text-foreground mb-6">
            {t("derived.title")}
          </h2>
          <p className="font-text text-lg text-muted-foreground leading-relaxed">
            {t("derived.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
          {products.map((product) => (
            <article
              key={product.key}
              className={`group relative overflow-hidden bg-background border border-border ${product.span}`}
            >
              <img
                src={product.image}
                alt={t(`derived.${product.key}`)}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-title text-lg text-blanc mb-2">
                  {t(`derived.${product.key}`)}
                </h3>
                <p className="font-text text-sm text-blanc/80 leading-relaxed max-w-sm">
                  {t(`derived.${product.key}.desc`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DerivedProducts;
