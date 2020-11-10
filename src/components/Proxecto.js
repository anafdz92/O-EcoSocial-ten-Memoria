import React from "react";
import { Link } from "react-router-dom";
import javiota from "./../images/javiota.jpg";
import Typewriter from "typewriter-effect";
import ScrollToTop from "react-scroll-to-top";

const Proxecto = (props) => {
  return (
    <div className="container">
      <div className="projectContainer">
        <div className="typewriter">
          <h3 className="projectTitle">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("O Proxecto").start();
              }}
            />
          </h3>
        </div>
        <div className="quote">
          <p>“Existe un mapa de aldeas esquecidas que morre todas as mañás”.</p>
          <p>Miguel Anxo Fernán Vello.</p>
        </div>
        <div className="imgCont">
          <img src={javiota} alt={"Xosé Suárez"} className="eventImg"></img>
          <div class="infoImgProject">
            <p>
              <a
                href={
                  "https://www.xlsemanal.com/conocer/arte/20180506/jose-suarez-el-fotografo-cosmopolita.html"
                }
                target="blank"
              >
                Click AQUÍ pra coñecer a Fonte da Imaxe
              </a>
            </p>
            <p className="infoDetail">
              <small>Autor: José Suarez </small>
              <small>Data:1936 </small>
            </p>
          </div>
        </div>
        <div className="text">
          <p>
            Este proxecto é unha táctica de resistencia fronte a desmemoria.
          </p>
          <p>
            Un arquivo vivo en torno o que reflectir arredor dos conflictos
            ecolóxicos e sociais que atravesan a nosa história contemporánea.
          </p>
          <p>Unha ollada o pasado para confrontar as loitas do presente.</p>
        </div>
      </div>
      <ScrollToTop
        smooth
        component={<i class="fas fa-arrow-up"></i>}
        style={{
          backgroundColor: "#129471",
          color: "#b13046",
          fontSize: "23px",
        }}

      />
    </div>
  );
};
export default Proxecto;
