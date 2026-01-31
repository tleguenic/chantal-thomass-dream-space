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
    "nav.collections": "Collections",
    "nav.universe": "L'Univers",
    "nav.boutiques": "Boutiques",
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
    
    // Collections
    "collections.label": "Nos Créations",
    "collections.title": "Collections",
    "collections.discover": "Découvrir",
    "collections.viewAll": "Voir toutes les collections",
    "collection.signature": "Signature",
    "collection.signature.desc": "L'essence de la marque",
    "collection.nuit": "Nuit Parisienne",
    "collection.nuit.desc": "Élégance nocturne",
    "collection.essentiels": "Les Essentiels",
    "collection.essentiels.desc": "Intemporels raffinés",
    
    // Footer
    "footer.description": "Depuis 1975, la maison Chantal Thomass célèbre la féminité avec audace et raffinement. Une vision unique de la lingerie de luxe, signature de l'élégance parisienne.",
    "footer.house": "La Maison",
    "footer.history": "Notre Histoire",
    "footer.craftsmanship": "Savoir-faire",
    "footer.boutiques": "Boutiques",
    "footer.press": "Presse",
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
    "nav.collections": "Collections",
    "nav.universe": "The Universe",
    "nav.boutiques": "Boutiques",
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
    
    // Collections
    "collections.label": "Our Creations",
    "collections.title": "Collections",
    "collections.discover": "Discover",
    "collections.viewAll": "View all collections",
    "collection.signature": "Signature",
    "collection.signature.desc": "The brand's essence",
    "collection.nuit": "Parisian Night",
    "collection.nuit.desc": "Nocturnal elegance",
    "collection.essentiels": "The Essentials",
    "collection.essentiels.desc": "Refined timeless pieces",
    
    // Footer
    "footer.description": "Since 1975, Maison Chantal Thomass celebrates femininity with boldness and refinement. A unique vision of luxury lingerie, the signature of Parisian elegance.",
    "footer.house": "The House",
    "footer.history": "Our History",
    "footer.craftsmanship": "Craftsmanship",
    "footer.boutiques": "Boutiques",
    "footer.press": "Press",
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
