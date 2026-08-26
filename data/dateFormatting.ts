import type { Locale } from "./localizedContent";

const localeNames: Record<Locale, string> = {
  ko: "ko-KR",
  en: "en-US",
};

function createFormatter(locale: Locale, compact = false) {
  return new Intl.DateTimeFormat(localeNames[locale], {
    year: "numeric",
    month: compact ? "2-digit" : "long",
    day: "numeric",
    timeZone: "Asia/Seoul",
  });
}

export function formatDate(isoDate: string, locale: Locale) {
  return createFormatter(locale).format(new Date(isoDate));
}

export function formatCompactDate(isoDate: string, locale: Locale) {
  return createFormatter(locale, true).format(new Date(isoDate));
}
