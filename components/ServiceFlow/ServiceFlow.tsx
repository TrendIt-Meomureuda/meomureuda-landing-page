import { serviceFlow } from "@/data/siteContent";

import { FlowStep } from "./FlowStep";
import styles from "./ServiceFlow.module.css";

export function ServiceFlow() {
  return (
    <section id="flow" className={`section-shell ${styles.section}`} aria-labelledby="flow-title">
      <div className="site-container">
        <div className={styles.heading}>
          <div>
            <p className="section-kicker">서비스 이용 흐름</p>
            <h2 id="flow-title" className="section-title">성향에서 지역으로,<br />지역에서 머무름으로</h2>
          </div>
          <p className="section-copy">
            진단과 권역 추천이 서비스의 중심입니다. 숙소 정보는 현재 데이터베이스와 연동 구조를 개발하고 있으며, 커뮤니티와 일지는 체류 경험을 돕는 보조 기능입니다.
          </p>
        </div>

        <div className={styles.route} aria-label="머무르다 이용 흐름 4단계">
          <span className={styles.routeLine} aria-hidden="true" />
          <FlowStep {...serviceFlow[0]} priority />
          <FlowStep {...serviceFlow[1]} />
          <FlowStep {...serviceFlow[2]} />
          <FlowStep {...serviceFlow[3]} />
        </div>
      </div>
    </section>
  );
}
