import { ICollection } from "@/actions/getArtList";
import React from "react";
import styles from "./collectionBox.module.css";
import Image from "next/image";

const CollectionBox = ({ data }: { data: ICollection }) => {
  return (
    <div className={styles.container}>
      <Image
        src={data.thumb_image}
        alt={data.prdct_nm_korean}
        width={140}
        height={140}
      />
      <p className={styles.cBoxTitle}>{data.prdct_nm_korean}</p>
      <p className={styles.cBoxName}>{data.writr_nm}</p>
      <p className={styles.cBoxYear}>{data.mnfct_year}년 제작</p>
    </div>
  );
};

export default CollectionBox;
