"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { Locale, SiteContent } from "@/data/localizedContent";

import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  content: SiteContent["header"];
  language: SiteContent["language"];
  locale: Locale;
};

export function SiteHeader({ content, language, locale }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      menuButtonRef.current?.focus();
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  function toggleMenu() {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) requestAnimationFrame(() => firstLinkRef.current?.focus());
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={`site-container ${styles.inner}`}>
        <a className={styles.brand} href="#top" aria-label={content.brandLabel}>
          <Image src="/brand/logo-sprout.svg" alt="" width={22} height={16} aria-hidden="true" />
          <Image src="/brand/logo-wordmark.svg" alt="Meomureuda" width={112} height={29} priority />
        </a>

        <nav className={styles.desktopNav} aria-label={content.navLabel}>
          {content.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <nav className={styles.languageSwitcher} aria-label={content.languageLabel}>
          <Link href="/" lang="ko" aria-current={locale === "ko" ? "page" : undefined}>
            {language.korean}
          </Link>
          <Link href="/en" lang="en" aria-current={locale === "en" ? "page" : undefined}>
            {language.english}
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
        >
          <span className={styles.menuIcon} aria-hidden="true" />
          <span className={styles.menuLabel}>{isOpen ? content.close : content.menu}</span>
        </button>
      </div>

      {isOpen ? (
        <nav id="mobile-navigation" className={styles.mobileNav} aria-label={content.mobileNavLabel}>
          <div className="site-container">
            {content.navigation.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
