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
            <span>제주 장기 체류 숙소 추천</span>
            <span>2026 관광데이터 활용 공모전 출품</span>
          </div>
          <p className={styles.eyebrow}>제주 장기 체류 추천</p>
          <h1 id="hero-title">
            <span>나에게 맞는 제주에서,</span>
            <span className={styles.titleAccent}>한 달을 살아보다</span>
          </h1>
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

        <aside className={styles.servicePreview} aria-label="머무르다 추천 흐름 프로토타입 예시">
          <div className={styles.previewIntro}>
            <small>서비스 추천 흐름 예시</small>
            <strong>성향에서 머무름까지</strong>
            <span>진단부터 장기 체류 조건까지</span>
          </div>
          <ol className={styles.previewSteps}>
            <li>
              <span>여행 성향 진단</span>
              <strong>감성 충전가형</strong>
            </li>
            <li>
              <span>제주 권역 추천</span>
              <strong>제주 서귀포시</strong>
            </li>
            <li>
              <span>장기 체류 조건</span>
              <strong>28–60박</strong>
            </li>
          </ol>
          <p className={styles.previewNote}>프로토타입 예시 화면 · 실제 추천 결과는 진단과 연동 데이터에 따라 달라집니다.</p>
        </aside>

        <div className={styles.visual} aria-label="제주 바다와 머무르다 앱 화면 콜라주">
          <div className={styles.stayRange} aria-label="제주 장기 체류 추천 기간, 28박에서 60박">
            <span className={styles.rangeTitle}>제주에서 머무는 시간</span>
            <div className={styles.rangeNumbers}>
              <strong>28</strong>
              <span aria-hidden="true">—</span>
              <strong>60</strong>
            </div>
          </div>
          <div className={styles.photoFrame}>
            <Image
              src="/photos/jeju-sea.jpg"
              alt="현무암 해안 너머로 맑은 제주 바다가 펼쳐진 모습"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 768px) 92vw, (max-width: 1120px) 82vw, 42vw"
            />
          </div>
          <div className={styles.phoneFrame}>
            <Image
              src="/figma/home.png"
              alt="여행 성향과 제주 권역을 추천하는 머무르다 홈 화면"
              width={390}
              height={973}
              sizes="(max-width: 768px) 42vw, 230px"
            />
          </div>
          <Image
            className={styles.character}
            src="/brand/character-body.svg"
            alt="새싹이 돋은 머무르다 캐릭터"
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
