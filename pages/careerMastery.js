import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
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
      <Head>
        <title>Pivot2Tech Bootcamp 🚀</title>
        <meta
          property="og:url"
          content="https://pivot2tech.co.uk/"
        />
        <meta
          property="og:type"
          content="website"
        />
        {/* <meta property="fb:app_id" content="your fb app id" /> */}
        <meta
          property="og:title"
          content="CareerMastery"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="og:description"
          content="Land networking calls, convert job referrals and master each stage of the interiview processs"
        />
        <meta
          property="og:image"
          content="https://www.workitdaily.com/media-library/woman-accepts-a-job-offer-after-an-interview.jpg?id=28305318&width=980"
        />
      </Head>
      <section className="course-details-area pt-130 rpt-100">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-8">
              <div className="course-details-content">
                <h2 className="my-12">Land a job</h2>
                <h2 className="my-12">Get hired 5x faster</h2>
                <h3 className="my-12">
                  Land interviews, networking calls & job offers
                </h3>
                <div className="image mb-35">
                  <img
                    src="https://www.workitdaily.com/media-library/woman-accepts-a-job-offer-after-an-interview.jpg?id=28305318&width=980"
                    alt="Course Details"
                  />
                </div>
                <div>
                  <a
                    href="#info"
                    className="theme-btn style-four"
                  >
                    Learn More <i className="fas fa-arrow-down" />
                  </a>
                </div>
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

                <h3>You're tired of the relentless job search</h3>
                <h4>We understand.</h4>
                <p>Which is why we designed the CareerMastery program.</p>
                <p id="#info">
                  {" "}
                  A 3-week high performance Job Search cohort that mimics life
                  in Tech.
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
                <div>
                  <h2>Our Job Search Methodology</h2>
                  <ul>
                    <li>1. Land Networking Calls</li>
                    <li>2. Convert Networking Calls into Job Referrals</li>
                    <li>
                      3. Convert Job Referrals into Phone Screen Interviews
                    </li>
                    <li>
                      4. Master Each Stage of the Interview Process to land
                      offers
                    </li>
                  </ul>
                </div>
                <h3
                  id="info"
                  className="mt-30"
                >
                  A 3-week, 6-hour Career Accelarator Cohort
                </h3>
                <h6
                  id="howItWorks"
                  className="mt-30"
                >
                  Every Wednesday, 7-9pm GMT
                </h6>
                <h2 className="py-10">Syllabus</h2>
                <Accordion
                  className="faq-accordion pt-10 pb-50 mt-10 wow fadeInUp delay-0-2s"
                  id="course-faq"
                  defaultActiveKey="collapse1"
                >
                  <WellernAccordion
                    eventName={"collapse1"}
                    title={"Week 1:Networking and LinkedIn Mastery"}
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
                            Importance of networking
                          </span>{" "}
                        </a>
                      </li>
                      <li>
                        <span className="title">
                          LinkedIn Essentials/LinkedIn Workshop
                        </span>{" "}
                      </li>
                      <li>
                        <span className="title">
                          {" "}
                          Online vs. In-Person Networking
                        </span>
                      </li>
                      <li>
                        <span className="title">
                          Building a strong LinkedIn network.
                        </span>
                      </li>
                      <li>
                        <span className="title">
                          Hands-on session to enhance LinkedIn profiles.
                        </span>
                      </li>
                    </ul>
                  </WellernAccordion>
                  <WellernAccordion
                    title={"Week 2: CV Building and Job Application"}
                    eventName={"collaps2"}
                    active={active}
                    onClick={() => onClick("collaps2")}
                  >
                    <ul className="course-video-list">
                      <li>
                        <span className="title">
                          Crafting Your Tech CV/ Cover Letters for Tech Roles{" "}
                        </span>{" "}
                      </li>
                      <li>
                        <span className="title">
                          What makes a good cover letters (example template)
                        </span>{" "}
                      </li>
                      <li>
                        <span className="title">
                          Tailoring cover letters to tech job applications.{" "}
                        </span>
                      </li>
                      <li>
                        <span className="title">
                          Job Search Strategy, Application Process/ Mock
                          Application Review
                        </span>
                      </li>
                      <li>
                        <span className="title">
                          Applicant Tracking Systems (ATS) and CV keywords.
                        </span>
                      </li>
                      <li>
                        <span className="title">
                          Review and provide feedback on participants' CV and
                          cover letters.{" "}
                        </span>
                      </li>
                    </ul>
                  </WellernAccordion>
                  <WellernAccordion
                    title={"Week 3: Interviewing and Negotiation "}
                    eventName={"collaps3"}
                    active={active}
                    onClick={() => onClick("collaps3")}
                  >
                    <ul className="course-video-list">
                      <li>
                        <span className="title"> Interview Preparation</span>{" "}
                      </li>
                      <li>
                        <span className="title">
                          Different types of tech interviews (technical,
                          behavioural, etc.).
                        </span>{" "}
                      </li>
                      <li>
                        <span className="title">Technical Interviews</span>
                      </li>
                      <li>
                        <span className="title">
                          Preparing for coding challenges.
                        </span>
                      </li>
                      <li>
                        <span className="title">
                          Creating STAR (Situation, Task, Action, Result)
                          stories.
                        </span>
                      </li>
                      <li>
                        <span className="title">
                          Negotiating job offers, benefits, and equity.
                        </span>
                      </li>
                    </ul>
                  </WellernAccordion>
                </Accordion>
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
                    <span className="price">sold out</span>
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginLeft: "20px",
                      }}
                      className="price"
                    >
                      300
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "#1F4ECE",
                    }}
                  >
                    or £40/m for 3 months
                  </p>
                  <p style={{ fontSize: "18px", fontWeight: "700" }}>
                    Start: Spring 2024
                  </p>
                  <ul className="course-details-list mb-25">
                    <li style={{ fontSize: "18px" }}>
                      <i className="far fa-file-alt" /> 3-week cohort
                    </li>
                    <li>
                      <i className="far fa-clock" /> <span>Times</span>{" "}
                      <b>7-9pm GMT (all recorded) </b>
                    </li>

                    <li>
                      <i className="far fa-clipboard" /> <span>Days</span>{" "}
                      <b>Every Wednesday</b>
                    </li>

                    <li>
                      <i className="fas fa-globe" />{" "}
                      <span>Live, group coaching sessions</span>{" "}
                    </li>
                    <p>
                      {" "}
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: "700",
                          color: "#1F4ECE",
                        }}
                      >
                        SOLD OUT
                      </p>{" "}
                    </p>
                  </ul>

                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf__8tMpnrhDQtGblc_o2ut9JOC1T0-UGSDRsI8KhgymoOKjQ/viewform?usp=sf_link">
                    <a className="theme-btn">
                      Join the waiting list
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
                </div>

                <div>
                  <p>
                    We break the job search down into milestones and tasks each
                    week, and go through the process together.
                  </p>
                </div>
                <div>
                  <a
                    href="#pricing"
                    className="theme-btn style-four"
                  >
                    Join for 3 payments of £40{" "}
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
