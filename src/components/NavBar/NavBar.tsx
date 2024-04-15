"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { ICurrentUser } from "@/actions/getCurrentUser";

export default function NavBar({
  currentUser,
}: {
  currentUser: ICurrentUser | undefined;
}) {
  // 로그인세션 여부

  const [whiteNav, setWhiteNav] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const height: number = document.getElementById("visit")?.offsetTop!;

    window.addEventListener("scroll", () => {
      if (window.scrollY > height) {
        setWhiteNav(true);
      } else {
        setWhiteNav(false);
      }
    });
  }, []);

  // // 메인 홈 nav
  // if (pathname === "/") {
  //   return (
  //     <div className={styles.container}>
  //       {/* 로고 */}
  //       <div className={styles.navLogo}>
  //         <Image
  //           src={
  //             "https://sema.seoul.go.kr/resources/assets/svg/o_symbol_b_v.svg"
  //           }
  //           alt="Logo"
  //           width={280}
  //           height={300}
  //           onClick={() => {
  //             router.push("/");
  //           }}
  //         />
  //       </div>

  //       {/* navItem */}
  //       <div className={styles.navItem}>
  //         <ul className={styles.navList}>
  //           <li>
  //             <Link href={"#intro"} className={styles.navScroll}>
  //               소개
  //             </Link>
  //           </li>
  //           <li>
  //             <Link href={"#visit"} className={styles.navScroll}>
  //               방문하기
  //             </Link>
  //           </li>
  //           <li className={styles.navLink}>
  //             <Link href={"/login"}>로그인</Link>
  //           </li>
  //           <li className={styles.navLink}>전시와 교육</li>
  //           <li className={styles.navLink}>미술관 소장품</li>
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // } else if (pathname !== "/") {

  return (
    <div
      className={
        whiteNav ? `${styles.topNav} ${styles.whiteTop}` : `${styles.topNav}`
      }
    >
      <div className={styles.topNavWrapper}>
        {/* topNav logo */}
        <div className={styles.topNavLogo}>
          <Image
            src={
              "https://sema.seoul.go.kr/resources/assets/svg/o_symbol_b_v.svg"
            }
            alt="Logo"
            width={70}
            height={50}
            onClick={() => {
              router.push("/");
            }}
          />
        </div>

        {/* topNav Items */}

        <ul className={styles.topNavList}>
          {currentUser ? (
            <li
              onClick={() => {
                signOut();
              }}
            >
              로그아웃
            </li>
          ) : (
            <li>
              <Link href={"/login"}>로그인</Link>
            </li>
          )}
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
