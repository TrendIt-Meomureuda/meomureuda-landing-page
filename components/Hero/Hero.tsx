import Image from "next/image";

import {
  CONTACT_EMAIL_HREF,
  FIGMA_PROTOTYPE_URL,
} from "@/data/siteContent";

import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={`site-container ${styles.layout}`}>
        <div className={styles.copy}>
          <div className={styles.badges} aria-label="서비스 범위와 프로젝트 정보">
            <span>제주 28–60박 장기 체류 추천</span>
            <span>2026 관광데이터 활용 공모전 출품</span>
          </div>
          <p className={styles.eyebrow}>Jeju long-stay curation</p>
          <h1 id="hero-title">나에게 맞는 제주에서,<br />한 달을 살아보다</h1>
          <p className={styles.lead}>
            여행 성향 진단을 통해 나에게 맞는 제주 권역과 장기 체류 숙소를 추천하는 제주 한달살이 서비스입니다.
          </p>
          <div className={styles.actions}>
            <a className="button-primary" href={CONTACT_EMAIL_HREF}>
              제휴 및 데이터 연동 문의
            </a>
            <div>
              <a
                className="button-secondary"
                href={FIGMA_PROTOTYPE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="별도 Figma 프로토타입 보기, 새 탭에서 외부 Figma 파일 열림"
              >
                별도 Figma 프로토타입 보기 ↗
              </a>
              <small className="external-note">실제 서비스가 아닌 디자인 검토용 Figma 파일입니다.</small>
            </div>
          </div>
        </div>

        <div className={styles.visual} aria-label="제주 바다와 머무르다 앱 화면 콜라주">
          <div className={styles.stayMark} aria-hidden="true">
            <span>28</span>
            <i />
            <span>60</span>
            <small>nights in Jeju</small>
          </div>
          <div className={styles.photoFrame}>
            <Image
              src="/photos/jeju-sea.jpg"
              alt="현무암 해안 너머로 맑은 제주 바다가 펼쳐진 모습"
              fill
              priority
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 768px) 92vw, 48vw"
            />
          </div>
          <div className={styles.phoneFrame}>
            <Image
              src="/figma/home.png"
              alt="여행 성향과 제주 권역을 추천하는 머무르다 홈 화면"
              width={390}
              height={973}
              priority
              sizes="(max-width: 768px) 42vw, 230px"
            />
          </div>
          <Image
            className={styles.character}
            src="/brand/character-body.svg"
            alt="새싹이 돋은 머무르다 캐릭터"
            width={158}
            height={188}
            priority
          />
          <span className={styles.postmark} aria-hidden="true">JEJU · 2026</span>
        </div>
      </div>
      <div className={styles.bottomLine} aria-hidden="true" />
    </section>
  );
}
