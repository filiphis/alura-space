import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import styles from "./PaginaInicial.module.scss";
import Banner from "componentes/Banner";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <div className={styles.menu_baner_container}>
        <Menu />
        <Banner />
      </div>
    </>
  );
}
