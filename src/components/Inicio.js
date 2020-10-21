import React, { useState, useEffect, useReducer } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Line from "./Line";
import EventDetail from "./EventDetail";
import Conflicts from "../data/Conflicts";
import FilterYear from "./FilterYear";
import FilterContent from "./FilterContent";
import FilterKeyWord from "./FilterKeyWord";
import conflicts from "../data/Conflicts";
import ScrollAnimation from "react-animate-on-scroll";

const Inicio = (props) => {
  const [numberFilter, setnumberFilter] = useState("");
  const [placeFilter, setplaceFilter] = useState("");
  const [wordFilter, setwordFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showPackFilters, setShowPackFilters] = useState(false);

  const handleFilter = (data) => {
    console.log("manejando los filtros", data);
    //   setFilterContent(data);
    if (data.key === "number") {
      setnumberFilter(data.value);
    } else if (data.key === "place") {
      setplaceFilter(data.value);
    } else if (data.key === "word") {
      setwordFilter(data.value);
    }
  };

  const toggleFilter = () => {
    setShowFilters(!showFilters);
    setShowPackFilters(!showPackFilters);
    console.log(showFilters);
  };

  const handleClick = (ev) => {
    console.log("Me han clickado");
  };
  // const [item, setItem] = useState(Conflicts);

  // const renderEvent = (props) => {
  //   console.log(props.match.params.id, Conflicts);
  //   const foundConflict = Conflicts.find((conflict) => {
  //     console.log(conflict.id);
  //     return conflict.id === parseInt(props.match.params.id);
  //   });
  //   console.log(foundConflict);
  //   return <EventDetail conflict={foundConflict} />;
  // };

  const filteredConflicts = Conflicts.filter((conflict) => {
    return conflict.year.includes(numberFilter);
  })
    .filter((conflict) => {
      return conflict.location
        .toUpperCase()
        .includes(placeFilter.toUpperCase());
    })
    .filter((conflict) => {
      return conflict.what.toUpperCase().includes(wordFilter.toUpperCase());
    });

  //BORRAR BOTÓN
  let buttonFilter = "buttonFilter";
  let filterContainer = "hide";

  if (showFilters === true) {
    buttonFilter = "hide";
  }

  if (showPackFilters === true) {
    filterContainer = "filterContainer";
  }

  return (
    <>
      <section className="mainList">
        <div className="animate">
          <h1 className="title"> O EcoSocial ten Memoria </h1>
        </div>
        <div>
          <button className={buttonFilter} onClick={toggleFilter}>
            <p>Filtrar</p>
            <i class="fas fa-sort"></i>
          </button>
        </div>

        <div className={filterContainer}>
          <button className="close">
            <i class="fas fa-times"></i>
          </button>
          <FilterYear handleFilter={handleFilter} />
          <FilterContent handleFilter={handleFilter} />
          <FilterKeyWord handleFilter={handleFilter} />
        </div>
        <Line conflicts={filteredConflicts} />
        {/* <Switch>
          <Route path="/line/:id" render={renderEvent} />
          {/* <Events conflicts={Conflicts} /> */}
        {/* </Switch> */}
      </section>
    </>
  );
};

export default Inicio;
