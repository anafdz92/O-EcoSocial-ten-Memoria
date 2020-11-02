import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Typewriter from "typewriter-effect";

const EventDetail = (props) => {
  console.log(props);

  const linksli = props.conflict.links.map((link, index) => {
    return (
      <li key={index}>
        <a href={link} target="blank">
          {link}
        </a>
      </li>
    );
  });
  return (
    <article className="modal">
      <div className="content">
        <Link to="/">
          <button className="close">
            <i class="fas fa-times"></i>
          </button>
        </Link>

        <div className="info">
          <div className="titleContainer">
            <h2>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(props.conflict.name).start();
                }}
              />
            </h2>
          </div>
          <div className="imgContainer">
            <img
              src={props.conflict.url}
              alt={props.conflict.name}
              className="eventImg"
            ></img>
            <div class="infoImg">
              <p>
                <a href={props.conflict.imgFont} target="blank">
                  Click AQUÍ pra coñecer a Fonte da Imaxe
                </a>
              </p>
              <p>
                <small>Data de publicación: {props.conflict.date}</small>
              </p>
            </div>
          </div>
          <ul className="modalList">
            <li>
              <p className="quoteTitle">Ano: </p>
              <p> {props.conflict.year}</p>
            </li>
            <li>
              <p className="quoteTitle">Lugar: </p>
              <p> {props.conflict.location}</p>
            </li>
            <li className="what">
              <p> {props.conflict.p1}</p>
              <p> {props.conflict.p2}</p>
              <p> {props.conflict.p3}</p>
            </li>
            <ul className="links">
              <p className="quoteTitle">Enlaces: </p>
              <p> {linksli}</p>
            </ul>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default withRouter(EventDetail);
