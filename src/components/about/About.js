import React, { Component } from 'react';
import { VictoryPie, VictoryChart } from 'victory';

class About extends Component {

  psychologicalInfographic = (red, blue) => {
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

  render() {
    return (
      <div className="about-section">
        <article>
          Every minute,
          20 people in the US are physically abused by an intimate partner.
        </article>

        <section className="infographic-section">
          <article className="individual-infographic">
            <div className="infographic">
              {this.physicalInfographic(33, 67)}
            </div>
            <p className="infographic-caption">
              1 in 3 women are victims of physical violence by an intimate partner
            </p>
          </article>

          <article className="individual-infographic">
            <div className="infographic">
              {this.psychologicalInfographic(49, 51)}
            </div>
            <p className="infographic-caption">About 49% of women are victims of
            psychological violence by an intimate partner</p>
          </article>
        </section>

        <article className="hotline-calls">
          <p>On a typical day,</p>
          <div className="twenty-k">
            20,000
          </div>
          <p className="calls-second-paragraph">calls are placed</p>
          <p className="calls-third-paragraph">
            to Domestic Violence Hotlines nationwide.
          </p>
        </article>

        <section className="pie-section">
          <article className="reported-pie">
            <VictoryPie
              padAngle={1}
              colorScale={["#de504b", "#293e5f"]}
              innerRadius={100}
              data={[
                {x: '', y: 1},
                {x: '', y: 99},
              ]}
            />
            <h3>
              Less than 1% of Domestic Violence cases are reported to police.
            </h3>
          </article>

          <article className="medical-care-pie">
            <VictoryPie
              padAngle={1}
              colorScale={["#de504b", "#293e5f"]}
              innerRadius={100}
              data={[
                {x: '', y: 34},
                {x: '', y: 66},
              ]}
            />
            <h3>Only 34% of people who are injured by an intimate partner receive medical care for those injuries.</h3>
          </article>
        </section>
      </div>
    );
  }
}

export default About;
