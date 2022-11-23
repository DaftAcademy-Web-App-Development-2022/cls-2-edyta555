import React from "react";

import PlayButton from "./components/PlayButton/PlayButton.component";
import PauseButton from "./components/PauseButton/PauseButton.component";

import usePlayer from "~/hooks/usePlayer.hook";
import trackData from "~/data/trackData.json";

import styles from "./Player.module.css";
import ProgressBar from "./components/ProgressBar/ProgressBar.component";
import SoundButton from "./components/SoundButton/SoundButton.component";

const Player = () => {
  const { state, actions } = usePlayer();

  const pausePlayer = () => {
    actions.pause();
  };

  const goPlayer = () => {
    actions.play({
      id: trackData.id,
      name: trackData.name,
      src: trackData.preview_url,
      artists: trackData.artists.map((artist) => artist.name),
    });
  };
  return (
    <div className={styles.root}>
      <div className={styles.player}>
        {state.playing ? (
          <PauseButton onClickHandler={pausePlayer} />
        ) : (
          <PlayButton onClickHandler={goPlayer} />
        )}
        <div className={styles.progressBarWithDetails}>
          <p className={styles.trackName}>{state.meta?.name}</p>
          <ProgressBar recoveryProgress={state.progress} />
          <p className={styles.trackArtists}>{state.meta?.artists}</p>
        </div>
        <SoundButton />
      </div>
    </div>
  );
};

export default Player;
