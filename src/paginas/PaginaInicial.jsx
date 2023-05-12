import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import styles from "./PaginaInicial.module.scss";
import Banner from "componentes/Banner";
import Galeria from "componentes/Galeria";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <div className={styles.menu_banner_container}>
        <Menu />
        <Banner />
      </div>
      <section className={styles.galeria_populares_section}>
        <Galeria />
      </section>
    </>
  );
}
