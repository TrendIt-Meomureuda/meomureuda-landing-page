import type { Locale } from "./localizedContent";

const localeNames: Record<Locale, string> = {
  ko: "ko-KR",
  en: "en-US",
};

function createFormatter(locale: Locale, includeTime = false, compact = false) {
  return new Intl.DateTimeFormat(localeNames[locale], {
    year: "numeric",
    month: compact ? "2-digit" : "long",
    day: "numeric",
    hour: includeTime ? "2-digit" : undefined,
    minute: includeTime ? "2-digit" : undefined,
    hourCycle: includeTime ? "h23" : undefined,
    timeZone: "Asia/Seoul",
  });
}

export function formatDate(isoDate: string, locale: Locale) {
  return createFormatter(locale).format(new Date(isoDate));
}

export function formatCompactDate(isoDate: string, locale: Locale) {
  return createFormatter(locale, false, true).format(new Date(isoDate));
}

export function formatDeadline(isoDate: string, locale: Locale) {
  return createFormatter(locale, true).format(new Date(isoDate));
}
