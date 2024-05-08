"use client";

import { IEducation, getArtList } from "@/actions/getArtList";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./educationDetail.module.css";
import Image from "next/image";
import RoundLoading from "@/components/roundLoading/RoundLoading";

const EducationDetailPage = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  console.log(params);

  const [filterEduData, setFilterEduData] = useState<IEducation[]>([]);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await getArtList("ListEducationOfSeoulMOAInfo/1/500/");
      const eduData: IEducation[] = await response?.data
        .ListEducationOfSeoulMOAInfo.row;

      if (eduData.length > 0) {
        const filterData = eduData.filter((item) => {
          return item.ACADMY_NO === params?.educationId;
        });
        setFilterEduData(filterData);
        console.log(filterData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {filterEduData.length > 0 ? (
        <div className={styles.container}>
          <div className={styles.edu_detail_wrapper}>
            <Image
              src={filterEduData[0].EDU_IMG}
              alt={filterEduData[0].EDU_NAME}
              width={400}
              height={300}
            />

            <div className={styles.eduDetail}>
              <h1>{filterEduData[0].EDU_NAME}</h1>
              <p>강사 : {filterEduData[0].TCHER_NAME} 강사</p>
              <p>
                모집일 : {filterEduData[0].APP_OPEN} 부터{" "}
                {filterEduData[0].APP_CLOSE} 까지
              </p>
              <p>모집정원: {filterEduData[0].CAPA_NUM}명</p>
              <p>수강료: {filterEduData[0].ISFREE}</p>
              <p>교육 장소: {filterEduData[0].EDU_PLACE}</p>
            </div>

            <div className={styles.eduResBtn}>
              <button>신청하기</button>
            </div>
          </div>
        </div>
      ) : (
        <RoundLoading />
      )}
    </>
  );
};

export default EducationDetailPage;
