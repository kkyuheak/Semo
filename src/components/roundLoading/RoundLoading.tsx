import React from "react";
import styles from "./roundLoad.module.css";

const RoundLoading = () => {
  return (
    <div className={styles.round_loading}>
      <div className={styles.circle}></div>
    </div>
  );
};

export default RoundLoading;
