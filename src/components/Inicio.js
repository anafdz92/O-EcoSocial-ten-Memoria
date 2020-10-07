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

  return (
    <>
      <section className="mainList">
        <div className="animate">
          <h1 className="title"> O EcoSocial ten Memoria </h1>
        </div>
        <button className="buttonFilter">
          <i class="fas fa-sort-amount-down-alt"></i>
        </button>
        <div className="filterContainer">
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
