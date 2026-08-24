import Image from "next/image";

import { problems } from "@/data/siteContent";

import { ProblemItem } from "./ProblemItem";
import styles from "./ProblemEditorial.module.css";

export function ProblemEditorial() {
  return (
    <section id="service" className={`section-shell ${styles.section}`} aria-labelledby="problem-title">
      <div className={`site-container ${styles.layout}`}>
        <div className={styles.intro}>
          <p className="section-kicker">Why Meomureuda</p>
          <h2 id="problem-title" className="section-title">한 달이라는 시간에는,<br />호텔 검색만으로 부족합니다.</h2>
          <p className="section-copy">
            짧은 여행의 숙소 선택과 달리, 한달살이는 동네의 생활감과 이동, 예산을 함께 살펴야 합니다.
          </p>
          <figure className={styles.photoNote}>
            <div className={styles.photoCrop}>
              <Image
                src="/photos/jeju-sea.jpg"
                alt="제주 현무암 해안과 잔잔한 바다"
                fill
                sizes="(max-width: 768px) 90vw, 34vw"
              />
            </div>
            <figcaption>머물 곳을 고르는 일은, 앞으로 보낼 하루를 고르는 일입니다.</figcaption>
          </figure>
        </div>

        <div className={styles.problems}>
          <ProblemItem {...problems[0]} variant="sand" />
          <ProblemItem {...problems[1]} variant="paper" />
          <ProblemItem {...problems[2]} variant="sea" />
          <ProblemItem {...problems[3]} variant="forest" />
        </div>
      </div>
    </section>
  );
}
