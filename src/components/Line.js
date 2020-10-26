import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Line = (props) => {
  const dotList = props.conflicts
    .sort((a, b) => b.year - a.year)
    .map((item) => {
      return (
        <li key={item.id}>
          <ScrollAnimation animateIn="fadeIn">
            <time>{item.year}</time>
            <p> {item.name}</p>
            <p>{item.location}</p>
            <Link
              to={`/line/${item.id}`}
              // to={{
              //   pathname: `/line/${item.id}`,
              //   state: { modal: true },
              // }}
            >
              <button className="buttonPink">
                <i class="fas fa-info-circle"></i>
              </button>
            </Link>
          </ScrollAnimation>
        </li>
      );
    });

  return (
    <div className="line">
      <ul className="dotList">{dotList}</ul>
    </div>
  );
};

export default Line;
