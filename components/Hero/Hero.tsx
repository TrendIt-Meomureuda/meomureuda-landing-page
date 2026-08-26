import Image from "next/image";

import type { SiteContent } from "@/data/localizedContent";
import { FIGMA_PROTOTYPE_URL } from "@/data/siteContent";

import styles from "./Hero.module.css";

type HeroProps = {
  content: SiteContent["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={`site-container ${styles.layout}`}>
        <div className={styles.copy}>
          <div className={styles.badges} aria-label={content.badgesAria}>
            <span>{content.badges[0]}</span>
            <span>{content.badges[1]}</span>
          </div>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h1 id="hero-title">
            <span>{content.title[0]}</span>
            <span className={styles.titleAccent}>{content.title[1]}</span>
          </h1>
          <p className={styles.lead}>{content.lead}</p>
          <div className={styles.actions}>
            <p className="external-note">{content.contactHint}</p>
            <div>
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
        </div>

        <aside className={styles.servicePreview} aria-label={content.previewAria}>
          <div className={styles.previewIntro}>
            <small>{content.previewIntro[0]}</small>
            <strong>{content.previewIntro[1]}</strong>
            <span>{content.previewIntro[2]}</span>
          </div>
          <ol className={styles.previewSteps}>
            <li>
              <span>{content.previewSteps[0][0]}</span>
              <strong>{content.previewSteps[0][1]}</strong>
            </li>
            <li>
              <span>{content.previewSteps[1][0]}</span>
              <strong>{content.previewSteps[1][1]}</strong>
            </li>
            <li>
              <span>{content.previewSteps[2][0]}</span>
              <strong>{content.previewSteps[2][1]}</strong>
            </li>
          </ol>
          <p className={styles.previewNote}>{content.previewNote}</p>
        </aside>

        <div className={styles.visual} aria-label={content.visualAria}>
          <div className={styles.stayRange} aria-label={content.rangeAria}>
            <span className={styles.rangeTitle}>{content.rangeTitle}</span>
            <div className={styles.rangeNumbers}>
              <strong>7</strong>
              <span aria-hidden="true">—</span>
              <strong>28</strong>
            </div>
          </div>
          <div className={styles.photoFrame}>
            <Image
              src="/photos/jeju-sea.jpg"
              alt={content.photoAlt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 768px) 92vw, (max-width: 1120px) 82vw, 42vw"
            />
          </div>
          <div className={styles.phoneFrame}>
            <Image
              src="/figma/home.png"
              alt={content.phoneAlt}
              width={390}
              height={973}
              sizes="(max-width: 768px) 42vw, 230px"
            />
          </div>
          <Image
            className={styles.character}
            src="/brand/character-body.svg"
            alt={content.characterAlt}
            width={158}
            height={188}
          />
          <span className={styles.postmark} aria-hidden="true">JEJU · 2026</span>
        </div>
      </div>
      <div className={styles.bottomLine} aria-hidden="true" />
    </section>
  );
}
