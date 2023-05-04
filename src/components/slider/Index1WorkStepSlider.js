import React, { Component, Fragment } from "react";
import Link from "next/link";
import JS from "../slider/js.png";
import Slider from "react-slick";
import Image from "next/image";
import { Index1WorkStepSliderprops } from "../../sliderProps";
import tree from "../../../public/assets/images/palm-tree.png";
import laptop from "../../../public/assets/images/laptop.png";

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
    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      speed: 400,
      autoplay: false,
      autoplaySpeed: 5000,
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <div className="row justify-content-between align-items-center pb-30 wow fadeInUp delay-0-2s">
          <div className="col-xl-7 col-lg-8">
            <div className="section-title">
              <span className="sub-title mb-15">Course Info</span>
              <h3>
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
              <h4>Learn software fundamentals and databases</h4>
              <p>
                If you want to take your career to its highest potential, you
                need to learn full stack. You’ll have the widest appeal to
                employers and earn the top of your pay bracket as soon as
                possible.
              </p>
            </div>
          </div>
          <div className="work-step-item">
            <img
              src="https://cdn-icons-png.flaticon.com/128/919/919851.png"
              className="number"
            />
            <div className="content">
              <h4>Earn the right to work the way you want.</h4>
              <p>
                Freelancing puts you in control to work as you wish with no
                income cap.
                <br />
                We teach you how to find clients and get hired by them, so that
                as you build up your experience and learn what you like most,
                you’re able to eventually do it exclusively.
              </p>
            </div>
          </div>
          <div className="work-step-item">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
              className="number"
            />
            <div className="content">
              <h4>Deploy apps live and prove your concepts </h4>
              <p>
                Build complete web applications and deploy them online with a
                live domain. Use them as portfolio peices to stand out from the
                crowd in job applications
              </p>
            </div>
          </div>
          <div className="work-step-item">
            <div className="content section-flex">
              <div>
                {" "}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/428/428001.png"
                  alt="laptop-image"
                  className="number"
                />{" "}
                <h6> Become a Web Developer</h6>
                <Link href="/course-details">
                  <a
                    style={{
                      padding: "10px",
                      fontSize: "9px",
                      margin: "10px 0px",
                      backgroundColor: "#00CC83",
                    }}
                    className="theme-btn"
                  >
                    Join Now
                  </a>
                </Link>
              </div>
              <div className="">
                {" "}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/616/616562.png"
                  alt="tree-icon"
                  className="number"
                />{" "}
                <h6> Become a Freelancer</h6>
                <Link href="/course-details-freelance">
                  <a
                    style={{
                      padding: "10px",
                      fontSize: "9px",
                      margin: "10px 0px",
                      backgroundColor: "#0084DF",
                    }}
                    className="theme-btn"
                  >
                    Join Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
