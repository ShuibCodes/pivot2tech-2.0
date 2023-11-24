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
import Maryan from "../public/assets/images/maryan.png";
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
                <h3 className="my-12">Land a job</h3>
                <h4 className="my-12">Get hired 5x faster</h4>
                <h5 className="my-12">
                  Land interviews, networking calls & job offers
                </h5>
                <div className="image mb-35">
                  <img
                    src="https://www.workitdaily.com/media-library/woman-accepts-a-job-offer-after-an-interview.jpg?id=28305318&width=980"
                    alt="Course Details"
                  />
                </div>
                <Link href="/faqs">
                  <a
                    className="theme-btn"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    £30 per week for 4 weeks{" "}
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>

                <div className="text-center image mb-35 mt-100">
                  <Image
                    src={Maryan}
                    alt="Course Details"
                  />
                  <div className="my-20">
                    <h3 className="my-1">Maryan Dahir</h3>
                    <h4>Tech Careers Coach </h4>
                  </div>
                </div>

                <h4>You're tired of the relentless job search</h4>
                <h3>We understand.</h3>
                <p>
                  Which is why we designed the TechLeap program. A 4-week high
                  performance Job Search cohort that mimics life in Tech.
                </p>

                <p>
                  With our expert guidance, you'll <b>gain the skills</b> and{" "}
                  <b>confidence</b> to secure
                  <b>interviews</b> and <b>Job offers.</b>
                </p>

                <section className="mt-100">
                  <h2>Proven results 👇🏾</h2>
                  <div>
                    <p
                      style={{
                        fontSize: "18px",
                        padding: "35px 0px 35px 0px",
                        fontStyle: "italic",
                      }}
                    >
                      “Reaching out to Maryan was one of the best decisions I've
                      made in my career. She was incredibly helpful and gave me
                      the advice I needed to secure a Customer Success role. I
                      couldn't recommend her services enough!"
                      <br></br>
                      <b>
                         - Khalid Yusuf, Customer Success Manager (AB Tasty)
                      </b>
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        padding: "35px 0px 35px 0px",
                        fontStyle: "italic",
                      }}
                    >
                      “Maryan's career coaching is truly exceptional. Her
                      dedication as an Event Coordinator and Course Lead,
                      promoting diversity and mentorship in tech, is evident in
                      her invaluable guidance. She's the ideal mentor for
                      personal branding, interviews, and all things tech
                      careers”
                    </p>

                    <p
                      style={{
                        fontSize: "18px",
                        padding: "35px 0px 35px 0px",
                        fontStyle: "italic",
                      }}
                    >
                      “Maryan's commitment to diversity and inclusion in the
                      tech sector as an Event Coordinator is commendable. Her
                      role as a Course Lead & expertise in sales, makes her an
                      outstanding mentor.”
                    </p>
                  </div>
                </section>

                <div className="logo-section pt-130 rpt-100 pb-80 rpb-50">
                  <div className="container">
                    <div className="logo-inner">
                      <div className="logo-item wow fadeInUp delay-0-1s">
                        <Link href="/contact">
                          <img
                            src="assets/images/client-logos/abtasty.png"
                            alt="Client Logo"
                          />
                        </Link>
                      </div>
                      <div className="logo-item wow fadeInUp delay-0-2s">
                        <Link href="/contact">
                          <img
                            src="assets/images/octapus-energy.png"
                            alt="Client Logo"
                          />
                        </Link>
                      </div>
                      <div className="logo-item wow fadeInUp delay-0-2s">
                        <Link href="/contact">
                          <img
                            src="assets/images/client-logos/bank.png"
                            alt="Client Logo"
                          />
                        </Link>
                      </div>
                      <div className="logo-item wow fadeInUp delay-0-3s">
                        <Link href="/contact">
                          <img
                            src="assets/images/client-logos/capgemini.png"
                            alt="Client Logo"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <h3
                  id="howItWorks"
                  className="mt-30"
                >
                  A 3-week, 6-hour Career Accelarator Cohort
                </h3>
                <p>Kick-off Tuesday 26th December , 7pm</p>
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
                    <span className="price">120</span>
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginLeft: "20px",
                      }}
                      className="price"
                    >
                      239
                    </span>
                  </div>
                  <p style={{ fontSize: "18px", fontWeight: "700" }}>
                    Start: Tuesday 26th December
                  </p>
                  <ul className="course-details-list mb-25">
                    <li>
                      <i className="far fa-file-alt" />{" "}
                      <span>Course Level</span> <b>Beginner's</b>
                    </li>
                    <li>
                      <i className="far fa-clock" /> <span>Times</span>{" "}
                      <b>2hrs a week, for 3 weeks</b>
                    </li>

                    <li>
                      <i className="far fa-clipboard" /> <span>Days</span>{" "}
                      <b>TBC </b>
                    </li>

                    <li>
                      <i className="fas fa-globe" />{" "}
                      <span>Live, group coaching sessions</span>{" "}
                    </li>
                    <p>
                      {" "}
                      <span>Lifetime access to all recordings</span>{" "}
                    </p>
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
                  <h4>
                    Don't let the pain of job hunting hold you back any longer.
                  </h4>
                  <h5>
                    Take the first leap toward your dream job with Tech Leap
                  </h5>
                </div>

                <div>
                  <p>
                    We break the job search down into milestones and tasks each
                    week, and go through the process together.
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
                  src="https://www.jobs.ca/content/uploads/2022/03/Interview-questions-to-be-asked.jpg"
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
