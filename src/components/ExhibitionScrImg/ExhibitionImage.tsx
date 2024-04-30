"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IExhibit, getArtList } from "@/actions/getArtList";
import Image from "next/image";
import styles from "./ExhibitImg.module.css";

import "swiper/css";
import { EffectCoverflow } from "swiper/modules";

const ExhibitionImage = () => {
  // const a = [1, 2, 3, 4, 5];
  const [result, setResult] = useState<IExhibit[]>([]);

  const getExhibit = async () => {
    const response = await getArtList(`ListExhibitionOfSeoulMOAInfo/1/5/`);
    console.log(response);
    const exhibit: IExhibit[] = response?.data.ListExhibitionOfSeoulMOAInfo.row;
    console.log(exhibit);
    setResult(exhibit);
  };

  useEffect(() => {
    getExhibit();
  }, []);

  return (
    <div className={styles.container}>
      <Swiper modules={[EffectCoverflow]} effect="coverflow" loop={true}>
        {result.map((item) => {
          return (
            <SwiperSlide key={item.DP_SEQ}>
              <Image
                src={item.DP_MAIN_IMG}
                alt={item.DP_NAME}
                width={400}
                height={300}
                className={styles.exhibitMainImg}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* {a.map((item, i) => {
        return <div key={i}>{item}</div>;
      })} */}
    </div>
  );
};

export default ExhibitionImage;
