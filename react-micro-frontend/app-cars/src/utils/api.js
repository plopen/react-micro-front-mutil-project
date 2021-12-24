import { fetchWithCache } from "@react-mf/api";
import { combineLatest } from "rxjs";

export function getCars(pageNum = 1) {
  return fetchWithCache(`cars?page=${pageNum}`);
}

export function getCar(id) {
  return fetchWithCache(`cars/${id}/`);
}

export function getPerson(peronNumber) {
  return fetchWithCache(`people/${peronNumber}/`);
}

export function getPeopleByIds(people = []) {
  const peopleObsArray = people.map((person) => {
    return fetchWithCache(`people/${person}/`);
  });
  return combineLatest(peopleObsArray);
}
