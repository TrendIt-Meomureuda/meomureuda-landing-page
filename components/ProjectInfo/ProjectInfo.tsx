import Image from "next/image";

import { formatDate } from "@/data/dateFormatting";
import type { Locale, SiteContent } from "@/data/localizedContent";
import {
  FIGMA_PROTOTYPE_URL,
  PILOT_TARGET_DATE,
} from "@/data/siteContent";

import styles from "./ProjectInfo.module.css";

type ProjectInfoProps = {
  content: SiteContent["project"];
  locale: Locale;
};

export function ProjectInfo({ content, locale }: ProjectInfoProps) {
  return (
    <section id="project" className={`section-shell deferred-section ${styles.section}`} aria-labelledby="project-title">
      <div className={`site-container ${styles.postcard}`}>
        <div className={styles.content}>
          <p className="section-kicker">{content.kicker}</p>
          <h2 id="project-title" className="section-title">{content.title[0]}<br />{content.title[1]}</h2>
          <dl>
            {content.facts.map(([label, value]) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
            <div><dt>{content.pilotLabel}</dt><dd><time dateTime={PILOT_TARGET_DATE}>{formatDate(PILOT_TARGET_DATE, locale)}</time></dd></div>
          </dl>
          <div className={styles.figmaAction}>
            <a
              className="button-secondary"
              href={FIGMA_PROTOTYPE_URL}
              target="_blank"
              rel="noreferrer"
              aria-label={content.figmaAria}
            >
              {content.figmaLabel}
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.screenStage}>
            <div className={styles.screenCard}>
              <Image
                src="/figma/community.png"
                alt={content.communityAlt}
                width={390}
                height={844}
                sizes="(max-width: 768px) 44vw, 224px"
              />
            </div>
            <div className={styles.screenCard}>
              <Image
                src="/figma/journal.png"
                alt={content.journalAlt}
                width={390}
                height={844}
                sizes="(max-width: 768px) 44vw, 224px"
              />
            </div>
          </div>
          <span className={styles.stamp} aria-hidden="true">TRENDIT<br />JEJU 2026</span>
          <p>community · in development<br />journal · planned next</p>
        </div>
      </div>
    </section>
  );
}
