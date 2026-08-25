import Image from "next/image";

import type { Locale, SiteContent } from "@/data/localizedContent";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF_EN,
  CONTACT_EMAIL_HREF_KO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "@/data/siteContent";

import styles from "./Contact.module.css";

type ContactProps = {
  content: SiteContent["contact"];
  locale: Locale;
};

export function Contact({ content, locale }: ContactProps) {
  const contactHref = locale === "ko" ? CONTACT_EMAIL_HREF_KO : CONTACT_EMAIL_HREF_EN;

  return (
    <section id="contact" className={`section-shell deferred-section ${styles.section}`} aria-labelledby="contact-title">
      <div className={`site-container ${styles.layout}`}>
        <div className={styles.characterWrap} aria-hidden="true">
          <span className={styles.windLine} />
          <Image src="/brand/character-body.svg" alt="" width={158} height={188} aria-hidden="true" />
          <span className={styles.citrus}>{content.citrus}</span>
        </div>

        <div className={styles.copy}>
          <p className="section-kicker">{content.kicker}</p>
          <h2 id="contact-title">{content.title[0]}<br />{content.title[1]}</h2>
          <p>{content.copy}</p>
          <a className={`button-primary ${styles.primaryAction}`} href={contactHref}>
            {content.cta}
          </a>

          <dl className={styles.contactList}>
            <div><dt>{content.labels[0]}</dt><dd>Hyungsun Kim</dd></div>
            <div><dt>{content.labels[1]}</dt><dd>Trendit</dd></div>
            <div><dt>{content.labels[2]}</dt><dd><a href={contactHref}>{CONTACT_EMAIL}</a></dd></div>
            <div><dt>{content.labels[3]}</dt><dd><a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE_DISPLAY}</a></dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
