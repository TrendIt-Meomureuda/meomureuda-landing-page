import Image from "next/image";

import type { SiteContent } from "@/data/localizedContent";

import { ProblemItem } from "./ProblemItem";
import styles from "./ProblemEditorial.module.css";

export function ProblemEditorial({ content }: { content: SiteContent["problem"] }) {
  return (
    <section id="service" className={`section-shell ${styles.section}`} aria-labelledby="problem-title">
      <div className={`site-container ${styles.layout}`}>
        <div className={styles.intro}>
          <p className="section-kicker">{content.kicker}</p>
          <h2 id="problem-title" className="section-title">{content.title[0]}<br />{content.title[1]}</h2>
          <p className="section-copy">{content.copy}</p>
          <figure className={styles.photoNote}>
            <div className={styles.photoCrop}>
              <Image
                src="/photos/jeju-sea.jpg"
                alt={content.photoAlt}
                fill
                sizes="(max-width: 768px) 90vw, 34vw"
              />
            </div>
            <figcaption>{content.caption}</figcaption>
          </figure>
        </div>

        <div className={styles.problems}>
          <svg
            className={styles.routeGraphic}
            viewBox="0 0 640 560"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              className={styles.routeMain}
              d="M92 92 C226 24 344 102 514 116 C612 124 602 238 506 280 C382 334 206 270 104 356 C18 428 174 520 530 470"
            />
            <path
              className={styles.routeEcho}
              d="M75 114 C204 55 335 128 491 139 C548 143 566 198 528 238"
            />
          </svg>
          <Image
            className={styles.routeSprout}
            src="/brand/logo-sprout.svg"
            alt=""
            width={52}
            height={36}
            aria-hidden="true"
          />
          <ProblemItem {...content.items[0]} variant="sand" />
          <ProblemItem {...content.items[1]} variant="paper" />
          <ProblemItem {...content.items[2]} variant="sea" />
          <ProblemItem {...content.items[3]} variant="forest" />
        </div>
      </div>
    </section>
  );
}
