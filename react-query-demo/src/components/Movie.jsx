/**
 * @author Charles
 * @file 영화 리스트 내 아이템 컴포넌트 Movie 작성 file
 */

import React from "react";
import styles from "./Movie.module.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average }) {
  return (
    <div className={styles.container}>
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <div className={styles.info}>
        <span>{title}</span>
        <span>{vote_average}</span>
      </div>
    </div>
  );
}
