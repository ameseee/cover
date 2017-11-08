import React from 'react';

export const reportInfographic = (red, blue) => {
  let people = [];
  for (var i = 0; i < red; i++) {
    people.push(<img
      className="person-icon"
      src={require("../assets/person-red.png")} />);
  }
  for (var j = 0; j < blue; j++) {
    people.push(<img
      className="person-icon"
      src={require("../assets/person-navy.png")} />);
  }
  return people;
};

export const physicalInfographic = (red, blue) => {
  let people = [];
  for (var i = 0; i < red; i++) {
    people.push(<img
      className="physical-person-icon"
      src={require("../assets/person-red.png")} />);
  }
  for (var j = 0; j < blue; j++) {
    people.push(<img
      className="physical-person-icon"
      src={require("../assets/person-navy.png")} />);
  }
  return people;
};
