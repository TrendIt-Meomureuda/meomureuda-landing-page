import styles from "./ProblemEditorial.module.css";

type ProblemItemProps = {
  number: string;
  title: string;
  body: string;
  variant: "sand" | "sea" | "paper" | "forest";
};

export function ProblemItem({ number, title, body, variant }: ProblemItemProps) {
  return (
    <article className={`${styles.problem} ${styles[variant]}`}>
      <span className={styles.number} aria-hidden="true">{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </article>
  );
}
