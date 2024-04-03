"use client";

import Image from "next/image";
import styles from "./visitCard.module.css";
import { useEffect, useState } from "react";

interface IVisitCardProps {
  description: string;
  title: string;
  imageSrc: string;
  number: number;
}

export default function VisitCard({
  description,
  title,
  imageSrc,
  number,
}: IVisitCardProps) {
  const boxNumber = `boxNumber${number}`;
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 950) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    });
  }, []);

  return (
    <div
      className={
        scrollUp
          ? `${styles.box} ${styles[boxNumber]}`
          : `${styles.box} ${styles[boxNumber]} ${styles.showUp}`
      }
    >
      <div className={styles.boxImage}>
        <Image src={imageSrc} alt="title" width={320} height={400} />
      </div>
      <div className={styles.boxTitle}>{title}</div>
    </div>
  );
}
