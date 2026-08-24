import Image from "next/image";

import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "@/data/siteContent";

import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={`section-shell deferred-section ${styles.section}`} aria-labelledby="contact-title">
      <div className={`site-container ${styles.layout}`}>
        <div className={styles.characterWrap} aria-hidden="true">
          <span className={styles.windLine} />
          <Image src="/brand/character-body.svg" alt="" width={158} height={188} aria-hidden="true" />
          <span className={styles.citrus}>제주의 긴 머무름</span>
        </div>

        <div className={styles.copy}>
          <p className="section-kicker">Partnership contact</p>
          <h2 id="contact-title">제주의 긴 머무름을<br />함께 연결해 주세요.</h2>
          <p>
            숙소 기본정보, 가격, 객실 재고와 예약 링크 연동 가능성을 논의하고 싶습니다. 검토 가능한 API 범위와 제휴 절차를 알려주시면 서비스 구조와 필요한 데이터를 상세히 공유드리겠습니다.
          </p>
          <a className={`button-primary ${styles.primaryAction}`} href={CONTACT_EMAIL_HREF}>
            제휴 및 데이터 연동 문의하기
          </a>

          <dl className={styles.contactList}>
            <div><dt>신청자</dt><dd>Hyungsun Kim</dd></div>
            <div><dt>팀</dt><dd>Trendit</dd></div>
            <div><dt>이메일</dt><dd><a href={CONTACT_EMAIL_HREF}>{CONTACT_EMAIL}</a></dd></div>
            <div><dt>전화</dt><dd><a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE_DISPLAY}</a></dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
