import React, { Component, Fragment } from "react";

export default class Index1WorkStepSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <Fragment>
        <div className="row justify-content-between align-items-center pb-30 wow fadeInUp delay-0-2s">
          <div className="col-xl-7 col-lg-8">
            <div className="section-title">
              <h3 style={{ padding: "30px 0px" }}>
                Master the fundamental skills of a web developer in just a few
                weeks
              </h3>
            </div>
          </div>
        </div>
        <div className="feature-grid">
          <div className="work-step-item">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
              className="number"
            />
            <div className="content">
              <h4>Max-out your earning potential as a software engineer</h4>
              <p>
                Earn the most possible in the least amount of time by practicing
                your skills on work-like projects as you move through your
                bootcamp courses. Show these projects to potential employers and
                get ahead of the crowd!
              </p>
            </div>
          </div>
          <div className="work-step-item">
            <img
              src="https://cdn-icons-png.flaticon.com/128/919/919851.png"
              className="number"
            />
            <div className="content">
              <h4>
                Build real-life projects and tap into a supportive community
              </h4>
              <p>
                Git the ground running as a new coder with real-life projects in
                your portfolio and a community to lean on when challenges arise.
                <br />
                Work with the client side and the server side of websites and
                applications and maintain complete control over the development
                process. Make the right decisions faster through your
                big-picture lens.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
