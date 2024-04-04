"use client";

import { useEffect, useState } from "react";
import styles from "./intro.module.css";

export default function Intro() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      console.log(window.scrollY);
    });
  }, []);

  return (
    <div className={styles.introTitle}>
      <span
        className={
          scroll ? styles.introUp : `${styles.introUp} ${styles.introDown}`
        }
      >
        서울시립도서관은
      </span>
      <hr />
      <span
        className={
          scroll ? styles.introUp : `${styles.introUp} ${styles.introDown}`
        }
      >
        시대와 미술의 변화에 부응하고
      </span>
      <hr />
      <span
        className={
          scroll ? styles.introUp : `${styles.introUp} ${styles.introDown}`
        }
      >
        서로를 채우며 성장해 가는
      </span>
      <hr />
      <span
        className={
          scroll ? styles.introUp : `${styles.introUp} ${styles.introDown}`
        }
      >
        네트워크 미술관입니다.
      </span>
    </div>
  );
}
