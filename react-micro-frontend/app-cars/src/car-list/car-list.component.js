import React, { Fragment } from "react";
import { getCars } from "../utils/api.js";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

function CarList(props) {
  const { loading, cars, nextPage, match } = props;

  return (
    <div className="planetList">
      {cars.map((car, i) => {
        let borderClass = "border-b";
        if (i === 0) {
          borderClass = "border-t border-b";
        } else if (i + 1 === cars.length) {
          borderClass = "";
        }
        return (
          <Link
            key={car.id}
            className={`h-12 flex items-center ${borderClass} border-white cursor-pointer no-underline`}
            to={`${match.path}/${car.id}`}
          >
            {car.name}
          </Link>
        );
      })}
      {loading && <div>Loading ...</div>}
    </div>
  );
}

export default withRouter(CarList);
