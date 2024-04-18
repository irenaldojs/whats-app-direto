function Safari() {
  const helpEstilo = "border rounded bg-light text-dark p-1 fw-bold";
  const imgEstilo = "w-75 mb-2 border border-secondary";
  return (
    <div className="fs-4 fst-italic my-5">
      <div className={helpEstilo}>
        <img src="./safari1.jpeg" alt="Safari 1" className={imgEstilo} />
        <p>1. Clique no ícone do menú compartilhar no centro inferior;</p>
      </div>
      <br />
      <div className={helpEstilo}>
        <img src="./safari2.jpeg" alt="Safari 2" className={imgEstilo} />
        <p>2. Clique em "Adicionar à Tela de Inicio";</p>
      </div>
      <br />
      <div className={helpEstilo}>
        <img src="./safari3.jpeg" alt="Safari 3" className={imgEstilo} />
        <p>3. Por último clique em "Concluído".</p>
      </div>
    </div>
  );
}

export default Safari;
