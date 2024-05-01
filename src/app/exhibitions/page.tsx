import React from "react";
import styles from "./exhibit.module.css";
import ExhibitionImage from "@/components/ExhibitionScrImg/ExhibitionImage";
import Education from "@/components/Education/Education";

const Exhibitions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main_title}>
        <p>전시와 교육</p>
      </div>
      <ExhibitionImage />

      <Education />
    </div>
  );
};

export default Exhibitions;
