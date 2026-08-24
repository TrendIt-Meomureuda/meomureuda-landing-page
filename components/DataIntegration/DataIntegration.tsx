import Image from "next/image";

import styles from "./DataIntegration.module.css";

export function DataIntegration() {
  return (
    <section id="data" className={`section-shell deferred-section ${styles.section}`} aria-labelledby="data-title">
      <div className="site-container">
        <div className={styles.heading}>
          <div>
            <p className="section-kicker">Data partnership</p>
            <h2 id="data-title" className="section-title">흩어진 숙소 정보를,<br />머무는 조건에 맞게</h2>
          </div>
          <p className="section-copy">
            머무르다는 여러 공급 경로의 숙소 기본정보, 가격, 객실 재고와 예약 링크를 공통 형식으로 정리하는 구조를 검토하고 있습니다.
          </p>
        </div>

        <div className={styles.diagram} aria-label="숙소 데이터 연동 검토 구조">
          <div className={styles.sources}>
            <p className={styles.columnLabel}>데이터 공급 후보</p>
            <article>
              <span>연동 검토 대상</span>
              <h3>Agoda · Booking.com 등</h3>
              <p>숙박 플랫폼 API</p>
            </article>
            <article>
              <span>제휴 협의</span>
              <h3>제주 한달살이·단기임대 플랫폼</h3>
              <p>공급 데이터 연동</p>
            </article>
            <article>
              <span>초기 모델 검토</span>
              <h3>제주 숙소 운영자</h3>
              <p>직접 입점 등록</p>
            </article>
            <article>
              <span>개발 중</span>
              <h3>관리자 CSV 업로드</h3>
              <p>가격·공실 정보 관리</p>
            </article>
          </div>

          <span className={styles.arrow} aria-hidden="true">→</span>

          <div className={styles.processor}>
            <div className={styles.processorTop}>
              <Image src="/brand/character-body.svg" alt="" width={90} height={108} aria-hidden="true" />
              <div>
                <span>Meomureuda data layer</span>
                <h3>머무르다</h3>
              </div>
            </div>
            <ul>
              <li>숙소 기본정보</li>
              <li>장기 체류 가격</li>
              <li>객실 재고</li>
              <li>예약 링크</li>
            </ul>
            <p>공급처별 데이터를 공통 형식으로 정리하는 구조를 개발하고 있습니다.</p>
          </div>

          <span className={styles.arrow} aria-hidden="true">→</span>

          <div className={styles.result}>
            <p className={styles.columnLabel}>사용자에게 제공</p>
            <div className={styles.conditionStamp}>
              <strong>일정</strong><span>28–60박</span>
              <strong>인원</strong><span>입력 조건</span>
              <strong>권역</strong><span>성향 추천</span>
            </div>
            <h3>조건에 맞는 숙소 정보</h3>
            <p>외부 예약이 가능한 경우 해당 플랫폼의 예약 상세 페이지로 이동합니다.</p>
            <small>초기에는 앱 내부에서 예약·결제를 직접 처리하지 않습니다.</small>
          </div>
        </div>

        <aside className={styles.notice} aria-label="외부 플랫폼 제휴 상태 안내">
          <strong>연동 검토 안내</strong>
          <p>
            현재 숙박 플랫폼 및 제주 숙소 공급자와 데이터 연동 가능성을 협의하고 있습니다. 표시되는 제휴사명은 연동 검토 대상을 의미하며, 제휴가 확정되었음을 의미하지 않습니다.
          </p>
        </aside>
      </div>
    </section>
  );
}
