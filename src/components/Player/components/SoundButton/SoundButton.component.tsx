import React from "react";

import { SpeakerWaveIcon } from "@heroicons/react/20/solid";

import styles from "./SoundButton.module.css";

const SoundButton = () => (
  <button className={styles.soundButton}>
    <SpeakerWaveIcon className={styles.soundIcon} aria-hidden="true" />
  </button>
);

export default SoundButton;
