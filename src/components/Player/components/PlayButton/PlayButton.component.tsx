import React from "react";

import { PlayIcon } from "@heroicons/react/20/solid";

import styles from "./PlayButton.module.css";

interface Props {
  onClickHandler: ()=> void;
}

const PlayButton = ({ onClickHandler }: Props) => (
  <button onClick={onClickHandler} className={styles.playButton}>
    <PlayIcon className={styles.playIcon} aria-hidden="true" />
  </button>
);

export default PlayButton;
