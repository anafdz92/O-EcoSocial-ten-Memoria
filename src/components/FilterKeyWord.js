import React from "react";

const FilterKeyWord = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "word",
    });
  };
  return (
    <>
      <form className="form">
        <label htmlfor="place" className="filter">
          PALABRA CHAVE
        </label>
        <input
          type="text"
          id="place"
          name="place"
          placeholder={"Busca aquí"}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default FilterKeyWord;
