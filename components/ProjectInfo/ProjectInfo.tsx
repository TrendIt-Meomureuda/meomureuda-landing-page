import Image from "next/image";

import { formatKoreanDate, formatKoreanDeadline } from "@/data/dateFormatting";
import {
  FIGMA_PROTOTYPE_URL,
  PILOT_TARGET_DATE,
  projectFacts,
  SUBMISSION_DATE,
} from "@/data/siteContent";

import styles from "./ProjectInfo.module.css";

export function ProjectInfo() {
  return (
    <section id="project" className={`section-shell deferred-section ${styles.section}`} aria-labelledby="project-title">
      <div className={`site-container ${styles.postcard}`}>
        <div className={styles.content}>
          <p className="section-kicker">프로젝트 정보</p>
          <h2 id="project-title" className="section-title">관광데이터로 시작하는<br />제주의 긴 머무름</h2>
          <dl>
            <div><dt>{projectFacts[0][0]}</dt><dd>{projectFacts[0][1]}</dd></div>
            <div><dt>{projectFacts[1][0]}</dt><dd>{projectFacts[1][1]}</dd></div>
            <div><dt>{projectFacts[2][0]}</dt><dd>{projectFacts[2][1]}</dd></div>
            <div><dt>{projectFacts[3][0]}</dt><dd>{projectFacts[3][1]}</dd></div>
            <div><dt>{projectFacts[4][0]}</dt><dd>{projectFacts[4][1]}</dd></div>
            <div><dt>{projectFacts[5][0]}</dt><dd>{projectFacts[5][1]}</dd></div>
            <div><dt>시범 서비스 목표일</dt><dd><time dateTime={PILOT_TARGET_DATE}>{formatKoreanDate(PILOT_TARGET_DATE)}</time></dd></div>
            <div><dt>제출 예정일</dt><dd><time dateTime={SUBMISSION_DATE}>{formatKoreanDeadline(SUBMISSION_DATE)}</time></dd></div>
          </dl>
          <div className={styles.figmaAction}>
            <a
              className="button-secondary"
              href={FIGMA_PROTOTYPE_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="별도 Figma 프로토타입 보기, 새 탭에서 외부 Figma 파일 열림"
            >
              별도 Figma 프로토타입 보기 ↗
            </a>
            <small className="external-note">실제 서비스가 아닌 디자인 검토용 외부 Figma 파일입니다.</small>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.screenStage}>
            <div className={styles.screenCard}>
              <Image
                src="/figma/community.png"
                alt="제주 생활 정보를 공유하는 머무르다 커뮤니티 화면"
                width={390}
                height={844}
                sizes="(max-width: 768px) 44vw, 224px"
              />
            </div>
            <div className={styles.screenCard}>
              <Image
                src="/figma/journal.png"
                alt="여행의 날짜와 사진을 기록하는 머무르다 일지 화면"
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
