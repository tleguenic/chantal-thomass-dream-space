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
    "nav.licensing": "Licences",
    "nav.contact": "Contact",
    
    // Hero
    "hero.since": "PARIS • DEPUIS 1975",
    "hero.tagline": "L'art de la séduction à la française. Depuis près de 50 ans, Chantal Thomass sublime la féminité avec audace et élégance.",
    "hero.discover": "Découvrir",
    "hero.universe": "L'Univers",
    
    // Brand Story
    "brand.label": "L'Esprit de la Marque",
    "brand.title": "Une vision audacieuse de la",
    "brand.title.highlight": " féminité",
    "brand.text1": "Depuis 1975, Chantal Thomass incarne l'élégance parisienne avec une touche d'impertinence. Pionnière de la lingerie de luxe, elle a révolutionné le dessous féminin en le transformant en véritable objet de désir.",
    "brand.text2": "Le noir et rose signature, la dentelle délicate, les nœuds précieux... Chaque création est une invitation à la séduction, un hommage à la femme qui ose affirmer sa sensualité.",
    "brand.cta": "Découvrir l'histoire",
    "brand.quote": "\"La lingerie, c'est l'armure secrète de la femme\"",

    // Licensing
    "licensing.label": "Opportunités Mondiales",
    "licensing.title": "Devenez Partenaire",
    "licensing.subtitle": "Rejoignez l'univers Chantal Thomass et développez la marque dans votre région. Nous recherchons des partenaires passionnés à travers le monde.",
    "licensing.region.europe": "Europe",
    "licensing.region.europe.desc": "Opportunités disponibles",
    "licensing.region.asia": "Asie-Pacifique",
    "licensing.region.asia.desc": "Marchés en développement",
    "licensing.region.americas": "Amériques",
    "licensing.region.americas.desc": "Nouvelles opportunités",
    "licensing.region.middleeast": "Moyen-Orient & Afrique",
    "licensing.region.middleeast.desc": "Expansion en cours",
    "licensing.categories.title": "Catégories de Licences",
    "licensing.cat.lingerie": "Lingerie & Corseterie",
    "licensing.cat.lingerie.desc": "Le cœur de métier historique de la marque",
    "licensing.cat.accessories": "Accessoires & Beauté",
    "licensing.cat.accessories.desc": "Parfums, bijoux, accessoires mode",
    "licensing.cat.home": "Art de Vivre",
    "licensing.cat.home.desc": "Linge de maison, décoration boudoir",
    "licensing.cta.text": "Vous souhaitez devenir licencié Chantal Thomass ? Contactez-nous pour discuter des opportunités dans votre région.",
    "licensing.cta.button": "Nous Contacter",
    
    // Footer
    "footer.description": "Depuis 1975, la maison Chantal Thomass célèbre la féminité avec audace et raffinement. Une vision unique de la lingerie de luxe, signature de l'élégance parisienne.",
    "footer.house": "La Maison",
    "footer.history": "Notre Histoire",
    "footer.craftsmanship": "Savoir-faire",
    "footer.press": "Presse",
    "footer.partnership": "Partenariat",
    "footer.contact": "Contact",
    "footer.customerService": "Service Client",
    "footer.faq": "FAQ",
    "footer.legal": "Mentions Légales",
    "footer.privacy": "Politique de Confidentialité",
    "footer.rights": "© 2025 Chantal Thomass. Tous droits réservés.",
    "footer.tagline": "L'ÉLÉGANCE À LA FRANÇAISE",
  },
  en: {
    // Header
    "nav.universe": "The Universe",
    "nav.licensing": "Licensing",
    "nav.contact": "Contact",
    
    // Hero
    "hero.since": "PARIS • SINCE 1975",
    "hero.tagline": "The art of French seduction. For nearly 50 years, Chantal Thomass has been enhancing femininity with boldness and elegance.",
    "hero.discover": "Discover",
    "hero.universe": "The Universe",
    
    // Brand Story
    "brand.label": "The Brand Spirit",
    "brand.title": "A bold vision of",
    "brand.title.highlight": " femininity",
    "brand.text1": "Since 1975, Chantal Thomass embodies Parisian elegance with a touch of impertinence. A pioneer in luxury lingerie, she revolutionized women's undergarments by transforming them into true objects of desire.",
    "brand.text2": "The signature black and pink, delicate lace, precious bows... Each creation is an invitation to seduction, a tribute to women who dare to embrace their sensuality.",
    "brand.cta": "Discover the story",
    "brand.quote": "\"Lingerie is a woman's secret armor\"",

    // Licensing
    "licensing.label": "Global Opportunities",
    "licensing.title": "Become a Partner",
    "licensing.subtitle": "Join the Chantal Thomass universe and develop the brand in your region. We are looking for passionate partners worldwide.",
    "licensing.region.europe": "Europe",
    "licensing.region.europe.desc": "Opportunities available",
    "licensing.region.asia": "Asia-Pacific",
    "licensing.region.asia.desc": "Developing markets",
    "licensing.region.americas": "Americas",
    "licensing.region.americas.desc": "New opportunities",
    "licensing.region.middleeast": "Middle East & Africa",
    "licensing.region.middleeast.desc": "Expansion underway",
    "licensing.categories.title": "Licensing Categories",
    "licensing.cat.lingerie": "Lingerie & Corsetry",
    "licensing.cat.lingerie.desc": "The brand's historic core business",
    "licensing.cat.accessories": "Accessories & Beauty",
    "licensing.cat.accessories.desc": "Perfumes, jewelry, fashion accessories",
    "licensing.cat.home": "Lifestyle",
    "licensing.cat.home.desc": "Home linens, boudoir decoration",
    "licensing.cta.text": "Interested in becoming a Chantal Thomass licensee? Contact us to discuss opportunities in your region.",
    "licensing.cta.button": "Contact Us",
    
    // Footer
    "footer.description": "Since 1975, Maison Chantal Thomass celebrates femininity with boldness and refinement. A unique vision of luxury lingerie, the signature of Parisian elegance.",
    "footer.house": "The House",
    "footer.history": "Our History",
    "footer.craftsmanship": "Craftsmanship",
    "footer.press": "Press",
    "footer.partnership": "Partnership",
    "footer.contact": "Contact",
    "footer.customerService": "Customer Service",
    "footer.faq": "FAQ",
    "footer.legal": "Legal Notice",
    "footer.privacy": "Privacy Policy",
    "footer.rights": "© 2025 Chantal Thomass. All rights reserved.",
    "footer.tagline": "FRENCH ELEGANCE",
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
