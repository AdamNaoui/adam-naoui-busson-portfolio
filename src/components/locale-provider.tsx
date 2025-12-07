"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "en" | "fr";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Navbar
    home: "Home",
    theme: "Theme",
    download_resume: "Download Resume",
    language: "Language",
    // Hero
    hello: "Hello, I'm",
    // Add more translations as needed
  },
  fr: {
    // Navbar
    home: "Accueil",
    theme: "Thème",
    download_resume: "Télécharger le CV",
    language: "Langue",
    // Hero
    hello: "Bonjour, je suis",
    // Add more translations as needed
  },
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // Try to get saved locale from localStorage on mount
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && (savedLocale === "en" || savedLocale === "fr")) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: string): string => {
    return translations[locale][key] || key;
  };

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
