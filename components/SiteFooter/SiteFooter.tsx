import Image from "next/image";

import type { Locale, SiteContent } from "@/data/localizedContent";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF_EN,
  CONTACT_EMAIL_HREF_KO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "@/data/siteContent";

import styles from "./SiteFooter.module.css";

type SiteFooterProps = {
  content: SiteContent["footer"];
  locale: Locale;
};

export function SiteFooter({ content, locale }: SiteFooterProps) {
  const contactHref = locale === "ko" ? CONTACT_EMAIL_HREF_KO : CONTACT_EMAIL_HREF_EN;

  return (
    <footer className={styles.footer}>
      <div className={`site-container ${styles.top}`}>
        <div className={styles.brand}>
          <Image src="/brand/logo-sprout.svg" alt="" width={22} height={16} aria-hidden="true" />
          <Image src="/brand/logo-wordmark.svg" alt="Meomureuda" width={112} height={29} />
          <span>by Trendit</span>
        </div>
        <address>
          <a href={contactHref}>{CONTACT_EMAIL}</a>
          <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE_DISPLAY}</a>
        </address>
      </div>
      <div className={`site-container ${styles.bottom}`}>
        <p>{content.privacy}</p>
        <p>{content.disclaimer}</p>
      </div>
    </footer>
  );
}
