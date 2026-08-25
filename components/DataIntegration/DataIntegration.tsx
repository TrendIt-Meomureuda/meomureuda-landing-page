import Image from "next/image";

import type { SiteContent } from "@/data/localizedContent";

import styles from "./DataIntegration.module.css";

export function DataIntegration({ content }: { content: SiteContent["data"] }) {
  return (
    <section id="data" className={`section-shell deferred-section ${styles.section}`} aria-labelledby="data-title">
      <div className="site-container">
        <div className={styles.heading}>
          <div>
            <p className="section-kicker">{content.kicker}</p>
            <h2 id="data-title" className="section-title">{content.title[0]}<br />{content.title[1]}</h2>
          </div>
          <p className="section-copy">{content.copy}</p>
        </div>

        <div className={styles.diagram} aria-label={content.diagramAria}>
          <div className={styles.sources}>
            <p className={styles.columnLabel}>{content.sourceLabel}</p>
            <article>
              <span>{content.sources[0][0]}</span>
              <h3>{content.sources[0][1]}</h3>
              <p>{content.sources[0][2]}</p>
            </article>
            <article>
              <span>{content.sources[1][0]}</span>
              <h3>{content.sources[1][1]}</h3>
              <p>{content.sources[1][2]}</p>
            </article>
            <article>
              <span>{content.sources[2][0]}</span>
              <h3>{content.sources[2][1]}</h3>
              <p>{content.sources[2][2]}</p>
            </article>
            <article>
              <span>{content.sources[3][0]}</span>
              <h3>{content.sources[3][1]}</h3>
              <p>{content.sources[3][2]}</p>
            </article>
          </div>

          <span className={styles.arrow} aria-hidden="true">→</span>

          <div className={styles.processor}>
            <div className={styles.processorTop}>
              <Image src="/brand/character-body.svg" alt="" width={90} height={108} aria-hidden="true" />
              <div>
                <span>Meomureuda data layer</span>
                <h3>Meomureuda</h3>
              </div>
            </div>
            <ul>
              <li>{content.processorItems[0]}</li>
              <li>{content.processorItems[1]}</li>
              <li>{content.processorItems[2]}</li>
              <li>{content.processorItems[3]}</li>
            </ul>
            <p>{content.processorCopy}</p>
          </div>

          <span className={styles.arrow} aria-hidden="true">→</span>

          <div className={styles.result}>
            <p className={styles.columnLabel}>{content.resultLabel}</p>
            <div className={styles.conditionStamp}>
              <strong>{content.conditions[0][0]}</strong><span>{content.conditions[0][1]}</span>
              <strong>{content.conditions[1][0]}</strong><span>{content.conditions[1][1]}</span>
              <strong>{content.conditions[2][0]}</strong><span>{content.conditions[2][1]}</span>
            </div>
            <h3>{content.resultTitle}</h3>
            <p>{content.resultCopy}</p>
            <small>{content.resultNote}</small>
          </div>
        </div>

        <aside className={styles.notice} aria-label={content.noticeAria}>
          <strong>{content.noticeTitle}</strong>
          <p>{content.noticeCopy}</p>
        </aside>
      </div>
    </section>
  );
}
