import { useTranslation } from "react-i18next";
import { useCallback } from "react";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    (lng) => {
      i18n.changeLanguage(lng);
      // Không cần vì i18next-browser-languagedetector đã auto lưu
      // localStorage.setItem("i18nextLng", lng);
    },
    [i18n],
  );

  const currentLanguage = i18n.language;

  const availableLanguages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  ];

  return {
    currentLanguage,
    changeLanguage,
    availableLanguages,
  };
};
