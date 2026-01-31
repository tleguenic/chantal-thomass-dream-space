import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Collections = () => {
  const { t } = useLanguage();

  const collections = [
    {
      id: 1,
      nameKey: "collection.signature",
      descKey: "collection.signature.desc",
      image: collection1,
    },
    {
      id: 2,
      nameKey: "collection.nuit",
      descKey: "collection.nuit.desc",
      image: collection2,
    },
    {
      id: 3,
      nameKey: "collection.essentiels",
      descKey: "collection.essentiels.desc",
      image: collection3,
    },
  ];

  return (
    <section id="collections" className="py-32 px-6 bg-card">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-sans tracking-[0.3em] text-primary uppercase mb-4">
            {t("collections.label")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            {t("collections.title")}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <article
              key={collection.id}
              className="group cursor-pointer animate-fade-up opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-6">
                <img
                  src={collection.image}
                  alt={t(collection.nameKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-sm font-sans tracking-widest text-primary uppercase">
                    {t("collections.discover")}
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {t(collection.nameKey)}
              </h3>
              <p className="font-sans text-sm text-muted-foreground tracking-wide">
                {t(collection.descKey)}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center justify-center px-12 py-4 border border-primary text-primary font-sans text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            {t("collections.viewAll")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collections;
