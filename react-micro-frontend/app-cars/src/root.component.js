import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CarPage from "./cars-page/car-page.component.js";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/cars" component={CarPage} />
    </BrowserRouter>
  );
}
