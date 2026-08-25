import type { SiteContent } from "@/data/localizedContent";

import styles from "./BusinessModel.module.css";

export function BusinessModel({ content }: { content: SiteContent["business"] }) {
  return (
    <section className={`section-shell deferred-section ${styles.section}`} aria-labelledby="business-title">
      <div className="site-container">
        <div className={styles.heading}>
          <div>
            <p className="section-kicker">{content.kicker}</p>
            <h2 id="business-title" className="section-title">{content.title[0]}<br />{content.title[1]}</h2>
          </div>
          <p className="section-copy">{content.copy}</p>
        </div>

        <div className={styles.models}>
          <article>
            <span>{content.models[0].label}</span>
            <h3>{content.models[0].title}</h3>
            <p>{content.models[0].body}</p>
          </article>
          <article>
            <span>{content.models[1].label}</span>
            <h3>{content.models[1].title}</h3>
            <p>{content.models[1].body}</p>
          </article>
          <article>
            <span>{content.models[2].label}</span>
            <h3>{content.models[2].title}</h3>
            <p>{content.models[2].body}</p>
          </article>
          <article>
            <span>{content.models[3].label}</span>
            <h3>{content.models[3].title}</h3>
            <p>{content.models[3].body}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
