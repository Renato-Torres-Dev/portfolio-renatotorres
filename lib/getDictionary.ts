import { Locale } from "./i18n-config";
import pt from "./dictionaries/pt";
import en from "./dictionaries/en";
import es from "./dictionaries/es";

export function getDictionary(locale: Locale) {
  switch (locale) {
    case "en":
      return en;
    case "es":
      return es;
    default:
      return pt;
  }
}