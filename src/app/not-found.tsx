import Link from "next/link";
import styles from "./page.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundBox}>
        <p>알 수 없는 페이지 입니다.</p>
        <Link href={"/"}>홈으로 돌아가기</Link>
      </div>
    </div>
  );
};

export default NotFound;
