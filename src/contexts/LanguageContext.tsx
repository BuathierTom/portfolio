"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import translations from "@/i18n/translations";

export type Language = "en" | "fr";

type TranslationMap = typeof translations;

type TranslationKey = string;

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const getNestedTranslation = (map: TranslationMap[Language], key: TranslationKey) => {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, map);
};

const STORAGE_KEY = "portfolio-language";

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const storedLanguage =
      typeof window !== "undefined" ? (window.localStorage.getItem(STORAGE_KEY) as Language | null) : null;

    if (storedLanguage === "en" || storedLanguage === "fr") {
      setLanguage(storedLanguage);
    } else {
      const browserLanguage =
        typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
      setLanguage(browserLanguage);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    const t = (key: TranslationKey) => {
      const result = getNestedTranslation(translations[language], key);
      if (typeof result === "string") {
        return result;
      }
      console.warn(`Missing translation for key "${key}" in language "${language}"`);
      return key;
    };

    return {
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === "en" ? "fr" : "en")),
      t,
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
