import React from "react";

import styles from "./ProgressBar.module.css";

const ProgressBar = ({ recoveryProgress }) => {
  console.log("recoveryProgress", recoveryProgress);
  return (
    <div className={styles.containerWithProgressBar}>
      <div
        className={styles.progressBar}
        style={{ width: `${recoveryProgress * 100}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
