import { formatCompactKoreanDate, formatKoreanDeadline } from "@/data/dateFormatting";
import { developmentStatus, PILOT_TARGET_DATE, SUBMISSION_DATE } from "@/data/siteContent";

import { StatusRow } from "./StatusRow";
import styles from "./DevelopmentStatus.module.css";

export function DevelopmentStatus() {
  return (
    <section id="status" className={`section-shell deferred-section ${styles.section}`} aria-labelledby="status-title">
      <div className={`site-container ${styles.layout}`}>
        <div>
          <p className="section-kicker">Build status</p>
          <h2 id="status-title" className="section-title">완료된 것과<br />앞으로 만들 것을<br />구분합니다.</h2>
          <p className="section-copy">
            프로토타입의 화면 수가 개발 완료 범위를 의미하지 않도록, 현재 상태를 기능 단위로 공개합니다.
          </p>
          <div className={styles.dates}>
            <div>
              <span>시범 서비스 목표</span>
              <time dateTime={PILOT_TARGET_DATE}>{formatCompactKoreanDate(PILOT_TARGET_DATE)}</time>
            </div>
            <div>
              <span>공모전 제출 예정</span>
              <time dateTime={SUBMISSION_DATE}>{formatKoreanDeadline(SUBMISSION_DATE)}</time>
            </div>
          </div>
        </div>

        <ul className={styles.list} aria-label="기능별 개발 현황">
          <StatusRow {...developmentStatus[0]} />
          <StatusRow {...developmentStatus[1]} />
          <StatusRow {...developmentStatus[2]} />
          <StatusRow {...developmentStatus[3]} />
          <StatusRow {...developmentStatus[4]} />
          <StatusRow {...developmentStatus[5]} />
          <StatusRow {...developmentStatus[6]} />
        </ul>
      </div>
    </section>
  );
}
