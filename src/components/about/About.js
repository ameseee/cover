import React, { Component } from 'react';
import { VictoryPie, VictoryChart } from 'victory';

class About extends Component {

  render() {

    return (
      <div>
        <div className="reported-pie">
          <VictoryPie
            padAngle={1}
            colorScale={["red", "blue"]}
            innerRadius={100}
            data={[
              {x: "reported", y: 1},
              {x: "not reported", y: 99},
            ]}
          />
        </div>

        <div className="medical-care-pie">
          <VictoryPie
            padAngle={1}
            colorScale={["red", "blue"]}
            innerRadius={100}
            data={[
              {x: "received medical care", y: 34},
              {x: "did not receive medical care", y: 66},
            ]}
          />
        </div>
      </div>
    );
  }
}

export default About;
