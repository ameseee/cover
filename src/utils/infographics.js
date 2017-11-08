import React from 'react';

export const reportInfographic = (red, blue) => {
  let people = [];
  for (var i = 0; i < red; i++) {
    people.push(<img
      alt="red person icon"
      className="person-icon"
      src={require("../assets/person-red.png")} />);
  }
  for (var j = 0; j < blue; j++) {
    people.push(<img
      alt="blue person icon"
      className="person-icon"
      src={require("../assets/person-navy.png")} />);
  }
  return people;
};

export const physicalInfographic = (red, blue) => {
  let people = [];
  for (var i = 0; i < red; i++) {
    people.push(<img
      alt="red person icon"
      className="physical-person-icon"
      src={require("../assets/person-red.png")} />);
  }
  for (var j = 0; j < blue; j++) {
    people.push(<img
      alt="blue person icon"
      className="physical-person-icon"
      src={require("../assets/person-navy.png")} />);
  }
  return people;
};
