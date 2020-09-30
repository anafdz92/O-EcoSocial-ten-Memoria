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
        <form action="" method="post" className="form">
          <fieldset className="fieldset">
            <legend> Sobre ti </legend>
            <div className="formContent">
              <label for="firstName">Nome</label>
              <input
                className="inputs"
                type="text"
                name="name"
                id="firstName"
                placeholder="Ana Baneira"
                required
              />
            </div>
            <div>
              <label for="email">Email</label>
              <input
                className="inputs"
                type="email"
                name="email"
                id="email"
                placeholder="anabaneira@gmail.com"
                required
              />
            </div>
          </fieldset>
          <fieldset className="fieldset">
            <legend>Axúdanos a construir Memoria</legend>
            <div className="formContent">
              <label for="date">Data</label>
              <input
                className="inputs"
                type="date"
                id="date"
                name="date"
                value="2018-07-22"
                min="1850-01-01"
                max="2020-12-31"
              />
            </div>
            <div>
              <label for="conflict">Conflicto</label>
              <input
                className="inputs"
                type="text"
                name="conflict"
                id="conflict"
                placeholder="Desastre do Prestige"
                required
              />
            </div>
            <div className="formContent">
              <label for="place">Lugar</label>
              <input
                className="inputs"
                type="text"
                name="place"
                id="place"
                placeholder="Costa de Fisterra"
                required
              />
            </div>
            <div>
              <label for="memoria">Comparte</label>
              <input
                className="inputs"
                type="text"
                name="memoria"
                id="memoria"
                placeholder="Adunta información de interese"
                required
              />
            </div>
            <div className="formContent">
              <label for="files">Documentos</label>
              <input type="file" name="files" id="files" />
            </div>
          </fieldset>
          <input type="submit" value="Enviar info" className="button" />
        </form>
      </div>
    </div>
  );
};
export default Contacta;
