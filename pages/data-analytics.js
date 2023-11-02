import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";
import PageBannerKids from "../src/components/page-banner-da";
import pic from "../public/assets/images/portfolio.png";
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
                <h3 className="my-12">
                  Become a Data Analyst without spending £30,000 on a degree.
                </h3>

                <div className="image mb-35">
                  <img
                    src="https://www.purdueglobal.edu/blog/it/rise-of-data-analyst.jpg"
                    alt="Course Details"
                  />
                </div>

                <p style={{ fontSize: "18px" }}>
                  Join our our immersive, part-time bootcamp for personalized
                  support, practical learning and a jobs & CV workshop.
                </p>

                <h3>What is included:</h3>
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
                  </p>{" "}
                  <p>
                    🎁 <b>BONUS</b>: 2 sessions with our{" "}
                    <a href="https://maryandahir.simple.ink/">career coach</a>
                  </p>
                </ul>
                <h3>What you will learn</h3>

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
                <div className="text-center p-5">
                  <h3 className="mt-20 ">Our graduates have landed jobs at:</h3>
                </div>
                <div className="logo-section pt-130 rpt-100 pb-80 rpb-50">
                  <div className="container">
                    <div className="logo-inner">
                      <div className="logo-item wow fadeInUp delay-0-1s">
                        <Link href="/contact">
                          <img
                            src="assets/images/client-logos/bank.png"
                            alt="Client Logo"
                          />
                        </Link>
                      </div>
                      <div className="logo-item wow fadeInUp delay-0-2s">
                        <Link href="/contact">
                          <img
                            src="assets/images/client-logos/capgemini.png"
                            alt="Client Logo"
                          />
                        </Link>
                      </div>
                      <div className="logo-item wow fadeInUp delay-0-3s">
                        <Link href="/contact">
                          <img
                            src="assets/images/client-logos/trison.png"
                            alt="Client Logo"
                          />
                        </Link>
                      </div>
                      <div className="logo-item wow fadeInUp delay-0-4s">
                        <Link href="/contact">
                          <img
                            src="assets/images/client-logos/agreed-digital.png"
                            alt="Client Logo"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-instructor pt-10 pb-55 wow fadeInUp delay-0-2s">
                  <div className="row align-items-center">
                    <div className="col-sm-5">
                      <div className="instructor-image">
                        <img
                          src="assets/images/abdirahim.jpeg"
                          alt="instructor"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="instructor-details">
                        <h4>Abdirahim</h4>
                        <span className="designations">
                          Data Consultant & Instructor
                        </span>

                        <p>
                          Abdirahim is a Data Consultant with over four years of
                          experience in Data Analytics and Data Science. He is
                          currently works for a leading digital marketing agency
                          in the Uk.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-sidebar rmt-75">
                <div
                  id="pricing"
                  className="widget widget-course-details wow fadeInUp delay-0-2s"
                >
                  <div className="widget-video">
                    <img
                      src="https://cdn.cs.1worldsync.com/syndication/mediaserverredirect/40fdffba73a38111fbc9c79a0fc6fbaa/custom_width(400).jpg?ts=638017679456984871"
                      alt="Course Details"
                    />
                  </div>
                  <div className="price-off">
                    <span className="price">299</span>
                    <span className="off">24 spaces left</span>
                  </div>
                  <p style={{ fontSize: "18px", fontWeight: "700" }}>
                    Start: Wednesday 29th November
                  </p>
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
                      <b>Wed (6-9pm) & Sat (11-2pm) </b>
                    </li>

                    <li>
                      <i className="fas fa-globe" />{" "}
                      <span>Recorded sessions & guest speakers</span>{" "}
                    </li>
                  </ul>

                  <a href="https://buy.stripe.com/9AQ9Bv6KdgUC4ne9B4">
                    <a className="theme-btn">
                      Secure your space
                      <i className="fas fa-arrow-right" />
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Course Details End */}
      {/* Recent Coach Start */}
      <section className="why-choose-section pt-120 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s">
                <div className="section-title mb-25">
                  <h2>Become Job-ready in 12 weeks</h2>
                </div>

                <div>
                  <p>
                    Upon completing the bootcamp, you will be equipped with the
                    formal training and skills necessary to pursue roles in{" "}
                    <i>Data Analysis</i>, <i>Business Analysis</i>, or{" "}
                    <i>Business Intelligence.</i>
                    <br></br>
                    You'll learn about <i>Python</i>, and the skills required
                    for data transformation and visualization.
                  </p>
                </div>
                <div>
                  <a
                    href="https://buy.stripe.com/9AQ9Bv6KdgUC4ne9B4"
                    className="theme-btn style-four"
                  >
                    Secure your space
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mt-10 ">
                <img
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwdGVhY2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                  alt="Why Choose"
                  className="why-choose-one"
                />
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="why-choose-section pt-120 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s">
                <div className="section-title mb-25">
                  <h2>Build Projects for your portfolio</h2>
                </div>

                <div>
                  <p>
                    After every module, you'll build a project with real-life
                    data for your portfolio.
                    <br></br>
                    At the end of the bootcamp, you'll have a portfolio of
                    projects ready to showcase your skills and techniques as a
                    data analyst.
                  </p>
                </div>
                <div>
                  <a
                    href="https://buy.stripe.com/9AQ9Bv6KdgUC4ne9B4"
                    className="theme-btn style-four"
                  >
                    Secure your space
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mt-10 ">
                <Image
                  src={pic}
                  alt="Why Choose"
                  className="why-choose-one"
                />
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </Layout>
  );
};
export default CourseDetails;
