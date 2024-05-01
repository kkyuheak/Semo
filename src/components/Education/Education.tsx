import React from "react";
import styles from "./education.module.css";
import { IEducation, getArtList } from "@/actions/getArtList";
import dayjs from "dayjs";
import Image from "next/image";

const Education = async () => {
  const getEdu = await getArtList(`ListEducationOfSeoulMOAInfo/1/1000/`);

  // console.log("gerEdu : ", getEdu?.data.ListEducationOfSeoulMOAInfo.row);

  const EduData: IEducation[] = getEdu?.data.ListEducationOfSeoulMOAInfo.row;

  // 페이지 데이터 필터
  const filterEduPage = EduData.slice(0, 8);

  // 현재날짜
  const nowDate: string = dayjs().format("YYYY-MM-DD");

  // 모집날짜 필터링
  const filterEduDate: IEducation[] = EduData.filter((item: IEducation) => {
    return item.APP_CLOSE !== "" && item.APP_CLOSE >= nowDate;
  });
  console.log(filterEduDate.length);

  return (
    <div className={styles.container}>
      <p className={styles.edu_title}>교육프로그램</p>
      <div className={styles.edu_img}>
        {filterEduPage.map((edu) => {
          return (
            <div key={edu.ACADMY_NO}>
              <Image
                src={edu.EDU_IMG}
                alt={edu.EDU_NAME}
                width={300}
                height={250}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
