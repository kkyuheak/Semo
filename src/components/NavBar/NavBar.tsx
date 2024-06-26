"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { ICurrentUser } from "@/actions/getCurrentUser";
import { useUserStore } from "@/app/userStore";

export default function NavBar({
  currentUser,
}: {
  currentUser: ICurrentUser | undefined;
}) {
  const { setUser, user, resetUser } = useUserStore();
  console.log("user:", user);

  const [hide, setHide] = useState<boolean>(true);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("click", () => {
      setHide(true);
    });
  });

  const handleNameClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (hide) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      resetUser();
    }
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
            height={50}
            onClick={() => {
              router.push("/");
            }}
          />
        </div>

        {/* topNav Items */}

        <div className={styles.topNavList}>
          <ul className={styles.topNavListItem}>
            {currentUser ? (
              <li className={styles.navUserName} onClick={handleNameClick}>
                {currentUser.nickname}님
              </li>
            ) : (
              <li>
                {pathname === "/login" ? null : (
                  <Link href={"/login"}>로그인</Link>
                )}
              </li>
            )}
            <li>
              <Link href={"/exhibitions"}>전시와 교육</Link>
            </li>
            <li>
              <Link href={"/collection"}>미술관 소장품</Link>
            </li>
          </ul>

          <div
            className={
              hide
                ? `${styles.hideNavMenu} ${styles.hide}`
                : `${styles.hideNavMenu}`
            }
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ul>
              <li>
                <Link href={"/"}>회원정보</Link>
              </li>
              <li
                onClick={() => {
                  signOut();
                }}
              >
                로그아웃
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
