import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
        <div className="flex items-center gap-12">
          <a href="/" className="font-serif text-2xl tracking-wider text-foreground">
            CHANTAL THOMASS
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#univers"
              className="text-sm font-sans tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {t("nav.universe")}
            </a>
            <a
              href="#licensing"
              className="text-sm font-sans tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {t("nav.licensing")}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="hidden sm:block text-sm font-sans tracking-widest text-foreground hover:text-primary transition-colors uppercase"
          >
            {t("nav.contact")}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
