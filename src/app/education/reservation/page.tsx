"use client";

import { IEducation, getArtList } from "@/actions/getArtList";
import { useUserStore } from "@/app/userStore";
import RoundLoading from "@/components/roundLoading/RoundLoading";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./reservation.module.css";
import Calender from "@/components/Calender/Calender";

const Reservation = () => {
  const { user } = useUserStore();

  const [eduData, setEduData] = useState<IEducation[]>([]);

  // searchParams 가져오기
  const searchParams = useSearchParams();
  const exhiNum = searchParams?.get("n");

  const getData = async () => {
    try {
      const response = await getArtList("ListEducationOfSeoulMOAInfo/1/500/");
      const eduData: IEducation[] = await response?.data
        .ListEducationOfSeoulMOAInfo.row;

      if (eduData.length > 0) {
        const filterData: IEducation[] = eduData.filter((item) => {
          return item.ACADMY_NO === exhiNum;
        });
        setEduData(filterData);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {eduData.length > 0 ? (
        <div className={styles.container}>
          <p className={styles.edu_Title}>{eduData[0].EDU_NAME}</p>
          <div className={styles.main}>
            <div className={styles.main_left}>
              <Image
                src={eduData[0].EDU_IMG}
                alt={eduData[0].EDU_NAME}
                width={600}
                height={400}
              />
              <p>예약 마감 : {eduData[0].APP_CLOSE}까지</p>
              <p>예약현황 : 0명</p>
              <p>교육장소 : {eduData[0].EDU_PLACE}</p>
            </div>
            <div className={styles.main_right}>
              <p>{user.nickname}님 예약 날짜를 선택해주세요!</p>
              <div className={styles.cal}>
                <Calender />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <RoundLoading />
      )}
    </>
  );
};

export default Reservation;
