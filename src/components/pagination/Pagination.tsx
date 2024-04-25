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
  const totalNumPages: number = Math.ceil(total / limit);
  const numPagesGroups: number = Math.ceil(totalNumPages / 5); // 페이지를 5개씩 보여줄거기 때문에 페이지 그룹은 5개
  const currentPageGroup: number = Math.ceil(page / 5); // 현재 페이지가 속해있는 페이지 그룹 1 / 5 => 1  2/5 => 1 페이지 1번그룹에 속해있음

  const handleClick = (operater: string) => {
    if (operater === "plus") {
      setPage(page + 1);
    } else if (operater === "minus") {
      setPage(page - 1);
    }
  };

  const startPage: number = (currentPageGroup - 1) * 5 + 1;
  const endPage = currentPageGroup * 5;
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
  return (
    <div className={styles.container}>
      <button onClick={() => handleClick("minus")} disabled={page === 1}>
        <LuArrowLeftCircle size={35} />
      </button>
      <div className={styles.numWrapper}>
        {pageNumbers.map((pagenum) => {
          return (
            <div
              key={pagenum}
              className={
                page === pagenum
                  ? `${styles.pageNum} ${styles.onPage}`
                  : `${styles.pageNum}`
              }
              onClick={() => {
                setPage(pagenum);
              }}
            >
              {pagenum}
            </div>
          );
        })}
        <div
          className={
            currentPageGroup === 5 ? `${styles.hidePage}` : `${styles.pageNum}`
          }
          onClick={() => {
            setPage(endPage + 1);
          }}
        >
          ...
        </div>
      </div>
      <button
        onClick={() => handleClick("plus")}
        disabled={page === totalNumPages}
      >
        <LuArrowRightCircle size={35} />
      </button>
    </div>
  );
};

export default Pagination;
