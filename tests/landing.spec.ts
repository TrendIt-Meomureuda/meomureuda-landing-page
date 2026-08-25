import { expect, test } from "@playwright/test";

import { FIGMA_PROTOTYPE_URL } from "@/data/siteContent";

test("제휴 심사용 핵심 정보와 연락처를 제공한다", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1, name: /나에게 맞는 제주에서/ })).toBeVisible();
  await expect(page.getByText("API 연동", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("제휴가 확정되었음을 의미하지 않습니다.", { exact: false })).toBeVisible();
  await expect(page.getByRole("link", { name: "제휴 및 데이터 연동 문의하기" })).toHaveAttribute(
    "href",
    /^mailto:skyupdown543@naver\.com/,
  );
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
  await expect(page.getByText("실제 서비스가 아닌 디자인 검토용", { exact: false }).first()).toBeVisible();
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

test("키보드 포커스와 reduced-motion 환경을 지원한다", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "본문으로 바로가기" })).toBeFocused();

  const scrollBehavior = await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior);
  expect(scrollBehavior).toBe("auto");
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
});
