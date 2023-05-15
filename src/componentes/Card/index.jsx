import styles from "./styles.module.scss";

export default function Card({ id, titulo, imagem, creditos, tag }) {
  return (
    <div className={styles.card}>
      <img className={styles.card__imagem} src={imagem} alt={titulo} />
      <div className={styles.card__description}>
        <span className={styles.card__title}>{titulo}</span>
        <span className={styles.card__creditos}>{creditos}</span>
      </div>
    </div>
  );
}
