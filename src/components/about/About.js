import React, { Component } from 'react';
import { VictoryPie, VictoryChart } from 'victory';

class About extends Component {

  reportInfographic = (red, blue) => {
    let people = [];
    for (var i = 0; i < red; i++) {
      people.push(<img
        className="person-icon"
        src={require("../../assets/person-red.png")} />);
    }
    for (var j = 0; j < blue; j++) {
      people.push(<img
        className="person-icon"
        src={require("../../assets/person-navy.png")} />);
    }
    return people;
  }

  physicalInfographic = (red, blue) => {
    let people = [];
    for (var i = 0; i < red; i++) {
      people.push(<img
        className="physical-person-icon"
        src={require("../../assets/person-red.png")} />);
    }
    for (var j = 0; j < blue; j++) {
      people.push(<img
        className="physical-person-icon"
        src={require("../../assets/person-navy.png")} />);
    }
    return people;
  }

  render() {
    return (
      <div className="about-page">
        <h2 className="about-title">About</h2>
        <div className="about-section">
          <article className="first-section">
            Every minute,
            20 people in the US are physically abused by an intimate partner.
          </article>

          <article className="physical-section">
            <p className="physical-infographic-caption">
              <span className="phsyical-caption-1">
                1 in 3
              </span>
              <span className="phsyical-caption-2">women are victims of physical violence by an intimate partner</span>
            </p>
            <div className="phsyical-infographic">
              {this.physicalInfographic(1, 2)}
            </div>
          </article>

          <article className="psychological-pie">
            <VictoryPie
              padAngle={1}
              colorScale={["#de504b", "#293e5f"]}
              innerRadius={100}
              data={[
                {x: ' ', y: 49},
                {x: ' ', y: 51},
              ]}
            />
            <p className="psychological-caption">
              About
              <span className="forty-nine-percent"> 49% of women </span>
              are victims of psychological violence by an intimate partner</p>
          </article>

          <article className="medical-care-pie">
            <VictoryPie
              padAngle={1}
              colorScale={["#de504b", "#293e5f"]}
              innerRadius={100}
              data={[
                {x: ' ', y: 34},
                {x: ' ', y: 66},
              ]}
            />
            <p className="medical-care-caption">Only

              <span className="red-text">
                <span className="thirty-four-percent"> 34% </span>of people
              </span> who are injured by an intimate partner
              <span className="red-text"> receive medical care </span>
              for those injuries.</p>
          </article>

          <article className="hotline-calls">
            <p className="typical-day">On a typical day...</p>
            <div className="twenty-k">
              20,000
            </div>
            <article className="calls-paragraph-container">
              <p className="calls-second-paragraph">calls are placed to</p>
              <p className="calls-third-paragraph">
                Domestic Violence Hotlines nationwide.
              </p>
            </article>
          </article>

          <article className="report-section">
            <div className="report-infographic">
              {this.reportInfographic(1, 99)}
            </div>
            <p className="report-infographic-caption">Less than 1% of Domestic Violence cases are reported to police.</p>
          </article>

        </div>
        <article className="call-to-action">
          this is the call to action div
        </article>
      </div>
    );
  }
}

export default About;
