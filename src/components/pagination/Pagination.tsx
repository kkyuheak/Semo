import React from "react";
import { LuArrowRightCircle, LuArrowLeftCircle } from "react-icons/lu";
import styles from "./pagination.module.css";

interface IPagiNation {
  page: number;
  setPage: (e: number) => void;
  limit: number;
  total: number;
}

const Pagination = ({ page, setPage, limit, total }: IPagiNation) => {
  // 데이터 총 갯수 / 화면에 보여질 데이터 갯수 소수점 일 수도 있으므로 정수 반올림 해서 ceil을 사용
  const numPages = Math.ceil(total / limit);

  const handleClick = (operater: string) => {
    if (operater === "plus") {
      setPage(page + 1);
    }
  };

  return (
    <div className={styles.container}>
      <span>
        <LuArrowLeftCircle size={40} />
      </span>
      <div className={styles.numWrapper}>
        {Array(numPages)
          .fill("")
          .map((_, i) => {
            return (
              <div key={i} className={styles.pageNum}>
                {i + 1}
              </div>
            );
          })}
      </div>
      <span onClick={() => handleClick("plus")}>
        <LuArrowRightCircle size={40} />
      </span>
    </div>
  );
};

export default Pagination;
