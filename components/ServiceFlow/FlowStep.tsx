import Image from "next/image";

import type { ProductStatus } from "@/data/siteContent";

import styles from "./ServiceFlow.module.css";

type FlowStepProps = {
  number: string;
  title: string;
  body: string;
  status: ProductStatus;
  image: string;
  alt: string;
  priority?: boolean;
};

export function FlowStep({ number, title, body, status, image, alt, priority }: FlowStepProps) {
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
          <span className={styles.status} data-status={status}>{status}</span>
        </div>
        <h3>{title}</h3>
        <p>{body}</p>
        {number === "03" ? (
          <small className={styles.prototypeNote}>프로토타입 예시 화면 · 실제 연동 데이터가 아닙니다.</small>
        ) : null}
      </div>
    </article>
  );
}
