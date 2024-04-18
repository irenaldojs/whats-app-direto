import Alert from "react-bootstrap/Alert";
import { AlertaProps } from "../App";

function Alerta({ showAlerta, setShowAlerta }: AlertaProps) {
  return (
    <Alert
      variant="danger"
      onClose={() => {
        setShowAlerta(!showAlerta);
      }}
      dismissible
      className="mx-2 my-0"
    >
      <Alert.Heading className="d-flex justify-content-between">
        Número inválido!{" "}
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setShowAlerta(false)}
        ></button>
      </Alert.Heading>
      <p>Verifique se o número de telefone está completo.</p>
    </Alert>
  );
}

export default Alerta;
