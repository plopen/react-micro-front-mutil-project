import React, { Fragment } from "react";
import Homeworld from "./homeworld.component.js";
import Films from "../../films/films.component.js";
import PersonAttribute from "./person-attribute.component.js";

export default function SelectedPerson({ selectedPerson }) {
  return (
    <div className="selectedPerson">
      {selectedPerson !== undefined ? (
        <div>
          <PersonAttribute>
            <PersonAttribute.Title>名字</PersonAttribute.Title>
            <PersonAttribute.Value>{selectedPerson.name}</PersonAttribute.Value>
          </PersonAttribute>
          <PersonAttribute>
            <PersonAttribute.Title>身高</PersonAttribute.Title>
            <PersonAttribute.Value>
              {selectedPerson.height}
            </PersonAttribute.Value>
          </PersonAttribute>
          <PersonAttribute>
            <PersonAttribute.Title>体重</PersonAttribute.Title>
            <PersonAttribute.Value>{selectedPerson.mass}</PersonAttribute.Value>
          </PersonAttribute>
          <PersonAttribute>
            <PersonAttribute.Title>国籍</PersonAttribute.Title>
            <PersonAttribute.Value>
              {selectedPerson.country}
            </PersonAttribute.Value>
          </PersonAttribute>
          <PersonAttribute>
            <PersonAttribute.Title>性别</PersonAttribute.Title>
            <PersonAttribute.Value>
              {selectedPerson.gender}
            </PersonAttribute.Value>
          </PersonAttribute>
          <PersonAttribute>
            <PersonAttribute.Title>出生年月</PersonAttribute.Title>
            <PersonAttribute.Value>
              {selectedPerson.birth_year}
            </PersonAttribute.Value>
          </PersonAttribute>
          <PersonAttribute>
            <PersonAttribute.Title>拥有车辆</PersonAttribute.Title>
            <PersonAttribute.Value>
              <Homeworld homeworld={selectedPerson.homeworld} />
            </PersonAttribute.Value>
          </PersonAttribute>
          <PersonAttribute>
            <PersonAttribute.Title>喜欢电影</PersonAttribute.Title>
            <PersonAttribute.Value>
              <Films films={selectedPerson.films} />
            </PersonAttribute.Value>
          </PersonAttribute>
        </div>
      ) : (
        <div>No one selected</div>
      )}
    </div>
  );

  function formatHeight(heightInCm) {
    return `${heightInCm}cm (${heightInCm * 0.0328084}ft)`;
  }
}
