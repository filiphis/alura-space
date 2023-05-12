import React from "react";
import styles from "./styles.module.scss";

export default function Galeria() {
  return (
    <div className={styles.galeria}>
      <h2 className={styles.galeria__title}>Navegue pela galeria</h2>
      <div className={styles.galeria__tags__container}>
        <span>Busque por tags:</span>
        <ul className={styles.tags__list}>
          <li className={styles.tags__item}>Es</li>
          <li className={styles.tags__item}>Est</li>
          <li className={styles.tags__item}>Est</li>
          <li className={styles.tags__item}>Estre</li>
        </ul>
      </div>
    </div>
  );
}
