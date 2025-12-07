"use client";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/locale-provider";

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <Button variant="ghost" type="button" size="icon" className="px-2" onClick={() => setLocale(locale === "en" ? "fr" : "en")}>
      <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{locale === "en" ? "FR" : "EN"}</span>
    </Button>
  );
}
