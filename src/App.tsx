import { useState } from "react";
import "./App.css";
import Instalar from "./Telas/Instalar.jsx";
import Main from "./Telas/Main.js";

export type AlertaProps = {
  showAlerta: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setShowAlerta: Function;
};

export type InstalarProps = {
  opcaoInstalar: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setOpcaoInstalar: Function;
};

function App() {
  const [showInstalar, setShowInstalar] = useState(false);
  const [opcaoInstalar, setOpcaoInstalar] = useState("");

  return (
    <div className="App d-flex flex-column text-center align-items-center justify-content-center bg-main">
      <div
        className="col-12 col-sm-8 col-md-6 col-lg-4 p-2 d-flex flex-column justify-content-between py-3"
        style={{ minHeight: "100vh" }}
      >
        {/* Aba do botão "Instalar" */}
        <div className="text-end">
          <button
            className="rounded-5 p-2 text-white bg-button border-white"
            onClick={() => {
              setShowInstalar(!showInstalar);
              setOpcaoInstalar("");
            }}
          >
            {showInstalar ? "Voltar" : "Instalar"}
          </button>
        </div>

        {/* Div principal */}
        {showInstalar ? (
          <Instalar
            opcaoInstalar={opcaoInstalar}
            setOpcaoInstalar={setOpcaoInstalar}
          />
        ) : (
          <Main />
        )}

        {/* Rodape */}
        <div>
          <div className="text-white text-end fs-5 fst-italic">
            desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/irenaldo-j%C3%BAnior-da-silva/"
              className="text-decoration-none text-info fs-4"
            >
              Irenaldo Júnior
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
