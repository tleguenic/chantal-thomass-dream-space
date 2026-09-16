import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex flex-col items-start leading-none">
          <span className="font-logo text-2xl md:text-3xl text-foreground">
            Chantal Thomass
          </span>
          <span className="font-title text-[10px] tracking-[0.4em] text-rose-ink mt-1">
            PARIS
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-8">
          <a href="#univers" className="text-xs font-title tracking-widest text-muted-foreground hover:text-rose-ink transition-colors">
            {t("nav.universe")}
          </a>
          <a href="#values" className="text-xs font-title tracking-widest text-muted-foreground hover:text-rose-ink transition-colors">
            {t("nav.values")}
          </a>
          <a href="#derived" className="text-xs font-title tracking-widest text-muted-foreground hover:text-rose-ink transition-colors">
            {t("nav.derived")}
          </a>
          <a href="#licensing" className="text-xs font-title tracking-widest text-muted-foreground hover:text-rose-ink transition-colors">
            {t("nav.licensing")}
          </a>
        </div>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <a href="#contact" className="hidden sm:block text-xs font-title tracking-widest text-foreground hover:text-rose-ink transition-colors">
            {t("nav.contact")}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
