import { expect, test } from "@playwright/test";

test("SEO 메타데이터와 공유 이미지를 제공한다", async ({ page, request }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("머무르다 | 제주 한달살이 성향 기반 권역·숙소 추천");
  await expect(page.locator("html")).toHaveAttribute("lang", "ko");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /28–60박/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://meomureuda-partners.vercel.app",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /opengraph-image/);

  const ogResponse = await request.get("/opengraph-image");
  expect(ogResponse.ok()).toBe(true);
  expect(ogResponse.headers()["content-type"]).toContain("image/png");
});

test("영어 페이지에 맞는 SEO 언어와 대체 링크를 제공한다", async ({ page, request }) => {
  await page.goto("/en");

  await expect(page).toHaveTitle("Meomureuda | Personalized Jeju Long-Stay Recommendations");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /28–60-night stays/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://meomureuda-partners.vercel.app/en",
  );
  await expect(page.locator('link[hreflang="ko-KR"]')).toHaveAttribute(
    "href",
    "https://meomureuda-partners.vercel.app",
  );
  await expect(page.locator('link[hreflang="en-US"]')).toHaveAttribute(
    "href",
    "https://meomureuda-partners.vercel.app/en",
  );
  const englishOgUrl = await page.locator('meta[property="og:image"]').getAttribute("content");
  expect(englishOgUrl).toMatch(/en\/opengraph-image/);
  if (!englishOgUrl) throw new Error("English Open Graph image URL is missing");

  const englishOgResponse = await request.get(new URL(englishOgUrl).pathname);
  expect(englishOgResponse.ok()).toBe(true);
  expect(englishOgResponse.headers()["content-type"]).toContain("image/png");
});

test("접근성 이름, 이미지 대체 텍스트와 제목 계층을 유지한다", async ({ page }) => {
  await page.goto("/");

  const audit = await page.evaluate(() => {
    const unnamedInteractive = Array.from(document.querySelectorAll("a, button")).filter((element) => {
      const label = element.getAttribute("aria-label")?.trim();
      const text = element.textContent?.trim();
      return !label && !text;
    }).length;

    const imagesWithoutAlt = Array.from(document.querySelectorAll("img")).filter(
      (image) => !image.hasAttribute("alt"),
    ).length;

    const headingLevels = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6")).map(
      (heading) => Number(heading.tagName.slice(1)),
    );
    const headingJumps = headingLevels.filter(
      (level, index) => index > 0 && level - headingLevels[index - 1] > 1,
    ).length;

    return { unnamedInteractive, imagesWithoutAlt, headingJumps };
  });

  expect(audit.unnamedInteractive).toBe(0);
  expect(audit.imagesWithoutAlt).toBe(0);
  expect(audit.headingJumps).toBe(0);
});

test("로컬 자산 로딩과 브라우저 콘솔에 오류가 없다", async ({ page }) => {
  const consoleErrors: string[] = [];
  const failedRequests: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("requestfailed", (request) => {
    failedRequests.push(request.url());
  });

  await page.goto("/");
  await page.evaluate(async () => {
    const step = Math.max(500, Math.floor(window.innerHeight * 0.75));
    for (let position = 0; position < document.body.scrollHeight; position += step) {
      window.scrollTo(0, position);
      await new Promise<void>((resolve) => setTimeout(resolve, 35));
    }
  });

  await expect.poll(
    () => page.evaluate(
      () => Array.from(document.querySelectorAll<HTMLImageElement>("img")).filter(
        (image) => !image.complete || image.naturalWidth === 0,
      ).length,
    ),
    { timeout: 10_000 },
  ).toBe(0);
  expect(consoleErrors).toEqual([]);
  expect(failedRequests).toEqual([]);
});
