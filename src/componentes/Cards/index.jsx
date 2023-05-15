import Card from "componentes/Card";
import styles from "./styles.module.scss";

export default function Cards({ fotos }) {
  return (
    <ul className={styles.cards}>
      {fotos.map((card) => (
        <Card
          key={card.id}
          titulo={card.titulo}
          imagem={card.imagem}
          creditos={card.creditos}
          tag={card.tag}
        />
      ))}
    </ul>
  );
}
