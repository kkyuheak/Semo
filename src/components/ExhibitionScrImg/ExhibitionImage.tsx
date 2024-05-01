"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IExhibit, getArtList } from "@/actions/getArtList";
import Image from "next/image";
import styles from "./ExhibitImg.module.css";

import "swiper/css";
import { Autoplay, EffectCoverflow, Mousewheel } from "swiper/modules";

const ExhibitionImage = () => {
  const [result, setResult] = useState<IExhibit[]>([]);

  const getExhibit = async () => {
    const response = await getArtList(`ListExhibitionOfSeoulMOAInfo/1/20/`);
    const exhibit: IExhibit[] = response?.data.ListExhibitionOfSeoulMOAInfo.row;
    console.log(exhibit);
    setResult(exhibit);
  };

  useEffect(() => {
    getExhibit();
  }, []);

  return (
    <div className={styles.container}>
      <Swiper
        modules={[EffectCoverflow, Mousewheel, Autoplay]}
        autoplay={true}
        effect="coverflow"
        loop={true}
        grabCursor={true}
        slidesPerView={"auto"}
        mousewheel={{ enabled: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {result.map((item) => {
          return (
            <SwiperSlide key={item.DP_SEQ} className={styles.swiperImgWrapper}>
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
    </div>
  );
};

export default ExhibitionImage;
