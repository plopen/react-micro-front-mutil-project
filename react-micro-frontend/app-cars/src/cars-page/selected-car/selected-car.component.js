import React, { useEffect, useState, lazy, Suspense } from "react";
import CarAttribute from "./car-attribute.component.js";
import NotablePeople from "./notable-people/notable-people.component.js";
import { getCar } from "../../utils/api.js";
const Films = lazy(() =>
  System.import("@react-mf/people").then((mod) => mod.getFilmsComponent())
);

export default function SelectedCar(props) {
  const { selectedId } = props;
  const [selectedCar, setCar] = useState();

  useEffect(() => {
    if (selectedId) {
      const sub = getCar(selectedId).subscribe((car) => {
        setCar(car);
      });
      return () => {
        sub.unsubscribe();
      };
    }
  }, [selectedId]);

  if (!selectedCar) {
    return <div>No car Selected</div>;
  }

  return (
    <div>
      <CarAttribute title={"型号"} value={selectedCar.climate} />
      <CarAttribute
        title={"公里数"}
        value={formatDiameter(selectedCar.diameter)}
      />
      <CarAttribute title={"环保标准"} value={selectedCar.gravity} />
      <CarAttribute title={"厂商"} value={selectedCar.terrain} />
      <CarAttribute
        title={"长宽高"}
        value={formatPopulation(selectedCar.population)}
      />
      <NotablePeople people={selectedCar.residents} />
      {/* <CarAttribute title={"Films"}>
        <Suspense fallback={null}>
          <Films films={selectedCar.films} />
        </Suspense>
      </CarAttribute> */}
    </div>
  );
}

function formatDiameter(value) {
  if (value === undefined) {
    return "";
  } else {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) {
      return value;
    } else {
      return `${value} 公里 `;
    }
  }
}
function formatPopulation(value) {
  if (value === undefined) {
    return "";
  } else {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) {
      return value;
    } else {
      return abbrNum(value);
    }
  }
}

// copied from stack overflow
export function abbrNum(number, decPlaces = 2) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces);

  // Enumerate number abbreviations
  const abbrev = ["k", "m", "b", "t"];
  let newNumber = number;

  // Go through the array backwards, so we do the largest first
  for (let i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    const size = Math.pow(10, (i + 1) * 3);

    // If the number is bigger or equal do the abbreviation
    if (size <= newNumber) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      newNumber = Math.round((number * decPlaces) / size) / decPlaces;

      // Handle special case where we round up to the next abbreviation
      if (newNumber == 1000 && i < abbrev.length - 1) {
        newNumber = 1;
        i++;
      }

      // Add the letter for the abbreviation
      newNumber += abbrev[i];

      // We are done... stop
      break;
    }
  }
  return newNumber;
}
