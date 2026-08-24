# 머무르다 제휴 랜딩페이지 품질 검수 보고서

검수일: 2026-08-25

프로젝트: `C:\dev\meomureuda-landing`

대상 URL: `https://meomureuda-partners.vercel.app` 배포 예정

## 프로젝트 분리

- 기존 앱 `C:\dev\meomureuda-frontend-app`의 파일, 라우터, 패키지, 환경변수, 빌드 설정은 수정하지 않았다.
- 랜딩페이지는 독립 Next.js 프로젝트와 독립 Git 저장소로 구성했다.
- 기존 앱 컴포넌트를 import하지 않으며, 필요한 Figma 기반 자산은 새 프로젝트의 `public` 폴더에 별도 보관했다.

## 자동 검수 결과

| 검사 | 결과 |
| --- | --- |
| TypeScript `tsc --noEmit` | 통과 |
| ESLint | 통과 |
| Next.js 프로덕션 빌드 | 통과, 7개 경로 정적 생성 |
| Playwright 데스크톱·모바일 | 16/16 통과 |
| 브라우저 콘솔 및 로컬 자산 요청 | 오류 없음 |
| 키보드 포커스·reduced motion | 통과 |
| SEO 메타데이터·OG·canonical | 통과 |

## Lighthouse

Lighthouse 12.8.2, 로컬 프로덕션 빌드, 모바일 제한 환경, 시스템 Chrome 기준이다.

| 카테고리 | 점수 |
| --- | ---: |
| Performance | 94 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

원본 결과: [`artifacts/lighthouse/report.json`](../artifacts/lighthouse/report.json)

## 시각 검수

- 데스크톱 1440px 전체 화면: [`desktop-chromium-landing.png`](../artifacts/screenshots/desktop-chromium-landing.png)
- 모바일 390px 전체 화면: [`mobile-chromium-landing.png`](../artifacts/screenshots/mobile-chromium-landing.png)
- 모든 섹션이 빈 영역 없이 렌더링되는지 확인했다.
- 긴 제목, 연락처, 상태표, 데이터 연동 다이어그램의 넘침·잘림을 확인했다.
- Agoda·Booking.com은 텍스트로만 표시하며 제휴 확정 표현이나 공식 로고를 사용하지 않았다.
- Figma CTA는 `별도 Figma 프로토타입 보기`로 표시하고 실제 서비스가 아닌 디자인 검토용 링크임을 명시했다.

## 접근성 및 인터페이스 검수

- 시맨틱 헤딩 계층, 이미지 대체 텍스트, 링크 접근성 이름을 자동 검사했다.
- 오렌지·베이지 배경 위 소형 텍스트 대비를 보정해 Lighthouse 접근성 100점을 확인했다.
- 키보드 포커스 표시와 본문 바로가기 링크를 제공한다.
- 모든 애니메이션은 `prefers-reduced-motion`에서 사실상 비활성화된다.
- 외부 링크와 연락처 링크는 키보드로 사용할 수 있다.

## 디스크 정리

- npm이 관리하는 재다운로드 가능한 캐시 약 1.82GB를 삭제했다.
- 개발 중 생성된 `.next/dev`, `.next/cache`만 정리했으며 소스, Git 이력, 환경변수, 기존 앱 의존성은 삭제하지 않았다.
- C: 여유 공간은 정리 전 약 51.3MB에서 최종 빌드·테스트·Lighthouse 결과 보관 후 약 1,638.9MB로 늘었다.
- 사용자 Temp 전체, 기존 앱 `node_modules`, 기존 앱 `.expo`는 삭제하지 않았다.

## 남은 운영 작업

- Vercel에서 `meomureuda-landing`을 별도 프로젝트로 연결한다.
- 임시 도메인을 `meomureuda-partners.vercel.app`으로 설정한다.
- 추후 `partners.meomureuda.kr` 또는 `about.meomureuda.kr`을 연결한다.
- 실제 서비스 URL이 확정되면 `서비스 미리보기` CTA에만 해당 URL을 설정한다.
