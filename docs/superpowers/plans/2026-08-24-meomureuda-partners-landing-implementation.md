# 머무르다 제휴 랜딩페이지 구현 계획

- 기준 설계: `docs/superpowers/specs/2026-08-24-meomureuda-partners-landing-design.md`
- 대상 저장소: `C:\dev\meomureuda-landing`
- 기존 앱 저장소: 읽기 전용, 변경 금지

## 1. 독립 Next.js 기반 구성

파일:

- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `next.config.ts`
- `eslint.config.mjs`
- `.gitignore`

작업:

1. Next.js 16.3.2, React 19.2.8, TypeScript strict mode, App Router를 구성한다.
2. CSS Modules를 사용하고 Tailwind·UI 프레임워크는 추가하지 않는다.
3. `dev`, `build`, `start`, `lint`, `typecheck`, `test:e2e` 스크립트를 정의한다.
4. Playwright를 시각·링크 검수 도구로 추가한다.

검증:

- `npm install`
- `npm run typecheck`
- `npm run lint`

## 2. Figma 기반 독립 자산 준비

파일:

- `public/brand/*`
- `public/figma/*`
- `public/photos/*`
- `public/motifs/*`

작업:

1. Figma 원본의 워드마크, 새싹 캐릭터와 장식 벡터를 새 프로젝트로 복사한다.
2. 스플래시, 진단, 홈, 커뮤니티, 일지 대표 프레임을 이미지로 내보낸다.
3. 제주 바다·현무암 사진과 화면 속 필요한 사진을 최적화한다.
4. Agoda·Booking.com 로고가 자산에 포함되지 않았는지 확인한다.
5. 파일명과 출처를 `public/ASSETS.md`에 기록한다.

검증:

- 모든 로컬 자산 경로가 독립 프로젝트 안에 존재한다.
- 만료되는 Figma URL을 런타임 코드에서 사용하지 않는다.

## 3. 디자인 토큰과 공통 구조 구현

파일:

- `app/globals.css`
- `app/layout.tsx`
- `data/siteContent.ts`
- `components/SiteHeader/*`
- `components/SiteFooter/*`
- `components/ScrollReveal/*`

작업:

1. paper, tangerine, coral, forest, jeju-sea, basalt 색상 토큰을 정의한다.
2. 반응형 간격, 타입 스케일, 포커스, reduced-motion 규칙을 구성한다.
3. skip link와 시맨틱 헤더·내비게이션·푸터를 구현한다.
4. 모바일 메뉴의 열기, Escape 닫기, 포커스 이동을 구현한다.
5. 반복 문구와 상태 데이터를 타입이 지정된 정적 데이터로 관리한다.

검증:

- 키보드만으로 헤더와 모든 링크를 사용할 수 있다.
- 320px 너비에서 가로 넘침이 없다.

## 4. 핵심 서비스 경험 섹션 구현

파일:

- `app/page.tsx`
- `app/page.module.css`
- `components/Hero/*`
- `components/ProblemEditorial/*`
- `components/ServiceFlow/*`

작업:

1. `28—60박 제주 체류 기록선`을 히어로의 서명 장치로 구현한다.
2. 핵심 문구, 장기 체류·공모전 배지, 문의 CTA를 배치한다.
3. Figma 링크는 `별도 Figma 프로토타입 보기 ↗`로 표시하고 실제 서비스가 아님을 인접 문구로 고지한다.
4. 네 가지 문제를 동일 카드 반복이 아닌 편집 지면으로 구성한다.
5. 진단·권역 추천을 핵심, 숙소 확인을 개발 중, 커뮤니티·일지를 보조/예정으로 구분한다.

검증:

- Figma 링크는 새 탭으로 열리고 외부 링크 의미가 읽힌다.
- 개발 상태가 이미지와 텍스트에서 일관된다.

## 5. 제휴 심사용 정보 섹션 구현

파일:

- `components/DataIntegration/*`
- `components/DevelopmentStatus/*`
- `components/BusinessModel/*`
- `components/ProjectInfo/*`
- `components/Contact/*`

작업:

1. 데이터 공급 후보 → 머무르다 정규화 → 사용자 조건 → 외부 예약 이동 다이어그램을 구현한다.
2. Agoda·Booking.com은 텍스트와 `연동 검토 대상` 상태로만 표시한다.
3. 필수 비제휴 고지문을 다이어그램 바로 아래에 배치한다.
4. 개발 현황을 완료·개발 중·검토·후속 예정 네 상태로 구분한다.
5. 초기 운영 모델과 공모전 정보를 확정 표현 없이 제공한다.
6. 이메일·전화 CTA를 구현한다.

검증:

- 페이지 어디에도 제휴 확정 또는 수익 확정으로 읽히는 표현이 없다.
- 상태는 색상 외에 텍스트와 아이콘으로도 구분된다.

## 6. 메타데이터와 정적 자산 완성

파일:

- `app/manifest.ts`
- `app/robots.ts`
- `app/sitemap.ts`
- `app/icon.svg`
- `app/opengraph-image.tsx`

작업:

1. 한국어 제목, 설명, canonical, Open Graph, Twitter 메타데이터를 추가한다.
2. Organization·WebSite JSON-LD를 검증된 정보만으로 작성한다.
3. 머무르다 새싹 기반 favicon과 브랜드형 OG 이미지를 만든다.
4. canonical은 임시 Vercel 주소를 사용한다.

검증:

- 프로덕션 HTML에 제목, 설명, OG, canonical이 존재한다.

## 7. 자동·시각 검수와 수정

파일:

- `playwright.config.ts`
- `tests/landing.spec.ts`
- `artifacts/screenshots/*`

작업:

1. 앵커, 이메일, 전화, 외부 Figma 링크를 자동 검증한다.
2. 데스크톱 1440×1200과 모바일 390×844 전체 페이지를 캡처한다.
3. 스크린샷을 직접 검토해 넘침, 잘림, 오탈자, 대비, 단조로운 반복을 수정한다.
4. Lighthouse로 Performance, Accessibility, Best Practices, SEO를 점검한다.
5. reduced-motion과 키보드 접근을 확인한다.

최종 검증:

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `npm run test:e2e`
- Lighthouse 4개 항목 각 90점 이상

## 8. 배포 준비

1. 새 저장소에 구현과 검수 결과를 커밋한다.
2. 기존 앱 저장소에 변경이 없는지 확인한다.
3. 별도 Vercel 프로젝트에서 `meomureuda-partners.vercel.app` 이름을 사용하도록 준비한다.
4. 실제 Vercel 연결·도메인 점유·배포는 계정 연결 권한이 제공된 범위에서 수행한다.
