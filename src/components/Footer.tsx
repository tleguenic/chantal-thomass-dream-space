import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="container mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-6 text-foreground">
              <Logo size="md" />
            </div>
            <p className="font-text text-muted-foreground leading-relaxed max-w-md mb-6">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-rose-ink transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-rose-ink transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-title text-xs tracking-widest text-foreground mb-6">
              {t("footer.house")}
            </h4>
            <ul className="space-y-4">
              <li><a href="#univers" className="font-text text-muted-foreground hover:text-rose-ink transition-colors">{t("footer.history")}</a></li>
              <li><a href="#values" className="font-text text-muted-foreground hover:text-rose-ink transition-colors">{t("footer.values")}</a></li>
              <li><a href="#derived" className="font-text text-muted-foreground hover:text-rose-ink transition-colors">{t("footer.derived")}</a></li>
              <li><a href="#licensing" className="font-text text-muted-foreground hover:text-rose-ink transition-colors">{t("footer.partnership")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-title text-xs tracking-widest text-foreground mb-6">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4">
              <li><a href="mailto:contact@chantalthomass.com" className="font-text text-muted-foreground hover:text-rose-ink transition-colors">contact@chantalthomass.com</a></li>
              <li><a href="#" className="font-text text-muted-foreground hover:text-rose-ink transition-colors">{t("footer.legal")}</a></li>
              <li><a href="#" className="font-text text-muted-foreground hover:text-rose-ink transition-colors">{t("footer.privacy")}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-text text-sm text-muted-foreground">{t("footer.rights")}</p>
          <p className="font-title text-xs text-rose-ink tracking-[0.5em]">{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
