import React, { Component } from 'react';
import { VictoryPie } from 'victory';
import { Link } from 'react-router-dom';
import {
  reportInfographic,
  physicalInfographic
} from '../../utils/infographics';

class About extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 0
    };
  }

  componentDidMount() {
    this.countSeconds();
  }

  shouldComponentUpdate(nextState) {
    if (nextState !== this.state) {
      this.countSeconds();
      return true;
    }
  }

  countSeconds = () => {
    const updatedSeconds = this.state.seconds + 3;
    setTimeout( () => {
      this.setState({ seconds: updatedSeconds });
    }, 3000);
  }

  render() {
    return (
      <div className="about-page">
        <h2 className="about-title">About</h2>
        <div className="about-section">
          <article className="first-section">
            {`Since you've been on this page, `}
            <span className="person-count">{this.state.seconds} people </span>
            in the US have been physically abused by an intimate partner.
          </article>

          <article className="physical-section">
            <p className="physical-infographic-caption">
              <span className="phsyical-caption-1">
                1 in 3
              </span>
              <span className="phsyical-caption-2">
                women are victims of physical violence by an intimate partner
              </span>
            </p>
            <div className="phsyical-infographic">
              {physicalInfographic(1, 2)}
            </div>
          </article>

          <article className="psychological-pie">
            <VictoryPie
              padAngle={1}
              colorScale={["#de504b", "#B4B4B4"]}
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
              colorScale={["#293e5f", "#B4B4B4"]}
              innerRadius={100}
              data={[
                {x: ' ', y: 34},
                {x: ' ', y: 66},
              ]}
            />
            <p className="medical-care-caption">Only

              <span className="turq-text">
                <span className="thirty-four-percent"> 34% </span>of people
              </span> who are injured by an intimate partner
              <span className="turq-text"> receive medical care </span>
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
              {reportInfographic(1, 99)}
            </div>
            <p className="report-infographic-caption">
              Less than 1% of Domestic Violence cases are reported to police.
            </p>
          </article>

        </div>
        <article className="call-to-action">
          <section className="call-left">
            <p
              className="call-left-text">
              {`If you aren't experiencing domestic abuse,
              it's likely that someone you know is.
              Know the signs and be a source of support.`}
            </p>
            <button className="learn-more-btn">
              <a
                href="https://ncadv.org/learn-more"
                className="link-to-learn-more">
                Learn More
              </a>
            </button>
          </section>
          <section className="call-right">
            <p className="call-right-text">
              Do you need help or someone to talk to?
              <span className="not-alone-text">
                {`You're not alone. Create an account or login to get started.`}
              </span>
            </p>
            <button className="route-to-auth-btn">
              <Link
                className="link-to-auth-btn"
                to="/auth"
              >
                Sign In
              </Link>
            </button>
          </section>
        </article>
      </div>
    );
  }
}

export default About;
