import React from "react";

const Line = (props) => {
  const handleChange = (ev) => {
    console.log(ev.target.checked, ev.target);
    //Si es check busco en el array de eventos hasta encontrar uno cuyo id coincida con e key de el botón
  }; //Quizameter un dataset en el input

  const dotList = props.conflicts.map((item) => {
    return (
      <input
        type="radio"
        key={item.id}
        name={props.conflicts.year}
        onChange={handleChange}
      >
        {props.conflicts.year}
      </input>
    );
  });
  return <form className="line">{dotList}</form>;
};

export default Line;
