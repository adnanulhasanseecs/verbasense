import enLocale from "i18n-iso-countries/langs/en.json";
import { getNames, registerLocale } from "i18n-iso-countries";

/** English names must be registered in browser bundles (see package README). */
registerLocale(enLocale);

/** ISO 3166-1 alpha-2 options sorted by English display name (official). */
export function getSortedCountryOptions(): { code: string; name: string }[] {
  const en = getNames("en", { select: "official" });
  return Object.entries(en)
    .filter(([code]) => /^[A-Z]{2}$/.test(code))
    .map(([code, name]) => ({ code, name }))
    .sort((a, b) => a.name.localeCompare(b.name, "en"));
}
