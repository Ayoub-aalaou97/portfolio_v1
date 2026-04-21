"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("LocaleSwitcher");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="locale-switch" className="sr-only">
        {t("label")}
      </label>
      <select
        id="locale-switch"
        value={locale}
        disabled={isPending}
        onChange={(e) => {
          const nextLocale = e.target.value as (typeof routing.locales)[number];
          startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
          });
        }}
        className="min-w-[8.5rem] cursor-pointer rounded-md border border-zinc-300 bg-[var(--surface-muted)] py-1.5 pl-2 pr-8 text-sm text-[var(--text-primary)] shadow-sm transition-colors hover:border-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#42b883] dark:border-zinc-600 dark:hover:border-zinc-500"
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc === "de" ? t("optionDe") : t("optionEn")}
          </option>
        ))}
      </select>
    </div>
  );
}
