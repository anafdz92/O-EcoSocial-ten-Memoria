import React from "react";

const Filter = (props) => {
  const handleChange = (ev) => {
    props.handleFilter(ev.target.value);
  };

  //   const submitHandler = (ev) => {
  //     ev.preventDefault();
  //   };

  return (
    <>
      <form className="form">
        <label htmlfor="date" className="filter">
          FILTRAR POR DATA
        </label>
        <input
          type="text"
          id="date"
          name="date"
          placeholder={"Busca aquí"}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Filter;
