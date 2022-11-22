import React from "react";

import { PauseIcon } from "@heroicons/react/20/solid";

import styles from "./PauseButton.module.css";

interface Props {
  onClickHandler: () => void;
}

const PauseButton = ({ onClickHandler }: Props) => (
  <button className={styles.pauseButton} onClick={onClickHandler}>
    <PauseIcon className={styles.pauseIcon} aria-hidden="true" />
  </button>
);

export default PauseButton;
