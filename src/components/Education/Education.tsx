"use client";

import React, { useEffect, useState } from "react";
import styles from "./education.module.css";
import { IEducation, getArtList } from "@/actions/getArtList";
import dayjs from "dayjs";
import Image from "next/image";

const Education = () => {
  const [eduData, setEduData] = useState<IEducation[]>([]);

  // 마우스 호버시 정보 보여주기 => boolean으로 설정할 경우 map메소드 안에 있는 모든 이미지의 정보가 다 표시됨
  // 따라서 index 값을 설정해서 해당 인덱스랑 map메소드에 맞는 인덱스를 비교
  const [showIndex, setShowIndex] = useState<number | null>(null);

  const getEdu = async () => {
    try {
      const response = await getArtList(`ListEducationOfSeoulMOAInfo/1/1000/`);
      setEduData(response?.data.ListEducationOfSeoulMOAInfo.row);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEdu();
  }, []);

  // 페이지 데이터 필터
  const filterEduPage = eduData.slice(0, 8);

  // 현재날짜
  const nowDate: string = dayjs().format("YYYY-MM-DD");

  // 모집날짜 필터링
  const filterEduDate: IEducation[] = eduData.filter((item: IEducation) => {
    return item.APP_CLOSE !== "" && item.APP_CLOSE >= nowDate;
  });
  console.log(filterEduDate.length);

  return (
    <div className={styles.container}>
      <p className={styles.edu_title}>교육프로그램</p>
      <div className={styles.edu_imgWrapper}>
        {filterEduPage.map((edu, i) => {
          return (
            <div
              key={edu.ACADMY_NO}
              className={styles.edu_img}
              onMouseOver={() => {
                setShowIndex(i);
              }}
              onMouseLeave={() => {
                setShowIndex(null);
              }}
            >
              <Image
                src={edu.EDU_IMG}
                alt={edu.EDU_NAME}
                width={400}
                height={350}
              />
              <div
                className={
                  showIndex === i
                    ? `${styles.edu_info} ${styles.edu_info_show}`
                    : `${styles.edu_info}`
                }
              >
                <p className={styles.edu_info_name}>{edu.EDU_NAME}</p>
                <p>강사명 : {edu.TCHER_NAME}</p>
                <p>모집마감 : {edu.APP_CLOSE} 까지</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
