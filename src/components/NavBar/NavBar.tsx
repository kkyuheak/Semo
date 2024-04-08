"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const [showNav, setShowNav] = useState<number>();
  const pathname = usePathname();
  const router = useRouter();

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 1200) {
  //       setShowNav(true);
  //     } else {
  //       setShowNav(false);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    const height = document.getElementById("visit")?.offsetTop;
    console.log(height);
    setShowNav(height);
  }, []);

  // 메인 홈 nav
  if (pathname === "/") {
    return (
      <div
        className={styles.container}
        style={{ transform: `translateY(${showNav}px)` }}
      >
        {/* 로고 */}
        <div className={styles.navLogo}>
          <Image
            src={
              "https://sema.seoul.go.kr/resources/assets/svg/o_symbol_b_v.svg"
            }
            alt="Logo"
            width={280}
            height={300}
            onClick={() => {
              router.push("/");
            }}
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
            <li className={styles.navLink}>
              <Link href={"/login"}>로그인</Link>
            </li>
            <li className={styles.navLink}>전시와 교육</li>
            <li className={styles.navLink}>미술관 소장품</li>
          </ul>
        </div>
      </div>
    );
  } else if (pathname !== "/") {
    return (
      <div className={styles.topNav}>
        <div className={styles.topNavWrapper}>
          {/* topNav logo */}
          <div className={styles.topNavLogo}>
            <Image
              src={
                "https://sema.seoul.go.kr/resources/assets/svg/o_symbol_b_v.svg"
              }
              alt="Logo"
              width={70}
              height={70}
              onClick={() => {
                router.push("/");
              }}
            />
          </div>

          {/* topNav Items */}

          <ul className={styles.topNavList}>
            <li>
              <Link href={"/login"}>로그인</Link>
            </li>
            <li>
              <Link href={""}>전시와 교육</Link>
            </li>
            <li>
              <Link href={"/collection"}>미술관 소장품</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // topNav
}
