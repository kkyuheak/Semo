"use client";

import { ICollection } from "@/actions/getArtList";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./collectionDt.module.css";
import NoData from "@/components/NoData/NoData";

const CollectionDtPage = () => {
  // 제작자 이름 가져오기
  const searchParams = useSearchParams();
  const wri_Nm = searchParams?.get("n");

  const [data, setData] = useState<ICollection>();

  useEffect(() => {
    const localData = localStorage.getItem("item")!;
    console.log(JSON.parse(localData));
    const item = JSON.parse(localData);
    setData(item);
  }, []);

  return (
    <div className={styles.container}>
      {data?.writr_nm === wri_Nm ? (
        <div className={styles.detailWrapper}>
          <Image
            src={data?.main_image!}
            alt={data?.prdct_nm_korean!}
            width={900}
            height={600}
          />
          <div className={styles.detail}>
            <h1>{data?.prdct_nm_korean}</h1>
            <p>
              <span>작가 :</span> {data?.writr_nm}
            </p>
            <p>
              <span>부문 :</span> {data?.prdct_cl_nm}
            </p>
            <p>
              <span>기법 :</span> {data?.matrl_technic}
            </p>
            <p>
              <span>제작년도 :</span> {data?.mnfct_year}년
            </p>
            <p>
              <span>수집연도 :</span> {data?.manage_no_year}년
            </p>
          </div>
        </div>
      ) : (
        <div>
          <NoData reset={true} />
        </div>
      )}
    </div>
  );
};

export default CollectionDtPage;
