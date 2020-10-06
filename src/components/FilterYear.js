import React from "react";

const FilterYear = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "number",
    });
  };

  //   const submitHandler = (ev) => {
  //     ev.preventDefault();
  //   };

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
        />
      </form>
    </>
  );
};

export default FilterYear;
