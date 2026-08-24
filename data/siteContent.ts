export const FIGMA_PROTOTYPE_URL =
  "https://www.figma.com/design/lxAdBxJA70VxTettH1nJF5/%EA%B4%80%EA%B4%91%EA%B3%B5%EB%AA%A8%EC%A0%84-%EB%A8%B8%EB%AC%B4%EB%A5%B4%EB%8B%A4?node-id=0-1&p=f&t=1Yw7pnIdnUkCimsN-0";

export const CONTACT_EMAIL = "skyupdown543@naver.com";
export const CONTACT_PHONE_DISPLAY = "+82 10-2478-8770";
export const CONTACT_PHONE_HREF = "tel:+821024788770";
export const CONTACT_EMAIL_HREF =
  "mailto:skyupdown543@naver.com?subject=%5B%EB%A8%B8%EB%AC%B4%EB%A5%B4%EB%8B%A4%5D%20%EC%88%99%EC%86%8C%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%B0%8F%20API%20%EC%A0%9C%ED%9C%B4%20%EB%AC%B8%EC%9D%98";
export const PILOT_TARGET_DATE = "2026-09-05T00:00:00+09:00";
export const SUBMISSION_DATE = "2026-09-21T16:00:00+09:00";

export const navigation = [
  { href: "#service", label: "서비스 소개" },
  { href: "#flow", label: "이용 흐름" },
  { href: "#data", label: "데이터 연동" },
  { href: "#status", label: "개발 현황" },
  { href: "#project", label: "프로젝트 정보" },
  { href: "#contact", label: "문의하기" },
] as const;

export const problems = [
  {
    number: "01",
    title: "생활권 비교의 어려움",
    body: "제주 권역별 교통, 편의시설과 분위기를 한눈에 비교하기 어렵습니다.",
  },
  {
    number: "02",
    title: "분산된 숙소 탐색",
    body: "한달살이 숙소 정보가 여러 예약·단기임대 플랫폼에 흩어져 있습니다.",
  },
  {
    number: "03",
    title: "장기 체류 가격의 불투명성",
    body: "일반 숙박 가격과 28–60박 장기 체류 가격의 차이를 파악하기 어렵습니다.",
  },
  {
    number: "04",
    title: "성향과 지역을 잇는 추천 부족",
    body: "여행자의 생활 성향과 제주 지역 특성을 함께 고려한 추천이 부족합니다.",
  },
] as const;

export type ProductStatus = "핵심 기능" | "개발 중" | "보조 기능" | "후속 개발 예정";

export const serviceFlow: ReadonlyArray<{
  number: string;
  title: string;
  body: string;
  status: ProductStatus;
  image: string;
  alt: string;
}> = [
  {
    number: "01",
    title: "여행 성향 진단",
    body: "선호 풍경, 생활 리듬과 이동 방식을 질문해 장기 체류에 중요한 성향을 정리합니다.",
    status: "핵심 기능",
    image: "/figma/diagnosis.png",
    alt: "네 가지 제주 풍경 중 선호 이미지를 고르는 머무르다 여행 성향 진단 화면",
  },
  {
    number: "02",
    title: "맞춤 제주 권역 추천",
    body: "진단 결과와 제주 권역별 생활 특성을 연결해 나에게 맞는 머물 지역을 제안합니다.",
    status: "핵심 기능",
    image: "/figma/home.png",
    alt: "감성 충전가형 여행 성향과 제주 서귀포시를 추천하는 머무르다 홈 화면",
  },
  {
    number: "03",
    title: "장기 체류 숙소 확인",
    body: "일정, 인원과 권역 조건에 맞는 숙소의 가격·객실 재고·예약 경로를 확인하도록 개발하고 있습니다.",
    status: "개발 중",
    image: "/figma/stays.png",
    alt: "제주 장기 체류 숙소의 사진, 지역, 평점과 가격을 보여주는 머무르다 숙소 추천 화면",
  },
  {
    number: "04",
    title: "체류 경험 기록",
    body: "커뮤니티에서 정보를 나누고 여행 일지로 한 달의 장면을 남기는 보조 경험입니다.",
    status: "후속 개발 예정",
    image: "/figma/journal.png",
    alt: "날짜별 제주 여행 기록을 카드로 쌓아 보여주는 머무르다 여행 일지 화면",
  },
];

export type DeliveryStatus = "완료" | "개발 중" | "검토·문의" | "후속 예정";

export const developmentStatus: ReadonlyArray<{
  item: string;
  status: DeliveryStatus;
}> = [
  { item: "서비스 기획 및 UX 설계", status: "완료" },
  { item: "Figma 프로토타입", status: "완료" },
  { item: "성향 진단 및 권역 추천", status: "개발 중" },
  { item: "숙소 데이터베이스 및 관리자 등록 기능", status: "개발 중" },
  { item: "외부 숙박 API 연동", status: "검토·문의" },
  { item: "커뮤니티", status: "개발 중" },
  { item: "여행 일지", status: "후속 예정" },
];

export const businessModels = [
  {
    title: "제휴형 예약 연결",
    body: "예약 가능한 외부 플랫폼의 상세 페이지로 사용자를 연결하는 초기 모델입니다.",
  },
  {
    title: "숙소 운영자 직접 입점",
    body: "제주 숙소 운영자가 장기 체류 조건을 직접 등록하는 방식을 검토합니다.",
  },
  {
    title: "추천 노출·홍보 상품",
    body: "데이터와 이용 규모가 확보된 이후 장기적으로 검토할 예정입니다.",
  },
  {
    title: "앱 내 결제 미운영",
    body: "초기에는 머무르다 앱 안에서 예약과 결제를 직접 처리하지 않습니다.",
  },
] as const;

export const projectFacts = [
  ["공모전명", "2026 관광데이터 활용 공모전"],
  ["참가 부문", "웹·앱 개발 부문"],
  ["팀명", "Trendit"],
  ["서비스명", "머무르다"],
  ["대상 지역", "제주특별자치도"],
  ["대상 체류 기간", "약 28–60박"],
] as const;
