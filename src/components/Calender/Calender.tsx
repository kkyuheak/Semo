import dayjs from "dayjs";
import React from "react";
import styles from "./calender.module.css";

const Calender = () => {
  let dateNum = [];

  const allDate = dayjs().format("YYYY-MM-DD");

  const day: string[] = ["일", "월", "화", "수", "목", "금", "토"];

  const nowYear: number = dayjs().year();
  const nowDate: number = dayjs().date();
  const nowMonth: number = dayjs().month() + 1;

  const firstDate = 1;
  const lastDate = dayjs(allDate).daysInMonth();

  console.log(allDate, nowYear, nowMonth, nowDate, lastDate);

  for (let i = firstDate; i <= lastDate; i++) {
    dateNum.push(i);
  }

  console.log(dateNum);
  return (
    <div className={styles.cal_container}>
      <div className={styles.weekDay}>
        {day.map((week, i) => {
          return (
            <div key={i} className={styles.week}>
              {week}
            </div>
          );
        })}
      </div>
      <ul className={styles.dateNum}>
        {dateNum.map((num, i) => {
          return (
            <li key={i} className={styles.date}>
              {num}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Calender;
