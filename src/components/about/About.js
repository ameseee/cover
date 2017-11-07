import React, { Component } from 'react';
import { VictoryBar, VictoryChart } from 'victory';

class About extends Component {

  render() {
    const quarterlyData = [
      {quarter: 1, earnings: 1300},
      {quarter: 2, earnings: 1800},
      {quarter: 3, earnings: 1100},
    ];

    return (
      <VictoryChart>
        <VictoryBar
          data={quarterlyData}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
    );
  }
}

export default About;
