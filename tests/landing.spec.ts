import { expect, test } from "@playwright/test";

import { FIGMA_PROTOTYPE_URL } from "@/data/siteContent";

test("제휴 심사용 핵심 정보와 연락처를 제공한다", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1, name: /나에게 맞는 제주에서/ })).toBeVisible();
  await expect(page.getByText("API 연동", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("현재 숙박 플랫폼 및 제주 숙소 공급자와 데이터 연동 가능성을 협의하는 과정 중에 있습니다.", { exact: true })).toBeVisible();
  await expect(page.getByText("제휴 및 데이터 연동 문의는 아래 연락처로 문의해 주세요.", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "+82 10-2478-8770" }).first()).toHaveAttribute(
    "href",
    "tel:+821024788770",
  );
});

test("Figma 링크를 실제 서비스가 아닌 별도 프로토타입으로 표시한다", async ({ page }) => {
  await page.goto("/");

  const figmaLinks = page.getByRole("link", { name: /Figma 프로토타입 보기/ });
  await expect(figmaLinks.first()).toHaveAttribute("href", FIGMA_PROTOTYPE_URL);
  await expect(figmaLinks.first()).toHaveAttribute("target", "_blank");
  await expect(page.locator("header").getByRole("link", { name: /Figma/ })).toHaveCount(0);
  await expect(page.getByText("실제 서비스가 아닌 디자인 검토용", { exact: false })).toHaveCount(0);
  await expect(page.getByRole("link", { name: /서비스 미리보기/ })).toHaveCount(0);
});

test("내비게이션 대상과 모바일 너비에서 레이아웃이 유지된다", async ({ page }) => {
  await page.goto("/");

  for (const id of ["service", "flow", "data", "status", "project", "contact"]) {
    await expect(page.locator(`#${id}`)).toHaveCount(1);
  }

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});

test("수정된 체류 범위와 제휴 안내 문구를 제공한다", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("7–28박", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("진단을 통한 권역 및 숙소 추천을 중심으로", { exact: false })).toBeVisible();
  await expect(page.getByRole("img", { name: /AI 스크랩북으로 제주 여행의 순간/ })).toHaveAttribute(
    "src",
    /scrapbook\.png/,
  );
  await expect(page.getByText("Agoda", { exact: false })).toHaveCount(0);
  await expect(page.getByText("Booking.com", { exact: false })).toHaveCount(0);
  await expect(page.getByText("공모전 제출 예정", { exact: true })).toHaveCount(0);
  await expect(page.getByText("초기 운영 원칙", { exact: true })).toHaveCount(0);
  await expect(page.locator("#project dl > div")).toHaveCount(5);
});

test("키보드 포커스와 reduced-motion 환경을 지원한다", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "본문으로 바로가기" })).toBeFocused();

  const scrollBehavior = await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior);
  expect(scrollBehavior).toBe("auto");
});

test("언어 선택으로 자연스러운 영어 버전을 제공한다", async ({ page }) => {
  await page.goto("/");

  const languageNavigation = page.getByRole("navigation", { name: "언어 선택" });
  await expect(languageNavigation.getByRole("link", { name: "English" })).toHaveAttribute("href", "/en");
  await languageNavigation.getByRole("link", { name: "English" }).click();

  await expect(page).toHaveURL(/\/en$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { level: 1, name: /Find your place in Jeju/ })).toBeVisible();
  await expect(page.getByText("availability", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("No partnership should be considered confirmed.", { exact: false }).first()).toBeVisible();

  const englishLanguageNavigation = page.getByRole("navigation", { name: "Choose language" });
  await expect(englishLanguageNavigation.getByRole("link", { name: "한국어" })).toHaveAttribute("href", "/");

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});

test("데스크톱과 모바일 전체 화면을 캡처한다", async ({ page }, testInfo) => {
  test.setTimeout(90_000);
  await page.goto("/");
  await page.evaluate(async () => {
    for (const image of document.querySelectorAll<HTMLImageElement>("img")) {
      image.loading = "eager";
    }
    const step = Math.max(500, Math.floor(window.innerHeight * 0.75));
    for (let position = 0; position < document.body.scrollHeight; position += step) {
      window.scrollTo(0, position);
      await new Promise<void>((resolve) => setTimeout(resolve, 45));
    }
    window.scrollTo(0, 0);
  });
  await expect.poll(
    () => page.evaluate(
      () => Array.from(document.querySelectorAll<HTMLImageElement>("img")).filter(
        (image) => !image.complete || image.naturalWidth === 0,
      ).length,
    ),
    { timeout: 10_000 },
  ).toBe(0);
  await page.screenshot({
    path: `artifacts/screenshots/${testInfo.project.name}-landing.png`,
    fullPage: true,
    animations: "disabled",
    caret: "hide",
    scale: "css",
  });

  await page.goto("/en");
  await page.evaluate(async () => {
    for (const image of document.querySelectorAll<HTMLImageElement>("img")) {
      image.loading = "eager";
    }
    const step = Math.max(500, Math.floor(window.innerHeight * 0.75));
    for (let position = 0; position < document.body.scrollHeight; position += step) {
      window.scrollTo(0, position);
      await new Promise<void>((resolve) => setTimeout(resolve, 45));
    }
    window.scrollTo(0, 0);
  });
  await page.screenshot({
    path: `artifacts/screenshots/${testInfo.project.name}-landing-en.png`,
    fullPage: true,
    animations: "disabled",
    caret: "hide",
    scale: "css",
  });
});
