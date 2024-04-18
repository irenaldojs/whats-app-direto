import Modal from "react-modal";
import { AlertaProps } from "../App";
import Alerta from "./Alerta";

export function ModalAlerta({ showAlerta, setShowAlerta }: AlertaProps) {
  const estiloModal = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      borderRadius: "10px",
      padding: "0px",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <Modal
      isOpen={showAlerta}
      onRequestClose={() => setShowAlerta(false)}
      style={estiloModal}
      ariaHideApp={false}
    >
      <Alerta showAlerta={showAlerta} setShowAlerta={setShowAlerta} />
    </Modal>
  );
}

export default ModalAlerta;
