import styles from "./styles.module.scss";
import ApiFotos from "../Galeria/fotos.json";

export default function Tags({ tags, onFiltraGaleria, setFotos }) {
  function handleClickFiltraGaleria(tag) {
    onFiltraGaleria(tag);
  }
  return (
    <div className={styles.galeria__tags__container}>
      <span>Busque por tags:</span>
      <ul className={styles.tags__list}>
        {tags.map((tag) => (
          <li
            onClick={(e) => handleClickFiltraGaleria(e.target.textContent)}
            key={tag}
            className={styles.tags__item}
          >
            {tag}
          </li>
        ))}
        <li onClick={() => setFotos(ApiFotos)} className={styles.tags__item}>
          Todas
        </li>
      </ul>
    </div>
  );
}
