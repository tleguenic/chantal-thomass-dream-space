import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

type Section = { title: string; body: string[] };

const company = [
  "CHANTAL THOMASS SAS",
  "SASU – société par actions simplifiée unipersonnelle, au capital de 1 000,00 €",
  "RCS Paris 912 579 976 – SIRET (siège) 912 579 976 00032",
  "TVA : FR09912579976",
  "Siège / Registered office : 6 rue Duret, 75016 Paris, France",
  "contact@chantal-thomass.com",
];

const content: Record<"fr" | "en", { title: string; updated: string; sections: Section[] }> = {
  fr: {
    title: "Mentions légales",
    updated: "Dernière mise à jour : octobre 2026",
    sections: [
      { title: "1. Éditeur du site", body: ["Le présent site est édité par :", ...company, "Directeur de la publication : Thierry Le Guénic."] },
      { title: "2. Hébergement", body: ["Le site est hébergé par Lovable Labs Incorporated (lovable.dev).", "À terme, la boutique en ligne sera hébergée par Shopify International Limited, Victoria Buildings, 2e étage, 1-2 Haddington Road, Dublin 4, D04 XN32, Irlande."] },
      { title: "3. Propriété intellectuelle", body: ["La marque Chantal Thomass, son logo et l'ensemble des éléments du site (textes, photographies, illustrations, charte graphique) sont la propriété exclusive de CHANTAL THOMASS SAS ou de ses partenaires et sont protégés par le droit de la propriété intellectuelle. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite."] },
      { title: "4. Données personnelles", body: ["Les informations transmises par e-mail (demandes de licence ou de distribution) sont utilisées uniquement pour répondre à votre demande. Elles ne sont ni vendues ni cédées à des tiers. Responsable du traitement : CHANTAL THOMASS SAS.", "Conformément au RGPD et à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition, en écrivant à contact@chantal-thomass.com. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr)."] },
      { title: "5. Cookies", body: ["Le site n'utilise que des cookies strictement nécessaires à son fonctionnement. Tout cookie de mesure d'audience ou publicitaire ajouté ultérieurement sera soumis à votre consentement préalable."] },
      { title: "6. Responsabilité", body: ["CHANTAL THOMASS SAS s'efforce d'assurer l'exactitude des informations diffusées, sans pouvoir en garantir l'exhaustivité. Elle ne saurait être tenue responsable du contenu des sites externes accessibles par des liens."] },
      { title: "7. Droit applicable", body: ["Les présentes mentions légales sont régies par le droit français. Tout litige relève de la compétence exclusive des tribunaux de Paris."] },
    ],
  },
  en: {
    title: "Legal notice",
    updated: "Last updated: October 2026",
    sections: [
      { title: "1. Publisher", body: ["This website is published by:", ...company, "Publication director: Thierry Le Guénic."] },
      { title: "2. Hosting", body: ["The website is hosted by Lovable Labs Incorporated (lovable.dev).", "The future online store will be hosted by Shopify International Limited, Victoria Buildings, 2nd floor, 1-2 Haddington Road, Dublin 4, D04 XN32, Ireland."] },
      { title: "3. Intellectual property", body: ["The Chantal Thomass trademark, its logo and all elements of this website (texts, photographs, illustrations, visual identity) are the exclusive property of CHANTAL THOMASS SAS or its partners and are protected by intellectual property law. Any reproduction, modification or distribution, in whole or in part, without prior written consent is prohibited."] },
      { title: "4. Personal data", body: ["Information sent by e-mail (licensing or distribution requests) is used solely to respond to your request. It is never sold or transferred to third parties. Data controller: CHANTAL THOMASS SAS.", "Under the GDPR, you have the right to access, rectify, erase and object to the processing of your data by writing to contact@chantal-thomass.com. You may also lodge a complaint with the CNIL (www.cnil.fr)."] },
      { title: "5. Cookies", body: ["This website only uses cookies strictly necessary for its operation. Any analytics or advertising cookies added later will require your prior consent."] },
      { title: "6. Liability", body: ["CHANTAL THOMASS SAS strives to ensure the accuracy of the information published but cannot guarantee its completeness, and is not responsible for the content of external websites linked from this site."] },
      { title: "7. Governing law", body: ["This legal notice is governed by French law. Any dispute falls under the exclusive jurisdiction of the courts of Paris."] },
    ],
  },
};

const LegalNotice = () => {
  const { language } = useLanguage();
  const c = content[language];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${c.title} – Chantal Thomass PARIS`;
  }, [c.title]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <Link to="/" aria-label="Chantal Thomass"><Logo size="sm" /></Link>
          <LanguageSwitcher />
        </div>
      </header>
      <main className="container mx-auto max-w-3xl px-6 py-20">
        <p className="font-title text-xs tracking-[0.4em] text-rose-ink uppercase mb-4">Chantal Thomass</p>
        <h1 className="font-title text-4xl md:text-5xl mb-4">{c.title}</h1>
        <p className="font-text text-sm text-muted-foreground mb-16">{c.updated}</p>
        <div className="space-y-12">
          {c.sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-title text-xl mb-4">{s.title}</h2>
              <div className="space-y-2">
                {s.body.map((p) => (
                  <p key={p} className="font-text text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotice;
