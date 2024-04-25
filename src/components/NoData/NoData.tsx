import Link from "next/link";
import styles from "./noData.module.css";

const NoData = ({ reset }: { reset: boolean }) => {
  return (
    <div className={styles.container}>
      <div className={styles.noData_box}>
        <h3>찾으시는 데이터가 없습니다.</h3>
        {/* <div>검색 초기화</div> */}
        <div className={styles.linkHome}>
          <Link href={"/"}>홈으로 가기</Link>
        </div>
      </div>
    </div>
  );
};

export default NoData;
