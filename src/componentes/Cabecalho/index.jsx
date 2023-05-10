import logo from "./logo.svg";
import search from "./search.svg";
import styles from "./styles.module.scss";
export default function Cabecalho() {
  return (
    <div className={styles.cabecalho}>
      <img src={logo} alt="" className={styles.cabecalho__image} />
      <div className={styles.cabecalho__container}>
        <input type="text" className={styles.cabecalho__input} id="search" />
        <label htmlFor="search">
          <img src={search} alt="" />
        </label>
      </div>
    </div>
  );
}
