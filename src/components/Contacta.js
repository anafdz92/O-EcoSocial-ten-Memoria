import React from "react";

const Contacta = (props) => {
  return (
    <div className="mainContainer">
      <div className="formContainer">
        <h3>Contacta</h3>
        <p>
          Podes colaborar co proxecto enviándonos documentación, recursos e
          información sobre conflictos ecosociais que consideres relevantes para
          a nosa liña de tempo. Recomendacións, correccións e suxestións son
          sempre benvidas.
        </p>
        <form action="" method="post">
          <fieldset>
            <legend> Sobre ti </legend>
            <label for="firstName">Nome</label>
            <input
              type="text"
              name="name"
              id="firstName"
              placeholder="Ana Baneira"
              required
            />
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="anabaneira@gmail.com"
              required
            />
          </fieldset>
          <fieldset>
            <legend>Axúdanos a construir Memoria</legend>
            <label for="date">Data</label>
            <input
              type="date"
              id="date"
              name="date"
              value="2018-07-22"
              min="1850-01-01"
              max="2020-12-31"
            />
            <label for="conflict">Nome do conflicto</label>
            <input
              type="text"
              name="conflict"
              id="conflict"
              placeholder="Desastre do Prestige"
              required
            />

            <label for="place">Lugar</label>
            <input
              type="text"
              name="place"
              id="place"
              placeholder="Costa de Fisterra"
              required
            />

            <label for="memoria">Información de interese</label>
            <input
              type="text"
              name="memoria"
              id="memoria"
              placeholder="Adunta información de interese"
              required
            />
            <label for="files">Adxunta documentación</label>
            <input type="file" name="files" id="files" />
          </fieldset>
          <input type="submit" value="Enviar info" />
        </form>
      </div>
    </div>
  );
};
export default Contacta;
