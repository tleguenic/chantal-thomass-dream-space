import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

type Section = { title: string; body: string[] };

const content: Record<"fr" | "en", { title: string; updated: string; intro: string; sections: Section[] }> = {
  fr: {
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : octobre 2026",
    intro: "CHANTAL THOMASS SAS attache une grande importance à la protection de vos données personnelles. Cette politique explique quelles données nous recueillons, pourquoi et comment vous pouvez exercer vos droits.",
    sections: [
      { title: "1. Responsable du traitement", body: ["CHANTAL THOMASS SAS, SASU au capital de 1 000,00 €, RCS Paris 912 579 976, 6 rue Duret, 75016 Paris, France.", "Contact : contact@chantalthomass.com"] },
      { title: "2. Données collectées", body: ["Nous ne collectons que les données que vous nous transmettez volontairement par e-mail : nom, prénom, société, adresse e-mail, numéro de téléphone, pays et contenu de votre message.", "Lors de votre navigation, des données techniques peuvent être enregistrées par l'hébergeur (adresse IP, type de navigateur, pages consultées) à des fins de sécurité et de bon fonctionnement du site."] },
      { title: "3. Finalités", body: ["Vos données sont utilisées pour : répondre à vos demandes de contact ; étudier les demandes de licence ou de distribution exclusive ; assurer la sécurité et le bon fonctionnement du site.", "Elles ne sont jamais utilisées à des fins de prospection commerciale sans votre accord préalable."] },
      { title: "4. Base légale", body: ["Le traitement repose sur votre consentement lorsque vous nous contactez, sur notre intérêt légitime à développer nos partenariats et, le cas échéant, sur l'exécution de mesures précontractuelles prises à votre demande."] },
      { title: "5. Destinataires", body: ["Vos données sont destinées exclusivement aux équipes habilitées de CHANTAL THOMASS SAS et à ses prestataires techniques (hébergement, messagerie), tenus à la confidentialité. Elles ne sont ni vendues, ni louées, ni cédées à des tiers."] },
      { title: "6. Durée de conservation", body: ["Les données liées à une demande de contact ou de partenariat sont conservées 3 ans à compter du dernier échange. Les données techniques de connexion sont conservées 12 mois maximum."] },
      { title: "7. Transferts hors Union européenne", body: ["Certains prestataires techniques peuvent être situés hors de l'Union européenne. Dans ce cas, les transferts sont encadrés par des garanties appropriées, notamment les clauses contractuelles types de la Commission européenne."] },
      { title: "8. Cookies", body: ["Le site utilise uniquement des cookies strictement nécessaires à son fonctionnement, qui ne nécessitent pas votre consentement. Si des cookies de mesure d'audience ou publicitaires sont ajoutés, un bandeau vous permettra de les accepter ou de les refuser."] },
      { title: "9. Vos droits", body: ["Conformément au RGPD et à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition au traitement de vos données, ainsi que du droit de retirer votre consentement à tout moment.", "Pour exercer ces droits, écrivez à contact@chantalthomass.com ou à CHANTAL THOMASS SAS, 6 rue Duret, 75016 Paris. Une réponse vous sera apportée dans un délai d'un mois.", "Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr)."] },
      { title: "10. Sécurité", body: ["Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour protéger vos données contre toute perte, accès non autorisé ou divulgation."] },
      { title: "11. Modifications", body: ["Cette politique peut être mise à jour, notamment lors de l'ouverture de la boutique en ligne. La date de dernière mise à jour figure en haut de cette page."] },
    ],
  },
  en: {
    title: "Privacy policy",
    updated: "Last updated: October 2026",
    intro: "CHANTAL THOMASS SAS is committed to protecting your personal data. This policy explains what data we collect, why, and how you can exercise your rights.",
    sections: [
      { title: "1. Data controller", body: ["CHANTAL THOMASS SAS, simplified joint-stock company with a share capital of €1,000.00, RCS Paris 912 579 976, 6 rue Duret, 75016 Paris, France.", "Contact: contact@chantalthomass.com"] },
      { title: "2. Data collected", body: ["We only collect the data you voluntarily send us by e-mail: name, company, e-mail address, phone number, country and the content of your message.", "While you browse, technical data may be recorded by our host (IP address, browser type, pages visited) for security and proper operation of the website."] },
      { title: "3. Purposes", body: ["Your data is used to: answer your enquiries; review licensing or exclusive distribution requests; ensure the security and proper operation of the website.", "It is never used for marketing purposes without your prior consent."] },
      { title: "4. Legal basis", body: ["Processing is based on your consent when you contact us, on our legitimate interest in developing partnerships and, where applicable, on pre-contractual steps taken at your request."] },
      { title: "5. Recipients", body: ["Your data is accessible only to authorised CHANTAL THOMASS SAS staff and its technical providers (hosting, e-mail), who are bound by confidentiality. It is never sold, rented or transferred to third parties."] },
      { title: "6. Retention period", body: ["Data relating to contact or partnership requests is kept for 3 years from the last exchange. Technical connection data is kept for a maximum of 12 months."] },
      { title: "7. Transfers outside the European Union", body: ["Some technical providers may be located outside the European Union. In that case, transfers are protected by appropriate safeguards, including the European Commission's standard contractual clauses."] },
      { title: "8. Cookies", body: ["This website only uses cookies strictly necessary for its operation, which do not require your consent. If analytics or advertising cookies are added, a banner will let you accept or refuse them."] },
      { title: "9. Your rights", body: ["Under the GDPR, you have the right to access, rectify, erase, restrict, port and object to the processing of your data, and to withdraw your consent at any time.", "To exercise these rights, write to contact@chantalthomass.com or to CHANTAL THOMASS SAS, 6 rue Duret, 75016 Paris, France. We will reply within one month.", "You may also lodge a complaint with the CNIL (www.cnil.fr)."] },
      { title: "10. Security", body: ["We implement appropriate technical and organisational measures to protect your data against loss, unauthorised access or disclosure."] },
      { title: "11. Changes", body: ["This policy may be updated, in particular when the online store opens. The date of the latest update appears at the top of this page."] },
    ],
  },
};

const PrivacyPolicy = () => {
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
        <p className="font-text text-sm text-muted-foreground mb-10">{c.updated}</p>
        <p className="font-text text-muted-foreground leading-relaxed mb-16">{c.intro}</p>
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

export default PrivacyPolicy;
