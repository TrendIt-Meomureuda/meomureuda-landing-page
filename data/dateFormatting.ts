const KOREAN_DATE = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "Asia/Seoul",
});

const COMPACT_KOREAN_DATE = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: "Asia/Seoul",
});

const KOREAN_DEADLINE = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
  timeZone: "Asia/Seoul",
});

export function formatKoreanDate(isoDate: string) {
  return KOREAN_DATE.format(new Date(isoDate));
}

export function formatCompactKoreanDate(isoDate: string) {
  return COMPACT_KOREAN_DATE.format(new Date(isoDate));
}

export function formatKoreanDeadline(isoDate: string) {
  return KOREAN_DEADLINE.format(new Date(isoDate));
}
