import React from "react";

const Event = (props) => {
  console.log(props.img);
  const linksli = props.links.map((link, index) => {
    return (
      <li key={index}>
        <a href={link}>Enlaces</a>
      </li>
    );
  });
  return (
    <article>
      <img src={props.img} alt={props.name}></img>
      <div>
        <h2>{props.name}</h2>
        <ul>
          <li>{props.year}</li>
          <li>{props.location}</li>
          <li>{props.what}</li>
          <ul>{linksli}</ul>
        </ul>
      </div>
    </article>
  );
};

export default Event;
