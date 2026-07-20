import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Header
    "nav.universe": "L'Univers",
    "nav.values": "Valeurs",
    "nav.derived": "Produits Dérivés",
    "nav.licensing": "Licences",
    "nav.contact": "Contact",

    // Hero
    "hero.since": "PARIS",
    "hero.tagline": "« Je m'aime » — Une lingerie pour se faire plaisir, se valoriser, retrouver la séduction et le glamour.",
    "hero.discover": "Découvrir",
    "hero.universe": "L'Univers",

    // Brand Story - Les Dessous Chics / L'Identité
    "brand.label": "LES DESSOUS CHICS · L'IDENTITÉ",
    "brand.title": "Une séduction",
    "brand.title.highlight": " singulière",
    "brand.text1": "Une lingerie pour s'aimer, pour se faire plaisir, pour se valoriser. Un retour bienveillant à la séduction et au glamour, à la recherche du confort, de la liberté de mouvement, de la légèreté et de l'invisibilité.",
    "brand.text2": "Chantal Thomass revient à ses codes propres et différenciants. Avant-gardiste, créative, audacieuse et impertinente, la lingerie se redessine tout en sensualité — le goût des belles matières, l'esprit boudoir, l'identité du défilé, le lien au prêt-à-porter.",
    "brand.cta": "Découvrir la vision",
    "brand.quote": "« Je ne porte pas de la lingerie pour séduire mon partenaire, mais pour me séduire avant tout. »",

    // Values
    "values.label": "NOS VALEURS",
    "values.title": "Quatre mots pour une signature",
    "values.avantgardiste": "Avant-gardiste",
    "values.avantgardiste.desc": "Précurseur de la lingerie fine, toujours une saison en avance sur l'air du temps.",
    "values.creative": "Créative",
    "values.creative.desc": "Le goût des belles matières empruntées au prêt-à-porter, l'esprit défilé.",
    "values.audacieuse": "Audacieuse",
    "values.audacieuse.desc": "Une séduction glamour et assumée, un retour bienveillant au pouvoir féminin.",
    "values.impertinente": "Impertinente",
    "values.impertinente.desc": "L'esprit boudoir, la petite touche noire et rose qui change tout.",

    // Derived Products
    "derived.label": "PRODUITS DÉRIVÉS",
    "derived.title": "Une parure complète",
    "derived.subtitle": "La lingerie devient un élément du look à part entière, comme un bijou. L'univers Chantal Thomass se prolonge en accessoires, senteurs et art de vivre.",
    "derived.parfum": "Parfum",
    "derived.parfum.desc": "Un marketing olfactif : les effluves de la fragrance se retrouvent en boutique et dans chaque colis.",
    "derived.lipstick": "Rouge à Lèvres",
    "derived.lipstick.desc": "Le rouge signature — cette bouche pulpeuse qui traverse toute l'iconographie de la maison.",
    "derived.jewelry": "Bijoux de Corps",
    "derived.jewelry.desc": "Des parures fines à porter sur la peau, prolongement délicat de la lingerie.",
    "derived.slippers": "Chaussons",
    "derived.slippers.desc": "L'esprit boudoir jusqu'au sol, en velours rose et nœuds de satin noir.",
    "derived.lifestyle": "Art de Vivre",
    "derived.lifestyle.desc": "Chaque objet de décoration en boutique est disponible à la vente : coussins, miroirs, mobilier.",
    "derived.travel": "Kit de Voyage",
    "derived.travel.desc": "Une paire de chaussons, un masque de nuit, un coussin — le boudoir en cabine.",

    // Licensing
    "licensing.label": "OPPORTUNITÉS MONDIALES",
    "licensing.title": "Devenez licencié Chantal Thomass",
    "licensing.subtitle": "La maison développe ses partenariats à travers le monde. Rejoignez l'univers d'une marque iconique du luxe parisien.",
    "licensing.region.europe": "Europe",
    "licensing.region.europe.desc": "Opportunités disponibles",
    "licensing.region.asia": "Asie-Pacifique",
    "licensing.region.asia.desc": "Marchés en développement",
    "licensing.region.americas": "Amériques",
    "licensing.region.americas.desc": "Nouvelles opportunités",
    "licensing.region.middleeast": "Moyen-Orient & Afrique",
    "licensing.region.middleeast.desc": "Expansion en cours",
    "licensing.cta.text": "Vous souhaitez développer une catégorie sous licence Chantal Thomass dans votre région ? Contactez-nous.",
    "licensing.cta.button": "Nous Contacter",

    // Footer
    "footer.description": "Depuis 1975, Chantal Thomass PARIS célèbre la féminité avec avant-garde, créativité, audace et impertinence. La signature française de la lingerie de séduction.",
    "footer.house": "La Maison",
    "footer.history": "L'Univers",
    "footer.values": "Nos Valeurs",
    "footer.derived": "Produits Dérivés",
    "footer.partnership": "Licences & Partenariats",
    "footer.contact": "Contact",
    "footer.legal": "Mentions Légales",
    "footer.privacy": "Politique de Confidentialité",
    "footer.rights": "© 2026 Chantal Thomass PARIS. Tous droits réservés.",
    "footer.tagline": "PARIS",
  },
  en: {
    // Header
    "nav.universe": "Universe",
    "nav.values": "Values",
    "nav.derived": "Derived Products",
    "nav.licensing": "Licensing",
    "nav.contact": "Contact",

    // Hero
    "hero.since": "PARIS",
    "hero.tagline": "\"I love myself\" — Lingerie to please oneself, to feel valued, to rediscover seduction and glamour.",
    "hero.discover": "Discover",
    "hero.universe": "Universe",

    // Brand Story
    "brand.label": "LES DESSOUS CHICS · IDENTITY",
    "brand.title": "A singular",
    "brand.title.highlight": " seduction",
    "brand.text1": "Lingerie to love oneself, to enjoy oneself, to feel valued. A benevolent return to seduction and glamour, in search of comfort, freedom of movement, lightness and invisibility.",
    "brand.text2": "Chantal Thomass returns to her own distinctive codes. Avant-garde, creative, audacious and impertinent, lingerie is redrawn in sensuality — a taste for fine materials, the boudoir spirit, the runway identity, the ready-to-wear link.",
    "brand.cta": "Discover the vision",
    "brand.quote": "\"I don't wear lingerie to seduce my partner, but to seduce myself first.\"",

    // Values
    "values.label": "OUR VALUES",
    "values.title": "Four words, one signature",
    "values.avantgardiste": "Avant-garde",
    "values.avantgardiste.desc": "Pioneer of fine lingerie, always one season ahead of the zeitgeist.",
    "values.creative": "Creative",
    "values.creative.desc": "A taste for fine materials borrowed from ready-to-wear, the runway spirit.",
    "values.audacieuse": "Audacious",
    "values.audacieuse.desc": "A glamorous, assumed seduction — a benevolent return to feminine power.",
    "values.impertinente": "Impertinent",
    "values.impertinente.desc": "The boudoir spirit, the small black-and-pink touch that changes everything.",

    // Derived Products
    "derived.label": "DERIVED PRODUCTS",
    "derived.title": "A complete adornment",
    "derived.subtitle": "Lingerie becomes a full part of the look — like a piece of jewelry. The Chantal Thomass universe extends into accessories, scents and lifestyle.",
    "derived.parfum": "Fragrance",
    "derived.parfum.desc": "Olfactory marketing: the fragrance is found in every boutique and every parcel.",
    "derived.lipstick": "Lipstick",
    "derived.lipstick.desc": "The signature red — that pouty mouth running through the entire house iconography.",
    "derived.jewelry": "Body Jewelry",
    "derived.jewelry.desc": "Delicate pieces worn on the skin, a fine extension of lingerie.",
    "derived.slippers": "Slippers",
    "derived.slippers.desc": "The boudoir spirit down to the floor, in pink velvet with black satin bows.",
    "derived.lifestyle": "Lifestyle",
    "derived.lifestyle.desc": "Every decorative object in the boutique is available for sale: cushions, mirrors, furniture.",
    "derived.travel": "Travel Kit",
    "derived.travel.desc": "A pair of slippers, a sleep mask, a cushion — the boudoir on board.",

    // Licensing
    "licensing.label": "GLOBAL OPPORTUNITIES",
    "licensing.title": "Become a Chantal Thomass licensee",
    "licensing.subtitle": "The house is developing partnerships worldwide. Join the universe of an iconic Parisian luxury brand.",
    "licensing.region.europe": "Europe",
    "licensing.region.europe.desc": "Opportunities available",
    "licensing.region.asia": "Asia-Pacific",
    "licensing.region.asia.desc": "Developing markets",
    "licensing.region.americas": "Americas",
    "licensing.region.americas.desc": "New opportunities",
    "licensing.region.middleeast": "Middle East & Africa",
    "licensing.region.middleeast.desc": "Expansion underway",
    "licensing.cta.text": "Interested in developing a licensed Chantal Thomass category in your region? Contact us.",
    "licensing.cta.button": "Contact Us",

    // Footer
    "footer.description": "Since 1975, Chantal Thomass PARIS celebrates femininity with avant-garde, creativity, audacity and impertinence. The French signature of seductive lingerie.",
    "footer.house": "The House",
    "footer.history": "Universe",
    "footer.values": "Our Values",
    "footer.derived": "Derived Products",
    "footer.partnership": "Licensing & Partnerships",
    "footer.contact": "Contact",
    "footer.legal": "Legal Notice",
    "footer.privacy": "Privacy Policy",
    "footer.rights": "© 2026 Chantal Thomass PARIS. All rights reserved.",
    "footer.tagline": "PARIS",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
