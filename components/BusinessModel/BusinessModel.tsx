import { businessModels } from "@/data/siteContent";

import styles from "./BusinessModel.module.css";

export function BusinessModel() {
  return (
    <section className={`section-shell deferred-section ${styles.section}`} aria-labelledby="business-title">
      <div className="site-container">
        <div className={styles.heading}>
          <div>
            <p className="section-kicker">Operating model</p>
            <h2 id="business-title" className="section-title">예약을 소유하기보다,<br />좋은 선택으로 연결합니다.</h2>
          </div>
          <p className="section-copy">
            초기 머무르다는 추천과 외부 예약 연결에 집중합니다. 직접 결제나 확정된 수익 모델처럼 표현하지 않습니다.
          </p>
        </div>

        <div className={styles.models}>
          <article>
            <span>초기 모델</span>
            <h3>{businessModels[0].title}</h3>
            <p>{businessModels[0].body}</p>
          </article>
          <article>
            <span>검토</span>
            <h3>{businessModels[1].title}</h3>
            <p>{businessModels[1].body}</p>
          </article>
          <article>
            <span>장기 검토</span>
            <h3>{businessModels[2].title}</h3>
            <p>{businessModels[2].body}</p>
          </article>
          <article>
            <span>초기 운영 원칙</span>
            <h3>{businessModels[3].title}</h3>
            <p>{businessModels[3].body}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
