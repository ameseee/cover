import React from 'react';

export const reportInfographic = (red, blue) => {
  let people = [];
  for (var i = 0; i < red; i++) {
    people.push(<img
      alt="red person icon"
      className="report-person-icon"
      src={require("../assets/person-red.svg")} />);
  }
  for (var j = 0; j < blue; j++) {
    people.push(<img
      alt="blue person icon"
      className="report-person-icon"
      src={require("../assets/person.svg")} />);
  }
  return people;
};

export const physicalInfographic = (red, blue) => {
  let people = [];
  for (var i = 0; i < red; i++) {
    people.push(<img
      alt="red person icon"
      className="physical-person-icon"
      src={require("../assets/person-red.svg")} />);
  }
  for (var j = 0; j < blue; j++) {
    people.push(<img
      alt="blue person icon"
      className="physical-person-icon"
      src={require("../assets/person.svg")} />);
  }
  return people;
};
