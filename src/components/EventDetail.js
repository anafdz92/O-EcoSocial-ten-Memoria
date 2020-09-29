import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const EventDetail = (props) => {
  console.log(props);

  const linksli = props.conflict.links.map((link, index) => {
    return (
      <li key={index}>
        <p>Enlaces de interés</p>
        <a href={link}>{link}</a>
      </li>
    );
  });
  return (
    <article className="modal">
      <div className="content">
        <Link to="/">
          <button className="close">Close</button>
        </Link>
        <img src={props.conflict.url} alt={props.conflict.name}></img>
        <div>
          <h2>{props.conflict.name}</h2>
          <ul className="modalList">
            <li>{props.conflict.year}</li>
            <li>{props.conflict.location}</li>
            <li>{props.conflict.what}</li>
            <ul>{linksli}</ul>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default withRouter(EventDetail);
