import type { DeliveryStatus } from "@/data/siteContent";

import styles from "./DevelopmentStatus.module.css";

type StatusRowProps = {
  item: string;
  status: DeliveryStatus;
};

const statusSymbol: Record<DeliveryStatus, string> = {
  완료: "✓",
  "개발 중": "↻",
  "검토·문의": "↗",
  "후속 예정": "○",
};

export function StatusRow({ item, status }: StatusRowProps) {
  return (
    <li>
      <span className={styles.item}>{item}</span>
      <span className={styles.status} data-status={status}>
        <i aria-hidden="true">{statusSymbol[status]}</i>
        {status === "검토·문의" ? "제휴 검토 및 문의 단계" : status}
      </span>
    </li>
  );
}
