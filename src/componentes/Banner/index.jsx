import React from "react";
import styles from "./styles.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h2 className={styles.banner__description}>
        A galeria mais completa de fotos do espaço!
      </h2>
    </div>
  );
}
