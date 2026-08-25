import styles from "./DevelopmentStatus.module.css";

type StatusRowProps = {
  item: string;
  status: string;
  statusTone: "complete" | "progress" | "review" | "planned";
};

const statusSymbol = {
  complete: "✓",
  progress: "↻",
  review: "↗",
  planned: "○",
};

export function StatusRow({ item, status, statusTone }: StatusRowProps) {
  return (
    <li>
      <span className={styles.item}>{item}</span>
      <span className={styles.status} data-status={statusTone}>
        <i aria-hidden="true">{statusSymbol[statusTone]}</i>
        {status}
      </span>
    </li>
  );
}
