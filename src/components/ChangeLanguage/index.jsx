import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowLeft, Globe, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const LanguageSwitcher = ({ className }) => {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);

  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const handleToggle = () => {
    if (isOpen) {
      setShowLanguages(false);
      setTimeout(() => setIsOpen(false), 150);
    } else {
      setIsOpen(true);
    }
  };

  const handleLanguageSelect = (code) => {
    changeLanguage(code);
    setShowLanguages(false);
    setTimeout(() => setIsOpen(false), 150);
  };

  const handleBack = () => {
    setShowLanguages(false);
  };

  return (
    <div className={cn("relative inline-block", className)}>
      <button
        onClick={handleToggle}
        className="text-foreground hover:bg-muted flex items-center gap-2 rounded-lg px-4 py-2 transition-colors"
      >
        <Globe className="h-5 w-5" />
        <span className="font-medium">{t("abc")}</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={handleToggle} />
          <div className="animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 absolute top-full left-0 z-50 mt-2 w-56">
            <div className="border-border bg-card overflow-hidden rounded-xl border shadow-lg">
              {!showLanguages ? (
                <button
                  onClick={() => setShowLanguages(true)}
                  className="text-foreground hover:bg-muted flex w-full items-center justify-between px-4 py-3 text-left transition-colors"
                >
                  <span className="font-medium">{t("settings.language")}</span>
                  <ChevronRight className="text-muted-foreground h-5 w-5" />
                </button>
              ) : (
                <div>
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={cn(
                        "flex w-full items-center px-4 py-3 text-left transition-colors",
                        currentLanguage === lang.code
                          ? "bg-muted text-foreground font-medium"
                          : "text-foreground hover:bg-muted",
                      )}
                    >
                      {lang.nativeName}
                    </button>
                  ))}
                  <div className="border-border border-t">
                    <button
                      onClick={handleBack}
                      className="text-foreground hover:bg-muted flex w-full items-center gap-2 px-4 py-3 text-left transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>{t("settings.back")}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
