import React, { useState, useEffect, useReducer } from "react";
import FileUploader from "./FileUpLoader";
import Typewriter from "typewriter-effect";
import axios from "axios";

const Contacta = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileImg, setFileImg] = useState("");

  const onFileSelectSuccess = (data) => {
    setSelectedFile(data);
  };

  const uploadFile = (file) => {
    console.log("file");
    const formData = new FormData();

    formData.append("source", file);
    formData.append("key", "6d207e02198a847aa98d0a2a901485a5");

    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://freeimage.host/api/1/upload",
        formData
      )
      .then((res) => {
        setFileImg(res.data.image.url);
      })
      .catch((err) => alert("File Upload Error"));
  };

  return (
    <div className="mainContainer">
      <div className="formContainer">
        <h3 className="contactTitle">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Contacta").start();
            }}
          />
        </h3>

        <p>
          Podes colaborar co proxecto enviándonos documentación, recursos e
          información.
        </p>
        <p>Recomendacións, correccións e suxestións son sempre benvidas:</p>
        <div className="email">
          <i class="fas fa-envelope-open-text"></i>
          <p>memoriaecosocial@gmail.com</p>
        </div>

        <form
          action="https://formspree.io/f/mleodvon"
          method="post"
          className="contactForm"
          enctype="multipart/form-data"
        >
          <fieldset className="fieldset">
            <legend> Sobre ti </legend>
            <div className="formContent">
              <label for="firstName">Nome:</label>
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
              <label for="email">Email:</label>
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
              <label for="date">Data:</label>
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
              <label for="conflict">Conflicto:</label>
              <input
                className="inputs"
                type="text"
                name="conflict"
                id="conflict"
                placeholder="O Prestige"
                required
              />
            </div>
            <div className="formContent">
              <label for="place">Lugar:</label>
              <input
                className="inputs"
                type="text"
                name="place"
                id="place"
                placeholder="Costa de Fisterra"
                required
              />
            </div>
            <div className="shareContent">
              <label for="memoria"> Comparte:</label>
              <textarea
                className="share"
                type="text"
                name="memoria"
                id="memoria"
                placeholder="Adxunta información de interese"
                required
              />
            </div>
            <div className="formContent">
              <label for="files">Imaxes:</label>
              <FileUploader onFileSelectSuccess={(file) => uploadFile(file)} />
            </div>
            <input type="hidden" name="Intento" value={fileImg} />
          </fieldset>

          <button className="button">
            <i class="far fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contacta;
