import React from "react";

const FilterContent = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "place",
    });
  };
  return (
    <>
      <form className="form" onSubmit={e => { e.preventDefault(); }}>
        <label htmlfor="place" className="filter">
          FILTRAR POR LUGAR
        </label>
        <input
          type="text"
          id="place"
          name="place"
          placeholder={"Busca aquí"}
          onChange={handleChange}
          value= {props.value}
        />
      </form>
    </>
  );
};

export default FilterContent;
