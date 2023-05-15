import React, { useState } from "react";
import styles from "./styles.module.scss";
import Tags from "componentes/Tags";
import Cards from "componentes/Cards";
import ApiFotos from "./fotos.json";

const tags = [...new Set(ApiFotos.map((item) => item.tag))];

export default function Galeria() {
  const [fotos, setFotos] = useState(ApiFotos);

  function filtraGaleria(tag) {
    const fotosFiltradas = ApiFotos.filter((fotos) => fotos.tag === tag);
    setFotos(fotosFiltradas);
  }
  return (
    <div className={styles.galeria}>
      <h2 className={styles.galeria__title}>Navegue pela galeria</h2>
      <Tags tags={tags} onFiltraGaleria={filtraGaleria} setFotos={setFotos} />
      <Cards fotos={fotos} />
    </div>
  );
}
