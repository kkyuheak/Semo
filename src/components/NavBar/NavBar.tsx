"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, []);

  return (
    <div
      className={
        showNav
          ? `${styles.container} ${styles.showNav}`
          : `${styles.container}`
      }
    >
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
          <li>
            <Link href={"#intro"} className={styles.navScroll}>
              소개
            </Link>
          </li>
          <li>
            <Link href={"#visit"} className={styles.navScroll}>
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
