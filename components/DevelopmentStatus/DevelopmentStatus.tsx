import { formatCompactDate } from "@/data/dateFormatting";
import type { Locale, SiteContent } from "@/data/localizedContent";
import { PILOT_TARGET_DATE } from "@/data/siteContent";

import { StatusRow } from "./StatusRow";
import styles from "./DevelopmentStatus.module.css";

type DevelopmentStatusProps = {
  content: SiteContent["status"];
  locale: Locale;
};

export function DevelopmentStatus({ content, locale }: DevelopmentStatusProps) {
  return (
    <section id="status" className={`section-shell deferred-section ${styles.section}`} aria-labelledby="status-title">
      <div className={`site-container ${styles.layout}`}>
        <div>
          <p className="section-kicker">{content.kicker}</p>
          <h2 id="status-title" className="section-title">{content.title[0]}<br />{content.title[1]}<br />{content.title[2]}</h2>
          <p className="section-copy">{content.copy}</p>
          <div className={styles.dates}>
            <div>
              <span>{content.pilotLabel}</span>
              <time dateTime={PILOT_TARGET_DATE}>{formatCompactDate(PILOT_TARGET_DATE, locale)}</time>
            </div>
          </div>
        </div>

        <ul className={styles.list} aria-label={content.listAria}>
          <StatusRow {...content.rows[0]} />
          <StatusRow {...content.rows[1]} />
          <StatusRow {...content.rows[2]} />
          <StatusRow {...content.rows[3]} />
          <StatusRow {...content.rows[4]} />
          <StatusRow {...content.rows[5]} />
          <StatusRow {...content.rows[6]} />
        </ul>
      </div>
    </section>
  );
}
