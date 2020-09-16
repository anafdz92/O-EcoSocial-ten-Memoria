import React from "react";
import Event from "../components/Event";
import conflicts from "../data/Conflicts";

const Events = (props) => {
  console.log(props.conflicts);

  const list = props.conflicts.map((item) => {
    console.log(item.id);
    return (
      <li key={item.id}>
        <Event
          img={item.url}
          name={item.name}
          year={item.year}
          location={item.location}
          what={item.what}
          links={item.links}
        />
      </li>
    );
  });
  return <ul>{list}</ul>;
};

export default Events;
