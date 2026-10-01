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
    "hero.tagline": "Un art de vivre parisien, audacieux et glamour, qui célèbre toutes les femmes.",
    "hero.discover": "Découvrir",
    "hero.universe": "L'Univers",

    // Brand Story - L'Identité
    "brand.label": "L'ESPRIT CHANTAL THOMASS · L'IDENTITÉ",
    "brand.title": "Une séduction",
    "brand.title.highlight": " singulière",
    "brand.text1": "Depuis 1975, Chantal Thomass incarne une certaine idée de la Parisienne : libre, espiègle, sûre d'elle. Une maison qui invite chaque femme à s'aimer, à se faire plaisir et à cultiver sa propre séduction.",
    "brand.text2": "Née de la mode et du défilé, la signature Chantal Thomass se décline aujourd'hui en un univers complet — lingerie, beauté, parfum, bijoux, accessoires et décoration. Avant-gardiste, créative, audacieuse et impertinente, avec toujours cette touche noire et rose inimitable.",
    "brand.cta": "Découvrir la vision",
    "brand.quote": "« Se séduire soi-même, avant tout. »",

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
    "derived.subtitle": "Beauté, parfum, bijoux, accessoires, maison : l'univers Chantal Thomass se vit à chaque instant de la journée, comme une signature.",
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
    "footer.description": "Depuis 1975, Chantal Thomass PARIS célèbre la féminité avec avant-garde, créativité, audace et impertinence. Une signature parisienne de la séduction et de l'art de vivre.",
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
    "hero.tagline": "A bold, glamorous Parisian art of living that celebrates every woman.",
    "hero.discover": "Discover",
    "hero.universe": "Universe",

    // Brand Story
    "brand.label": "THE CHANTAL THOMASS SPIRIT · IDENTITY",
    "brand.title": "A singular",
    "brand.title.highlight": " seduction",
    "brand.text1": "Since 1975, Chantal Thomass has embodied a certain idea of the Parisienne: free, playful, self-assured. A house that invites every woman to love herself, to indulge and to cultivate her own seduction.",
    "brand.text2": "Born from fashion and the runway, the Chantal Thomass signature now extends into a complete universe — lingerie, beauty, fragrance, jewelry, accessories and home decor. Avant-garde, creative, audacious and impertinent, always with that inimitable black-and-pink touch.",
    "brand.cta": "Discover the vision",
    "brand.quote": "\"Seduce yourself, first and foremost.\"",

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
    "derived.subtitle": "Beauty, fragrance, jewelry, accessories, home: the Chantal Thomass universe is lived at every moment of the day, like a signature.",
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
    "footer.description": "Since 1975, Chantal Thomass PARIS celebrates femininity with avant-garde, creativity, audacity and impertinence. A Parisian signature of seduction and art of living.",
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
