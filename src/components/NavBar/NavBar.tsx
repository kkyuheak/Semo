"use client";

import { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [mouseIntro, setMouseIntro] = useState(false);
  const [mouseVisit, setMouseVisit] = useState(false);

  return (
    <div className={styles.container}>
      {/* 로고 */}
      <div className={styles.navLogo}>
        <Image
          src={"https://sema.seoul.go.kr/resources/assets/svg/o_symbol_b_v.svg"}
          alt="Logo"
          width={280}
          height={300}
        />
      </div>

      {/* navItem */}
      <div className={styles.navItem}>
        <ul className={styles.navList}>
          <li
            onMouseOver={() => {
              setMouseIntro(true);
            }}
            onMouseLeave={() => {
              setMouseIntro(false);
            }}
            className={mouseIntro ? `${styles.mouseOn}` : ""}
          >
            <Link href={"#intro"}>소개</Link>
          </li>
          <li>
            <Link
              href={"#visit"}
              onMouseOver={() => {
                setMouseVisit(true);
              }}
              onMouseLeave={() => {
                setMouseVisit(false);
              }}
              className={mouseVisit ? `${styles.mouseOn}` : ""}
            >
              방문하기
            </Link>
          </li>
          <li className={styles.navLink}>로그인</li>
          <li className={styles.navLink}>전시와 교육</li>
          <li className={styles.navLink}>미술관 소장품</li>
        </ul>
      </div>
    </div>
  );
}
