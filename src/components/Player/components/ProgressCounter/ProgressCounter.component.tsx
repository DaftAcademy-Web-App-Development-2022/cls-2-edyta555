import React from "react";

import styles from "./ProgressCounter.module.css";

interface Props {
  currentTime: number;
  duration: number;
}

const ProgressCounter = ({ currentTime, duration }: Props) => {
  const calculateTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds - minutes * 60;

    return (
      <span>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    );
  };

  return (
    <div className={styles.progressCounter}>
      {calculateTime(currentTime)} / {calculateTime(duration)}
    </div>
  );
};

export default ProgressCounter;
