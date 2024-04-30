import React from "react";
import styles from "./exhibit.module.css";
import ExhibitionImage from "@/components/ExhibitionScrImg/ExhibitionImage";

const Exhibitions = () => {
  return (
    <div className={styles.container}>
      <ExhibitionImage />
    </div>
  );
};

export default Exhibitions;
