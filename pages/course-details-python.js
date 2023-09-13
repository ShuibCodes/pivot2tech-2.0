import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";
import PageBannerKids from "../src/components/page-banner-kids";
import WellernAccordion from "../src/components/WellernAccordion";
import Layout from "../src/layout/Layout";
import { coachSlider } from "../src/sliderProps";
const CourseDetails = () => {
  const [active, setActive] = useState(`collapse1`);
  const onClick = (value) => {
    console.log(value);
    setActive(value === active ? "" : value);
  };
  return (
    <Layout>
      <PageBannerKids pageName={"Course Details"} />

      <section className="course-details-area pt-130 rpt-100">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-8">
              <div className="course-details-content">
                <div className="course-header">
                  <span className="category">Python Coder</span>
                  <img
                    src="assets/images/shapes/line-shape.png"
                    alt="Line"
                  />
                  <span className="off">Ages 9-12</span>
                </div>
                <h2>Learn to Code with our Python Course for Kids</h2>
                <div className="text-center my-20">
                  <h6>In partnership with </h6>
                  <img
                    style={{ maxWidth: "20%" }}
                    src="https://static.wixstatic.com/media/74c84a_23793fd31b7e44889268b9e4779299f1~mv2.png/v1/fill/w_195,h_176,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LogoColour1%20(1).png"
                  />
                </div>
                <div className="image mb-35">
                  <img
                    src="https://funtech.co.uk/img/2021/pics/camps-04.webp"
                    alt="Course Details"
                  />
                </div>
                <p style={{ fontSize: "18px" }}>
                  Python is a popular coding language that has a minimal and
                  easy-to-read style. It’s moving fast up the rankings of the
                  most popular languages! In this popular Python camp, we will
                  teach your child to code, edit and problem-solve in a
                  structured and methodical manner.
                  <br></br>
                  <br></br>
                  Once your child has mastered how code is structured, they will
                  learn to implement core programming constructs through fun,
                  practical exercises and projects resulting in their ability to
                  create Python projects with confidence!
                </p>

                <h3>When and Where</h3>
                <ul
                  style={{ fontSize: "18px" }}
                  className="list-style-two mb-45"
                >
                  <span>
                    {" "}
                    <i className="far fa-clock mr-2" /> 26th September - 24th
                    October
                  </span>
                  <li>Tuesdays and Thursdays - 5-7pm </li>
                  <li>Online, virtual classes </li>
                </ul>
                <h3>What your child will learn</h3>
                <h5>Beginner to Intermediate</h5>
                <p>Pre-requisites: None</p>
                <Accordion
                  className="faq-accordion pt-10 pb-50 wow fadeInUp delay-0-2s"
                  id="course-faq"
                  defaultActiveKey="collapse1"
                >
                  <WellernAccordion
                    eventName={"collapse1"}
                    title={"Week 1"}
                    active={active}
                    onClick={() => onClick("collapse1")}
                  >
                    <ul className="course-video-list">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                          className="mfp-iframe course-video-play"
                        >
                          <span className="title">Arguments</span>{" "}
                        </a>
                      </li>
                      <li>
                        <span className="title">Arrays</span>{" "}
                      </li>
                      <li>
                        <span className="title">Statements</span>
                      </li>
                      <li>
                        <span className="title">Functions</span>
                      </li>
                    </ul>
                  </WellernAccordion>
                  <WellernAccordion
                    title={"Week 2"}
                    eventName={"collaps2"}
                    active={active}
                    onClick={() => onClick("collaps2")}
                  >
                    <ul className="course-video-list">
                      <li>
                        <span className="title">Loops</span>{" "}
                      </li>
                      <li>
                        <span className="title">Variables</span>{" "}
                      </li>
                      <li>
                        <span className="title">Algorithm</span>
                      </li>
                      <li>
                        <span className="title">Conditionals</span>
                      </li>
                    </ul>
                  </WellernAccordion>
                  <WellernAccordion
                    title={"Week 3"}
                    eventName={"collaps3"}
                    active={active}
                    onClick={() => onClick("collaps3")}
                  >
                    <ul className="course-video-list">
                      <li>
                        <span className="title">Declarations</span>{" "}
                      </li>
                      <li>
                        <span className="title">Frameworks</span>{" "}
                      </li>
                      <li>
                        <span className="title">Operands</span>
                      </li>
                      <li>
                        <span className="title">Operators</span>
                        <i className="far fa-play-circle" />{" "}
                      </li>
                    </ul>
                  </WellernAccordion>
                  <WellernAccordion
                    title={"Week 4 - Project Week"}
                    eventName={"collaps3"}
                    active={active}
                    onClick={() => onClick("collaps3")}
                  >
                    <ul className="course-video-list">
                      <li>
                        <span className="title">
                          Students will develop their own games & apps, using
                          the same tools and techniques used by professional
                          tech studios.
                          <br></br>
                          <br></br>
                          Here is an example of what they will build by week 4
                        </span>{" "}
                        <img src="assets/images/python-game.png" />
                      </li>
                    </ul>
                  </WellernAccordion>
                </Accordion>
                <h4 className="text-center">
                  Book in a FREE taster session today
                </h4>
                <div className="text-center">
                  <Link href="/kids-free-trail">
                    <a className="theme-btn m-10">
                      Free Trial <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>

                <div className="course-instructor pt-10 pb-55 wow fadeInUp delay-0-2s">
                  <div className="row align-items-center">
                    <div className="col-sm-5">
                      <div className="instructor-image">
                        <img
                          src="assets/images/teams/instructor.jpg"
                          alt="instructor"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="instructor-details">
                        <h4>John D. Mathews</h4>
                        <span className="designations">
                          Senior Web Designer
                        </span>

                        <h5>Follow Me</h5>
                        <div className="social-style-two">
                          <Link href="/contact">
                            <a>
                              <i className="fab fa-twitter" />
                            </a>
                          </Link>
                          <Link href="/contact">
                            <a>
                              <i className="fab fa-facebook-f" />
                            </a>
                          </Link>
                          <Link href="/contact">
                            <a>
                              <i className="fab fa-instagram" />
                            </a>
                          </Link>
                          <Link href="/contact">
                            <a>
                              <i className="fab fa-pinterest-p" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-sidebar rmt-75">
                <div className="widget widget-course-details wow fadeInUp delay-0-2s">
                  <div className="widget-video">
                    <img
                      src="assets/images/widgets/course-details.jpg"
                      alt="Course Details"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                      className="mfp-iframe youtube-video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="price-off">
                    <span className="price">199</span>
                    <span className="off">25% off</span>
                    <img
                      style={{ maxWidth: "20%" }}
                      src="https://static.wixstatic.com/media/74c84a_23793fd31b7e44889268b9e4779299f1~mv2.png/v1/fill/w_195,h_176,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LogoColour1%20(1).png"
                    />
                  </div>
                  <ul className="course-details-list mb-25">
                    <li>
                      <i className="far fa-file-alt" />{" "}
                      <span>Course Level</span> <b>Kids ages 9-12</b>
                    </li>
                    <li>
                      <i className="far fa-clock" /> <span>Duration</span>{" "}
                      <b>4 hours/week</b>
                    </li>

                    <li>
                      <i className="far fa-clipboard" /> <span>Days</span>{" "}
                      <b>Tuesdays & Thursdays</b>
                    </li>
                    <li>
                      <i className="fas fa-globe" /> <span>Location</span>{" "}
                      <b>Online</b>
                    </li>
                  </ul>

                  <Link href="/contact">
                    <a className="theme-btn">
                      Book now <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="my-10">
                    <Link href="/contact">
                      <a
                        style={{ backgroundColor: "#2351CF" }}
                        className="theme-btn"
                      >
                        Free trial <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Course Details End */}
      {/* Recent Coach Start */}
    </Layout>
  );
};
export default CourseDetails;
