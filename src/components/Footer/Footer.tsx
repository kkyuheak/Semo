import Link from "next/link";
import styles from "./footer.module.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footerWrapper}>
        {/* SNS 아이콘 */}
        <div className={styles.footerIcon}>
          <FaFacebook size={35} />
          <FaInstagram size={35} />
          <FaYoutube size={35} />
        </div>

        {/* 정보 */}
        <div className={styles.footerInfo}>
          <p>서울 중구 덕수궁갈 61</p>
          <p>{"(대표번호)"} 02-0000-0000</p>
        </div>

        {/* 개인정보 */}
        <ul className={styles.footerPrivacy}>
          <li>
            <Link href={""}>개인정보처리방침</Link>
          </li>
          <li>
            <Link href={""}>접근성 안내</Link>
          </li>
          <li>
            <Link href={""}>이메일무단수집거부</Link>
          </li>
          <li>
            <Link href={""}>함께한 사람들</Link>
          </li>
        </ul>

        {/* github repository */}
        <div className={styles.footerGitLink}>
          <Link href={"https://github.com/kkyuheak/Semo"}>Git Repository</Link>
        </div>
      </div>
    </footer>
  );
}
