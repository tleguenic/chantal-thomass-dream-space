import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-sans tracking-wider">
      <button
        onClick={() => setLanguage("fr")}
        className={`px-2 py-1 transition-colors ${
          language === "fr"
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        FR
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 transition-colors ${
          language === "en"
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
