import styles from "./styles.module.scss";
import home from "assets/icones/inicio.svg";
import maisVistas from "assets/icones/mais-vistas.svg";
import maisCurtidas from "assets/icones/mais-curtidas.svg";
import novas from "assets/icones/novas.svg";
import surpreenda from "assets/icones/surpreenda.svg";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="" />
          <a href="/index.html">Home</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistas} alt="" />
          <a href="/index.html">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt="" />
          <a href="/index.html">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt="" />
          <a href="/index.html">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreenda} alt="" />
          <a href="/index.html">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
