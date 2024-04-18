function Chrome() {
  const helpEstilo = "border rounded bg-light text-dark p-1 fw-bold";
  const imgEstilo = "w-75 mb-2 border border-secondary";
  return (
    <div className="fs-4 fst-italic my-5">
      <br />
      <div className={helpEstilo}>
        <img src="./chrome1.jpeg" alt="Chrome 1" className={imgEstilo} />
        <p>1. Clique no ícone de três pontos no canto superior direito</p>
      </div>
      <br />
      <div className={helpEstilo}>
        <img src="./chrome2.jpeg" alt="Chrome 2" className={imgEstilo} />
        <p>2. Clique em "Instalar aplicativo".</p>
      </div>
      <br />
      <div className={helpEstilo}>
        <p>
          Obs: Aguarde um instante até que o app seja instalado e depois confira
          na sua bandeja de apps.
        </p>
      </div>
    </div>
  );
}

export default Chrome;
