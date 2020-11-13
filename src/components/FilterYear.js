import React from "react";

const FilterYear = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "number",
    });
  };

 

  return (
    <>
      <form className="form">
        <label htmlfor="date" className="filter">
          FILTRAR POR ANO
        </label>
        <input
          type="text"
          id="date"
          name="date"
          placeholder={"Busca aquí"}
          onChange={handleChange}
          value= {props.value}
        />
      </form>
    </>
  );
};

export default FilterYear;
