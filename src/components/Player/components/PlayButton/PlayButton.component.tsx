import React from "react";

import { PlayIcon } from "@heroicons/react/20/solid";

import styles from "./PlayButton.module.css";

const PlayButton = ({ onClickHandler }) => (
  <button onClick={onClickHandler} className={styles.playButton}>
    <PlayIcon className={styles.playIcon} aria-hidden="true" />
  </button>
);

export default PlayButton;
