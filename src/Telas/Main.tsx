import { ChangeEvent, useState } from "react";
import { Mascara } from "../Componentes/Mascara";
import ModalAlerta from "../Componentes/ModalAlerta";

function Main() {
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [showAlerta, setShowAlerta] = useState(false);

  const handleButtonClick = () => {
    // Use um regex para remover tudo que não é número
    const cleanedNumber = telefone.replace(/\D/g, "");

    // Verifique se o número de telefone está vazio
    if (cleanedNumber.length < 11) {
      setShowAlerta(true);
      return;
    }

    const boolMensagem = mensagem.length === 0 ? "" : "&text=" + mensagem;
    //https://api.whatsapp.com/send/?phone=5524999798280&text&type=phone_number&app_absent=0

    // Redirecionar para o WhatsApp
    window.location.href = `https://api.whatsapp.com/send/?phone=55${
      cleanedNumber + boolMensagem
    }&type=phone_number&app_absent=0`;
  };

  return (
    <body className="bg-transparent">
      <div className="App-header text-white mb-5">
        <h1 className="mb-2">
          WhatsApp Direto{" "}
          <img src="/logo192.png" height={"80em"} width={"80em"} alt="Icone" />
        </h1>

        <div className="mb-2 fs-4 fst-italic">
          Digite um número de whatsapp que deseja iniciar uma conversa.
        </div>
      </div>
      <div className="bg-transparent">
        <div className="p-1">
          <section>
            <Mascara
              value={telefone}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setTelefone(event.target.value);
                setShowAlerta(false);
              }}
              className="fs-5 border-0 rounded-3 py-1 ps-3 w-100 ls-1"
              placeholder="Contato"
            />
          </section>
          <ModalAlerta
            showAlerta={showAlerta}
            setShowAlerta={() => setShowAlerta(!showAlerta)}
          />
          <br />
          <section>
            <textarea
              className="fs-6 w-100 border-0 rounded-3 p-2"
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
              placeholder="Mensagem ( Opcional )"
              style={{ minHeight: "5rem" }}
            ></textarea>
          </section>
          <br />
          <button
            onClick={handleButtonClick}
            className="fs-5 px-3 py-2 rounded-5 text-white bg-button border-white"
          >
            Iniciar conversa
          </button>
        </div>
        <br />
      </div>
    </body>
  );
}

export default Main;
