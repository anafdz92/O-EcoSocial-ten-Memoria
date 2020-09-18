import React from "react";

const Line = (props) => {
  const handleChange = (ev) => {
    console.log(ev.target.checked, ev.target);
    //Si es check busco en el array de eventos hasta encontrar uno cuyo id coincida con e key de el botón
  }; //Quizameter un dataset en el input

  const dotList = props.conflicts.map((item) => {
    console.log(item);
    return (
      <li key={item.id}>
        <div>
          <time>{item.year}</time>
          <p>{item.name}</p>
          <p>{item.location}</p>
          <button>Para saber máis</button>
        </div>
      </li>
    );
  });
  return (
    <div className="line">
      <ul className="dotList">{dotList}</ul>
    </div>
  );
};

export default Line;
