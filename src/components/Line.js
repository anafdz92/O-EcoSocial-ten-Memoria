import React from "react";
import { Link } from "react-router-dom";

const Line = (props) => {
  const dotList = props.conflicts
    .sort((a, b) => b.year - a.year)
    .map((item) => {
      return (
        <li key={item.id}>
          <div>
            <time>{item.year}</time>
            <p>{item.name}</p>
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
          </div>
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
