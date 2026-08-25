import Image from "next/image";

import styles from "./ServiceFlow.module.css";

type FlowStepProps = {
  number: string;
  title: string;
  body: string;
  status: string;
  statusTone: string;
  image: string;
  alt: string;
  prototypeNote: string;
  priority?: boolean;
};

export function FlowStep({ number, title, body, status, statusTone, image, alt, prototypeNote, priority }: FlowStepProps) {
  return (
    <article className={styles.step}>
      <div className={styles.screenWrap}>
        <span className={styles.tape} aria-hidden="true" />
        <Image
          src={image}
          alt={alt}
          width={390}
          height={number === "02" ? 973 : 844}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 768px) 72vw, 260px"
        />
      </div>
      <div className={styles.stepCopy}>
        <div className={styles.stepMeta}>
          <span className={styles.stepNumber}>{number}</span>
          <span className={styles.status} data-status={statusTone}>{status}</span>
        </div>
        <h3>{title}</h3>
        <p>{body}</p>
        {number === "03" ? (
          <small className={styles.prototypeNote}>{prototypeNote}</small>
        ) : null}
      </div>
    </article>
  );
}
