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
                  <span className="category">Become Data Certified</span>
                  <img
                    src="assets/images/shapes/line-shape.png"
                    alt="Line"
                  />
                  <span className="off">Beginner Friendly</span>
                </div>
                <h2>Data Analytics Bootcamp</h2>

                <div className="image mb-35">
                  <img
                    src="https://www.pathstream.com/blog/wp-content/uploads/110.png"
                    alt="Course Details"
                  />
                </div>
                <p style={{ fontSize: "18px" }}>
                  Become a successful professional in the Data Analytics field
                  with our immersive, part-time bootcamp. With personalized
                  support and practical learning, you’ll get the best results.
                  <br></br>
                  <br></br>
                </p>

                <h3>When and Where</h3>
                <ul
                  style={{ fontSize: "18px" }}
                  className="list-style-two mb-45"
                >
                  <span>
                    {" "}
                    <i className="far fa-clock mr-2" />{" "}
                    <span> 80-hours of learning over 12 weeks</span>
                  </span>
                  <li>Live classes 2 times per week</li>

                  <i className="far fa-file-alt mr-3" />
                  <span>100% Hands on experience</span>

                  <p>
                    <i className="far fa-user mr-3" />
                    Certified in 12 weeks
                  </p>
                </ul>
                <h3>What you will learn</h3>
                <h5>Beginner to Job Ready </h5>
                <p>Pre-requisites: None</p>
                <Accordion
                  className="faq-accordion pt-10 pb-50 wow fadeInUp delay-0-2s"
                  id="course-faq"
                  defaultActiveKey="collapse1"
                >
                  <WellernAccordion
                    eventName={"collapse1"}
                    title={"Week 1-3: Excel for Data Analysts"}
                    active={active}
                    onClick={() => onClick("collapse1")}
                  >
                    <ul className="course-video-list">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                          className="mfp-iframe course-video-play"
                        >
                          <span className="title">
                            Introduction to Data Analytics
                          </span>{" "}
                        </a>
                      </li>
                      <li>
                        <span className="title">
                          Data Cleaning and Formulas
                        </span>{" "}
                      </li>
                      <li>
                        <span className="title">Referencing and Lookups</span>
                      </li>
                      <li>
                        <span className="title">
                          Aggregating Data With PivotTables{" "}
                        </span>
                      </li>
                      <li>
                        <span className="title">Communicating With Excel </span>
                      </li>
                    </ul>
                  </WellernAccordion>
                  <WellernAccordion
                    title={"Week 4-6: SQL Databases"}
                    eventName={"collaps2"}
                    active={active}
                    onClick={() => onClick("collaps2")}
                  >
                    <ul className="course-video-list">
                      <li>
                        <span className="title">Introduction to SQL </span>{" "}
                      </li>
                      <li>
                        <span className="title">Grouping in SQL</span>{" "}
                      </li>
                      <li>
                        <span className="title">
                          Combining Data With JOINs and UNIONs{" "}
                        </span>
                      </li>
                      <li>
                        <span className="title">Advanced JOINs and NULLs </span>
                      </li>
                      <li>
                        <span className="title">Subqueries in SQL </span>
                      </li>
                      <li>
                        <span className="title">Functions in SQL </span>
                      </li>
                    </ul>
                  </WellernAccordion>
                  <WellernAccordion
                    title={"Week 7-9: Data Visualization PowerBI"}
                    eventName={"collaps3"}
                    active={active}
                    onClick={() => onClick("collaps3")}
                  >
                    <ul className="course-video-list">
                      <li>
                        <span className="title">Introduction to PowerBI</span>{" "}
                      </li>
                      <li>
                        <span className="title">
                          Data Manipulation in PowerBI
                        </span>{" "}
                      </li>
                      <li>
                        <span className="title">Dashboards in PowerBI</span>
                      </li>
                      <li>
                        <span className="title">
                          Data Narratives in PowerBI
                        </span>
                      </li>
                    </ul>
                  </WellernAccordion>
                  <WellernAccordion
                    title={"Week 10-13: Python for Data Analysts"}
                    eventName={"collaps3"}
                    active={active}
                    onClick={() => onClick("collaps3")}
                  >
                    <ul className="course-video-list">
                      <li>
                        Python basics. Variables, lists, dictionaries, slicing,
                        loops, if-else, functions
                      </li>
                      <li>Reading CSV / excel files with python</li>
                      <li>
                        DataFrames and Basic Operations with DataFrames,
                        indexing DF
                      </li>
                      <li>How to use scientific libraries in Python</li>
                    </ul>
                  </WellernAccordion>
                </Accordion>

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
                        <div className="ratting mb-10">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span>(50)</span>
                        </div>
                        <p>
                          Sit amet consectet adipising elit sed do eiusmod
                          incididunt ut labore et dolore magna
                        </p>
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
                      src="https://cdn.cs.1worldsync.com/syndication/mediaserverredirect/40fdffba73a38111fbc9c79a0fc6fbaa/custom_width(400).jpg?ts=638017679456984871"
                      alt="Course Details"
                    />
                  </div>
                  <div className="price-off">
                    <span className="price">299</span>
                    <span className="off">30 spaces</span>
                  </div>
                  <ul className="course-details-list mb-25">
                    <li>
                      <i className="far fa-file-alt" />{" "}
                      <span>Course Level</span> <b>Beginner's</b>
                    </li>
                    <li>
                      <i className="far fa-clock" /> <span>Duration</span>{" "}
                      <b>6 hours/week</b>
                    </li>

                    <li>
                      <i className="far fa-clipboard" /> <span>Days</span>{" "}
                      <b>Tuesdays & Thursdays</b>
                    </li>
                    <li>
                      <i className="far fa-clock" /> <span>Times</span>{" "}
                      <b>6-9pm GMT </b>
                    </li>

                    <li>
                      <i className="fas fa-globe" /> <span>Location</span>{" "}
                      <b>Online</b>
                    </li>
                  </ul>

                  <Link href="/contact">
                    <a className="theme-btn">
                      Sign up <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Course Details End */}
      {/* Recent Coach Start */}
      <section className="coach-section-two rel z-1 pt-120 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-45">
                <span className="sub-title-two">Latest Courses</span>
                <h2>Browser Latest Courses</h2>
              </div>
            </div>
          </div>
          <Slider
            {...coachSlider}
            className="coach-slider"
          >
            <div className="coach-item style-two wow fadeInUp delay-0-2s">
              <div className="coach-image">
                <img
                  src="assets/images/coachs/coach1.jpg"
                  alt="Coach"
                />
              </div>
              <div className="coach-content">
                <a
                  href="#"
                  className="category"
                >
                  Web Design
                </a>
                <h4>
                  <a href="#">
                    How to Learn Basic Web Design by Photoshop and Figma
                  </a>
                </h4>
                <ul className="coach-footer">
                  <li>
                    <i className="fas fa-user-graduate" />
                    <span>
                      By <b>Bennie L.</b>
                    </span>
                  </li>
                  <li>
                    <i className="far fa-file-alt" />
                    <span>12 Lessions</span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>seats</span>
                  </li>
                </ul>
                <div className="ratting-price">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(50)</span>
                  </div>
                  <span className="price">95</span>
                </div>
              </div>
            </div>
            <div className="coach-item style-two wow fadeInUp delay-0-4s">
              <div className="coach-image">
                <img
                  src="assets/images/coachs/coach2.jpg"
                  alt="Coach"
                />
              </div>
              <div className="coach-content">
                <a
                  href="#"
                  className="category"
                >
                  Development
                </a>
                <h4>
                  <a href="#">
                    How to Learn Web Development by Php and WordPress
                  </a>
                </h4>
                <ul className="coach-footer">
                  <li>
                    <i className="fas fa-user-graduate" />
                    <span>
                      By <b>Bennie L.</b>
                    </span>
                  </li>
                  <li>
                    <i className="far fa-file-alt" />
                    <span>12 Lessions</span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>seats</span>
                  </li>
                </ul>
                <div className="ratting-price">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(32)</span>
                  </div>
                  <span className="price">38</span>
                </div>
              </div>
            </div>
            <div className="coach-item style-two wow fadeInUp delay-0-6s">
              <div className="coach-image">
                <img
                  src="assets/images/coachs/coach3.jpg"
                  alt="Coach"
                />
              </div>
              <div className="coach-content">
                <a
                  href="#"
                  className="category"
                >
                  Marketing
                </a>
                <h4>
                  <a href="#">
                    How to Learn Basic Marketing Strategy for Research
                  </a>
                </h4>
                <ul className="coach-footer">
                  <li>
                    <i className="fas fa-user-graduate" />
                    <span>
                      By <b>Bennie L.</b>
                    </span>
                  </li>
                  <li>
                    <i className="far fa-file-alt" />
                    <span>12 Lessions</span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>seats</span>
                  </li>
                </ul>
                <div className="ratting-price">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(68)</span>
                  </div>
                  <span className="price">0</span>
                </div>
              </div>
            </div>
            <div className="coach-item style-two wow fadeInUp delay-0-2s">
              <div className="coach-image">
                <img
                  src="assets/images/coachs/coach1.jpg"
                  alt="Coach"
                />
              </div>
              <div className="coach-content">
                <a
                  href="#"
                  className="category"
                >
                  Web Design
                </a>
                <h4>
                  <a href="#">
                    How to Learn Basic Web Design by Photoshop and Figma
                  </a>
                </h4>
                <ul className="coach-footer">
                  <li>
                    <i className="fas fa-user-graduate" />
                    <span>
                      By <b>Bennie L.</b>
                    </span>
                  </li>
                  <li>
                    <i className="far fa-file-alt" />
                    <span>12 Lessions</span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>seats</span>
                  </li>
                </ul>
                <div className="ratting-price">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(50)</span>
                  </div>
                  <span className="price">95</span>
                </div>
              </div>
            </div>
            <div className="coach-item style-two wow fadeInUp delay-0-4s">
              <div className="coach-image">
                <img
                  src="assets/images/coachs/coach2.jpg"
                  alt="Coach"
                />
              </div>
              <div className="coach-content">
                <a
                  href="#"
                  className="category"
                >
                  Development
                </a>
                <h4>
                  <a href="#">
                    How to Learn Web Development by Php and WordPress
                  </a>
                </h4>
                <ul className="coach-footer">
                  <li>
                    <i className="fas fa-user-graduate" />
                    <span>
                      By <b>Bennie L.</b>
                    </span>
                  </li>
                  <li>
                    <i className="far fa-file-alt" />
                    <span>12 Lessions</span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>seats</span>
                  </li>
                </ul>
                <div className="ratting-price">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(32)</span>
                  </div>
                  <span className="price">38</span>
                </div>
              </div>
            </div>
            <div className="coach-item style-two wow fadeInUp delay-0-6s">
              <div className="coach-image">
                <img
                  src="assets/images/coachs/coach3.jpg"
                  alt="Coach"
                />
              </div>
              <div className="coach-content">
                <a
                  href="#"
                  className="category"
                >
                  Marketing
                </a>
                <h4>
                  <a href="#">
                    How to Learn Basic Marketing Strategy for Research
                  </a>
                </h4>
                <ul className="coach-footer">
                  <li>
                    <i className="fas fa-user-graduate" />
                    <span>
                      By <b>Bennie L.</b>
                    </span>
                  </li>
                  <li>
                    <i className="far fa-file-alt" />
                    <span>12 Lessions</span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>seats</span>
                  </li>
                </ul>
                <div className="ratting-price">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(68)</span>
                  </div>
                  <span className="price">0</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Layout>
  );
};
export default CourseDetails;
