"use client";

import { IEducation, getArtList } from "@/actions/getArtList";
import { useUserStore } from "@/app/userStore";
import RoundLoading from "@/components/roundLoading/RoundLoading";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./reservation.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import axios from "axios";

type DatePiece = Date | null;
type SelectedDate = DatePiece | [DatePiece, DatePiece];

const Reservation = () => {
  const { user } = useUserStore();

  const [eduData, setEduData] = useState<IEducation[]>([]);

  const [date, setDate] = useState<SelectedDate>();

  // const [isReserve, setIsReserve] = useState<boolean>(false);

  console.log(date);

  // searchParams 가져오기
  const searchParams = useSearchParams();
  const exhiNum = searchParams?.get("n");

  // 사용자 예약했나 안했나 정보가져오기

  const isReserve = user?.eduReserve?.includes(Number(exhiNum));
  console.log(isReserve);

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

  const handleClick = async () => {
    try {
      const response = await axios.post("/api/reserve", {
        eduId: Number(exhiNum),
        reserveDate: dayjs(date?.toString()).format("YYYY년 MM월 DD일"),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {eduData.length > 0 && user.eduReserve ? (
        <div className={styles.container}>
          {!isReserve ? (
            <>
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
                  <p className={styles.main_right_title}>
                    {user.nickname}님 예약 날짜를 선택해주세요!
                  </p>
                  <div className={styles.cal}>
                    <Calendar
                      className={styles.calendar}
                      calendarType="gregory"
                      minDate={new Date(eduData[0].APP_OPEN)}
                      maxDate={new Date(eduData[0].APP_CLOSE)}
                      prev2Label={null}
                      next2Label={null}
                      onChange={setDate}
                      value={date}
                    />
                  </div>
                  <div className={styles.checkDate}>
                    <p>{user.nickname}님 예약하신 날짜를 확인해주세요</p>
                    <p>{dayjs(date?.toString()).format("YYYY년 MM월 DD일")}</p>
                  </div>

                  <div className={styles.reserveBtn}>
                    <button onClick={handleClick}>예약 확정</button>
                  </div>
                </div>
              </div>{" "}
            </>
          ) : (
            <div className={styles.res_true}>
              <p>이미 예약된 교육입니다 !</p>
              <p className={styles.res_true_link}>예약 내역 확인하러 가기</p>
            </div>
          )}
        </div>
      ) : (
        <RoundLoading />
      )}
    </>
  );
};

export default Reservation;
