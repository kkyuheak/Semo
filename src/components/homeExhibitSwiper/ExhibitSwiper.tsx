"use client";

import { IExhibit } from "@/actions/getArtList";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./exhibitSwiper.module.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface IExhibitSwiperProps {
  exhibit: IExhibit[];
}

export default function ExhibitSwiper({ exhibit }: IExhibitSwiperProps) {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={2}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={true}
      >
        {exhibit.map((item) => {
          return (
            <SwiperSlide key={item.DP_SEQ}>
              <div className={styles.exhibitWrapper}>
                <div className={styles.exhibitName}>{item.DP_NAME}</div>
                <div className={styles.exhibitImg}>
                  <Image
                    src={item.DP_MAIN_IMG}
                    alt="이미지"
                    width={400}
                    height={400}
                  />
                </div>
                <p className={styles.exhibitPlace}>{item.DP_PLACE}</p>

                <p className={styles.exhibitDate}>
                  기간 : {item.DP_START} ~ {item.DP_END}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
