import Image from "next/image";

import { problems } from "@/data/siteContent";

import { ProblemItem } from "./ProblemItem";
import styles from "./ProblemEditorial.module.css";

export function ProblemEditorial() {
  return (
    <section id="service" className={`section-shell ${styles.section}`} aria-labelledby="problem-title">
      <div className={`site-container ${styles.layout}`}>
        <div className={styles.intro}>
          <p className="section-kicker">머무르다가 필요한 이유</p>
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
          <svg
            className={styles.routeGraphic}
            viewBox="0 0 640 560"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              className={styles.routeMain}
              d="M92 92 C226 24 344 102 514 116 C612 124 602 238 506 280 C382 334 206 270 104 356 C18 428 174 520 530 470"
            />
            <path
              className={styles.routeEcho}
              d="M75 114 C204 55 335 128 491 139 C548 143 566 198 528 238"
            />
          </svg>
          <Image
            className={styles.routeSprout}
            src="/brand/logo-sprout.svg"
            alt=""
            width={52}
            height={36}
            aria-hidden="true"
          />
          <ProblemItem {...problems[0]} variant="sand" />
          <ProblemItem {...problems[1]} variant="paper" />
          <ProblemItem {...problems[2]} variant="sea" />
          <ProblemItem {...problems[3]} variant="forest" />
        </div>
      </div>
    </section>
  );
}
