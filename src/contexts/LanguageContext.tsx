"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
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

const languageListeners = new Set<() => void>();

const subscribeLanguage = (listener: () => void) => {
  languageListeners.add(listener);
  return () => {
    languageListeners.delete(listener);
  };
};

const getClientLanguage = (): Language => {
  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

  if (storedLanguage === "en" || storedLanguage === "fr") {
    return storedLanguage;
  }

  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
};

const getServerLanguage = (): Language => "en";

const setLanguage = (lang: Language) => {
  window.localStorage.setItem(STORAGE_KEY, lang);
  languageListeners.forEach((listener) => listener());
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const language = useSyncExternalStore(subscribeLanguage, getClientLanguage, getServerLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
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
      toggleLanguage: () => setLanguage(language === "en" ? "fr" : "en"),
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
