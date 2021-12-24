import React, { useReducer, useEffect } from "react";
import CarList from "../car-list/car-list.component.js";
import SelectedCar from "./selected-car/selected-car.component.js";
import { get } from "lodash";
import { getCars } from "../utils/api.js";
import { Button } from "@react-mf/styleguide";

export default function CarPage(props) {
  const initialState = {
    cars: [],
    loading: false,
    page: 0,
    nextPage: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "fetchCars" });
  }, []);
  const { page, nextPage, loading } = state;
  const { pathname } = props.location;
  const regexSearch = /[0-9]+/.exec(pathname);
  const selected = get(regexSearch, "[0]");

  useEffect(() => {
    if (page > 0) {
      const req$ = getCars(page).subscribe((results) => {
        dispatch({
          type: "addCars",
          payload: {
            nextPage: !!results.next,
            results: results.results,
          },
        });
      });
    }
  }, [page]);

  return (
    <div>
      <div className="flex">
        <div className="p-6 w-1/3">
          {nextPage ? (
            <Button
              disabled={loading || !nextPage}
              loading={loading}
              onClick={() => {
                dispatch({ type: "fetchCars" });
              }}
            >
              加载更多车辆
            </Button>
          ) : null}
          <CarList {...state} />
        </div>
        <div className="w-2/3 p-6 border-l-2 border-white">
          <div className="selectedPlanet">
            <SelectedCar selectedId={selected} />
          </div>
        </div>
      </div>
    </div>
  );
}

function reducer(state, action) {
  const newState = { ...state };
  switch (action.type) {
    case "addCars":
      const { payload } = action;
      newState.loading = false;
      newState.nextPage = payload.nextPage;
      newState.cars = [...newState.cars, ...payload.results];
      return newState;
    case "fetchCars":
      newState.loading = true;
      newState.page = newState.page + 1;
      console.log('fetchCars', newState);
      return newState;
    default:
      return state;
  }
}
