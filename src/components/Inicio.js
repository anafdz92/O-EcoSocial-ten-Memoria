import React, { useState, useEffect } from "react";
import Line from "./Line";
import Conflicts from "../data/Conflicts";
import FilterYear from "./FilterYear";
import FilterContent from "./FilterContent";
import FilterKeyWord from "./FilterKeyWord";
import Reset from "./Reset"
import ScrollToTop from "react-scroll-to-top";
import Typewriter from "typewriter-effect";


const Inicio = (props) => {

  const [numberFilter, setnumberFilter] = useState
  (localStorage.getItem("myValueLocalStorageNumber") ||"");

  const [placeFilter, setplaceFilter] = useState
  (localStorage.getItem("myValueLocalStorage") || "");

  const [wordFilter, setwordFilter] = useState
  (localStorage.getItem("myValueLocalStorageWord") ||"");

  const [showFilters, setShowFilters] = useState(false);
  const [showPackFilters, setShowPackFilters] = useState(false);
  const [closeFilters, setCloseFilters] = useState(false);


  

  const handleFilter = (data) => {

    if (data.key === "number") {
      setnumberFilter(data.value);
      localStorage.setItem("myValueLocalStorageNumber",(data.value))
    } else if (data.key === "place") {
      setplaceFilter(data.value);
      localStorage.setItem("myValueLocalStorage",(data.value))
    } else if (data.key === "word") {
      setwordFilter(data.value);
      localStorage.setItem("myValueLocalStorageWord",(data.value))
    }
  };

  const toggleFilter = () => {
    setShowFilters(!showFilters);
    setShowPackFilters(!showPackFilters);
    setCloseFilters(!closeFilters);
  };

  const filteredConflicts = Conflicts.filter((conflict) => {
    return conflict.year.includes(numberFilter);
  })
    .filter((conflict) => {
      return conflict.location
        .toUpperCase()
        .includes(placeFilter.toUpperCase());
    })
    .filter((conflict) => {
      return (
        conflict.p1.toUpperCase().includes(wordFilter.toUpperCase()) ||
        conflict.p2.toUpperCase().includes(wordFilter.toUpperCase()) ||
        conflict.p3.toUpperCase().includes(wordFilter.toUpperCase())
      );
    });

  // RESET
  
  const resetItemData = () => {
    setnumberFilter("");
    localStorage.removeItem("myValueLocalStorageNumber")
    setplaceFilter("");
    localStorage.removeItem("myValueLocalStorage")
    setwordFilter("");
    localStorage.removeItem("myValueLocalStorageWord")
  };

  //BORRAR BOTÓN
  let buttonFilter = "buttonFilter";
  let filterContainer = "hide";
  let close = "close";

  if (showFilters === true) {
    buttonFilter = "hide";
  }

  if (showPackFilters === true) {
    filterContainer = "filterContainer animate";
  } else if (closeFilters === true) {
    close = "hide";
  }
  //RENDER

  return (
    <>
      <section className="mainList">
        <div className="animate">
          <h1 className="title ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("O Ecosocial ten Memoria").start();
              }}
            />
          </h1>
        </div>
        <div>
          <button className={buttonFilter} onClick={toggleFilter}>
            <p>Filtrar</p>
            <i class="fas fa-sort"></i>
          </button>
        </div>

        <div className={filterContainer}>
          <button className={close} onClick={toggleFilter}>
            <i class="fas fa-times"></i>
          </button>
          <FilterYear handleFilter={handleFilter} value={numberFilter}/>
          <FilterContent handleFilter={handleFilter} value={placeFilter} />
          <FilterKeyWord handleFilter={handleFilter} value={wordFilter} />
          <Reset reset={resetItemData} />
        </div>

        <Line conflicts={filteredConflicts} />
      </section>
      <ScrollToTop
        smooth
        component={<i class="fas fa-arrow-up"></i>}
        style={{
          backgroundColor: "#129471",
          color: "#b13046",
          fontSize: "23px",
        }}
      />
    </>
  );
};

export default Inicio;
