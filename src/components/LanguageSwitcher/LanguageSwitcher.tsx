"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const nextCode = t("language.switch");

  return (
    <button
      type="button"
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={t("language.toggleLabel")}
    >
      <span>{nextCode}</span>
    </button>
  );
};

export default LanguageSwitcher;
