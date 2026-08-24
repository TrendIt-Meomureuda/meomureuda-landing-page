import Image from "next/image";

import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "@/data/siteContent";

import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`site-container ${styles.top}`}>
        <div className={styles.brand}>
          <Image src="/brand/logo-sprout.svg" alt="" width={22} height={16} aria-hidden="true" />
          <Image src="/brand/logo-wordmark.svg" alt="머무르다" width={112} height={29} />
          <span>by Trendit</span>
        </div>
        <address>
          <a href={CONTACT_EMAIL_HREF}>{CONTACT_EMAIL}</a>
          <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE_DISPLAY}</a>
        </address>
      </div>
      <div className={`site-container ${styles.bottom}`}>
        <p>개인정보처리방침 준비 중</p>
        <p>본 페이지에 언급된 외부 플랫폼은 현재 제휴 검토 대상이며 제휴가 확정된 상태가 아닙니다.</p>
      </div>
    </footer>
  );
}
