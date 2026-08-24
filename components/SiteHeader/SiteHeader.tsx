"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { FIGMA_PROTOTYPE_URL, navigation } from "@/data/siteContent";

import styles from "./SiteHeader.module.css";

export function SiteHeader() {
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
        <a className={styles.brand} href="#top" aria-label="머무르다 페이지 처음으로">
          <Image src="/brand/logo-sprout.svg" alt="" width={22} height={16} aria-hidden="true" />
          <Image src="/brand/logo-wordmark.svg" alt="머무르다" width={112} height={29} priority />
        </a>

        <nav className={styles.desktopNav} aria-label="주요 메뉴">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className={`${styles.figmaLink} button-secondary`}
          href={FIGMA_PROTOTYPE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="별도 Figma 프로토타입 보기, 새 탭에서 외부 Figma 파일 열림"
        >
          Figma 프로토타입 보기 ↗
        </a>

        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
        >
          <span className={styles.menuIcon} aria-hidden="true" />
          <span>{isOpen ? "닫기" : "메뉴"}</span>
        </button>
      </div>

      {isOpen ? (
        <nav id="mobile-navigation" className={styles.mobileNav} aria-label="모바일 주요 메뉴">
          <div className="site-container">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              className={styles.mobileFigma}
              href={FIGMA_PROTOTYPE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              별도 Figma 프로토타입 보기 ↗
              <small>새 탭에서 외부 Figma 파일이 열립니다.</small>
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
