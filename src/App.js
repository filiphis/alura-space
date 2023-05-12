import PaginaInicial from "paginas/PaginaInicial";
import estilosGlobais from "styles/estilosGlobais.scss";

function App() {
  return (
    <div className={`container ${estilosGlobais}`}>
      <PaginaInicial />
    </div>
  );
}

export default App;
