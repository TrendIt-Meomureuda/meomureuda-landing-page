import type { SiteContent } from "@/data/localizedContent";

import { FlowStep } from "./FlowStep";
import styles from "./ServiceFlow.module.css";

export function ServiceFlow({ content }: { content: SiteContent["flow"] }) {
  return (
    <section id="flow" className={`section-shell ${styles.section}`} aria-labelledby="flow-title">
      <div className="site-container">
        <div className={styles.heading}>
          <div>
            <p className="section-kicker">{content.kicker}</p>
            <h2 id="flow-title" className="section-title">{content.title[0]}<br />{content.title[1]}</h2>
          </div>
          <p className="section-copy">{content.copy}</p>
        </div>

        <div className={styles.route} aria-label={content.aria}>
          <span className={styles.routeLine} aria-hidden="true" />
          <FlowStep {...content.steps[0]} prototypeNote={content.prototypeNote} priority />
          <FlowStep {...content.steps[1]} prototypeNote={content.prototypeNote} />
          <FlowStep {...content.steps[2]} prototypeNote={content.prototypeNote} />
          <FlowStep {...content.steps[3]} prototypeNote={content.prototypeNote} />
        </div>
      </div>
    </section>
  );
}
