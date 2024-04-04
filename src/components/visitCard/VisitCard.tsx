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

  return (
    <div className={`${styles.box} ${styles[boxNumber]}`}>
      <div className={styles.boxImage}>
        <Image src={imageSrc} alt="title" width={320} height={400} />
      </div>
      <div className={styles.boxTitle}>{title}</div>
    </div>
  );
}
