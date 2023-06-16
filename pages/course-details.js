import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Head from "next/head";
import Layout from "../src/layout/Layout";
import WellernAccordion from "../src/components/WellernAccordion";
import Blocks from "../src/components/fullstack-blocks";
const CourseDetails = () => {
  const [active, setActive] = useState(`collapse1`);
  const onClick = (value) => {
    console.log(value);
    setActive(value === active ? "" : value);
  };

  const [dismiss, setDismiss] = useState(true);
  const [email, setEmail] = useState("");
  const [noEmailError, setNoEmailError] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [formSubmitted, setFormSubmitted] = useState("not empty");

  const handleDismiss = () => {
    if (email === "") {
      setNoEmailError(true);
      return;
    } else {
      supabase
        .from("pivot2tech")
        .insert({ email: email, awareness: selectedOption })
        .single()
        .then(() => {
          window.localStorage.setItem("dismiss-social-modal", true);
          setDismiss(true);
        });
      setEmail("");
      setFormSubmitted("empty");
    }
  };

  return (
    <Layout>
      <Head>
        <title>Fullstack Web Development Course | Pivot2Tech</title>
        <meta
          property="og:url"
          content="https://pivot2tech.co.uk/course-details"
        />
        <meta
          property="og:type"
          content="website"
        />
        {/* <meta property="fb:app_id" content="your fb app id" /> */}
        <meta
          property="og:title"
          content="Fullstack Web Development Course | Pivot2Tech "
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="og:description"
          content="Our part-time program is designed with busy professionals in mind, so you can learn to code while maintaining your current lifestyle."
        />
        <meta
          property="og:image"
          content="https://images.techopedia.com/images/uploads/women-in-tech2.jpg?w=800&h=0&mode=max&quality=70&scale=both"
        />
      </Head>
      <section className="course-details-area pt-130 rpt-100">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-12">
              <div className="course-details-content">
                <div className="course-header">
                  <h6
                    style={{
                      color: "#1F4ECE",
                      fontSize: "24px",
                      marginLeft: "15px",
                    }}
                  >
                    11 spaces left!
                  </h6>
                </div>
                <h2>Fullstack Web Development Bootcamp</h2>
                <h5>Part time, 13-weeks</h5>

                <div className="image mb-35">
                  <Image
                    src="/assets/images/women-in-tech.jpeg"
                    alt="course-details"
                    width="735"
                    height="430"
                  />
                </div>

                <div className="">
                  <div className="">
                    <ul
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        marginLeft: "8px",
                      }}
                    >
                      <li>7-9pm BST</li>
                      <p
                        className="bold"
                        style={{ fontSize: "18px" }}
                      >
                        June 22nd
                      </p>
                    </ul>
                  </div>
                  <a
                    href="#pricing"
                    style={{
                      padding: "10px",
                      fontSize: "11px",
                      margin: "10px 0px",
                      backgroundColor: "#0084DF",
                    }}
                    className="theme-btn"
                  >
                    Enroll Today
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>

                <Accordion
                  className="faq-accordion pt-10 pb-50 wow fadeInUp delay-0-2s"
                  id="course-faq"
                  defaultActiveKey="collapse1"
                >
                  <WellernAccordion
                    eventName={"collapse1"}
                    title={"Curriculum Breakdown"}
                    active={active}
                    onClick={() => onClick("collapse1")}
                  >
                    <ul className="course-video-list">
                      <li>
                        <span
                          style={{ color: "#1F4ECE", marginRight: "10px" }}
                          className="duration"
                        >
                          Week 1-3
                        </span>
                        <span className="title">HTML,CSS & source control</span>{" "}
                      </li>
                      <li>
                        <span
                          style={{ color: "#1F4ECE", marginRight: "10px" }}
                          className="duration"
                        >
                          Week 4-6
                        </span>
                        <span className="title">
                          JavaScript 101. Object oriented programming, loops,
                          functions, arrays, & DOM
                        </span>{" "}
                      </li>
                      <li>
                        <span
                          style={{ color: "#1F4ECE", marginRight: "10px" }}
                          className="duration"
                        >
                          Week 7-9
                        </span>
                        <span className="title">
                          Front-end Development. More JavaScript, REST API and
                          diving into REACT & Databases.{" "}
                        </span>{" "}
                      </li>
                      <li>
                        <span
                          style={{ color: "#1F4ECE", marginRight: "10px" }}
                          className="duration"
                        >
                          Week 10-12
                        </span>
                        <span className="title">
                          Building projects with Test Driven Development and
                          deploying them live on the web
                        </span>
                      </li>
                      <li>
                        <span
                          style={{ color: "#1F4ECE", marginRight: "10px" }}
                          className="duration"
                        >
                          Week 13
                        </span>
                        <span className="title">Portfolio Week</span>
                      </li>
                      <li>
                        <span
                          style={{ color: "#1F4ECE", marginRight: "10px" }}
                          className="title"
                        >
                          Post-course
                        </span>
                        <span className="duration">
                          Support & guidance from our alumni & teachers in
                          navigating the job market, CV's & job applications
                        </span>
                      </li>
                    </ul>
                  </WellernAccordion>
                </Accordion>

                <div className="col-lg-4">
                  <div className="course-sidebar rmt-75">
                    <div className="widget widget-course-details wow fadeInUp delay-0-2s">
                      <div className="widget-video">
                        <img
                          id="pricing"
                          src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwYm9vdGNhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
                          alt="Course Details"
                        />
                      </div>
                      <div className="price-off">
                        <span className="price">299</span>
                        <span className="bold">
                          or 3 interest-free installments
                        </span>
                      </div>
                      <ul className="course-details-list mb-25">
                        <strong
                          style={{
                            color: "blue",
                            fontStyle: "italic",
                            fontSize: "18px",
                          }}
                          className="text-center"
                        >
                          All Classes Are Recorded
                        </strong>

                        <li>
                          <i className="far fa-file-alt" />{" "}
                          <span>Course Level</span> <b>Beginner</b>
                        </li>
                        <li>
                          <i className="far fa-clock" /> <span>Duration</span>{" "}
                          <b>13 weeks</b>
                        </li>
                        <li>
                          <i className="far fa-clock" /> <span>When</span>{" "}
                          <b>June 22nd </b>
                        </li>

                        <li>
                          <i className="fas fa-globe" /> <span></span>{" "}
                          <b>Tuesdays 7-9pm & Saturdays 12:30-14:30PM GMT</b>
                        </li>
                        <p>International Students are Welcome</p>
                        <p style={{ color: "blue" }}>
                          Click Klarna option to pay in 3 installments
                        </p>
                      </ul>

                      <a
                        href="https://buy.stripe.com/fZe7tn7OhawebPGcN2"
                        style={{
                          padding: "11px",
                          fontSize: "12px",
                          margin: "10px 0px",
                        }}
                        className="theme-btn"
                      >
                        Enroll Today!
                      </a>
                    </div>
                  </div>
                </div>

                <Blocks />

                <div
                  style={{ margin: "auto", textAlign: "center" }}
                  className="m-auto py-50"
                >
                  <p className="info-copy text-center">
                    Receive a personalized certificate to enance your CV
                  </p>
                  <a
                    href="#pricing"
                    style={{
                      padding: "10px",
                      fontSize: "11px",
                      margin: "10px 0px",
                      backgroundColor: "#0084DF",
                    }}
                    className="theme-btn"
                  >
                    Enroll Today
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
                <div className="container">
                  <div className="newsletter-container">
                    <div className="section-title mb-20">
                      <span className="sub-title mb-25">Newsletter</span>
                      <h2>Don't Miss Our Updates</h2>
                    </div>
                    <p>
                      Stay up to date on Pivot2Tech's updates and free webinars
                      surrounding coding jobs and freelancing tips.
                    </p>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="form-newsletter"
                      action="#"
                    >
                      <div className="newsletter-radios mb-25">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="hero-wekly"
                            name="example1"
                            defaultChecked=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="hero-wekly"
                          >
                            New Cohorts
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="hero-monthly"
                            name="example1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="hero-monthly"
                          >
                            Discounts
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="hero-monthly"
                            name="example1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="hero-monthly"
                          >
                            New Courses
                          </label>
                        </div>
                      </div>
                      {formSubmitted === "empty" ? (
                        <p>Thanks! we'll be in touch soon </p>
                      ) : (
                        <div className="newsletter-email">
                          <label htmlFor="email">
                            <i className="far fa-envelope" />
                          </label>
                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            id="email"
                            type="email"
                            placeholder="Enter Email Address"
                            required=""
                            className={
                              noEmailError
                                ? "mb-3 border border-danger"
                                : "mb-3"
                            }
                          />

                          <button
                            type="button"
                            data-dismiss="modal"
                            style={{ height: "60px", marginLeft: "15px" }}
                            className="theme-btn"
                            onClick={handleDismiss}
                          >
                            Subscribe
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                </div>

                <h2 className="py-1 my-20">Your Instructors</h2>

                <div className="p-20 p-md-1 row">
                  <div className="col-md-6">
                    <div className="course-instructor pt-10 pb-55 wow fadeInUp delay-0-2s">
                      <div className="row align-items-center">
                        <div className="col-sm-5">
                          <div className="instructor-image">
                            <Image
                              src="/assets/images/abdulkadir.jpeg"
                              width="270"
                              height="270"
                              alt="instructor-image"
                            />
                          </div>
                        </div>
                        <div className="">
                          <div className="instructor-details">
                            <h4>Abdulkadir Maxamed</h4>
                            <span className="designations">
                              Senior Software Engineer
                            </span>
                          </div>
                          <p style={{ maxWidth: "70%" }}>
                            An experienced Software Engineer who works for a
                            global technology consultancy company
                          </p>
                          <h5>Follow Me</h5>
                          <div className="social-style-two">
                            <a href="https://twitter.com/Shuayb__">
                              <i className="fab fa-twitter" />
                            </a>

                            <a href="https://linktr.ee/shuaybcodes">
                              <i className="fab fa-instagram" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* here */}
                  <div className="col-md-6">
                    <div className="course-instructor pt-10 pb-55 wow fadeInUp delay-0-2s">
                      <div className="row align-items-center">
                        <div className="col-sm-5">
                          <div className="instructor-image">
                            <Image
                              src="/assets/images/jamie-pic.jpeg"
                              width="270"
                              height="270"
                              alt="instructor-image"
                            />
                          </div>
                        </div>
                        <div className="">
                          <div className="instructor-details">
                            <h4>Jamie H</h4>
                            <span className="designations">
                              Software Engineer & Mentor
                            </span>
                          </div>
                          <p style={{ maxWidth: "70%" }}>
                            Jamie is an Web Developer and digital nomad. He
                            helps teach and mentor students in weekly booster
                            sessions & CV clinics.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="why-choose-section pt-120 rpt-90 pb-130 rpb-100">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                  <div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s">
                    <div className="section-title mb-25">
                      <h2>
                        Passionate teachers, innovative methods & modern tools
                      </h2>
                    </div>

                    <ul className="list-style-four pt-5 pb-35">
                      <li>Small cohorts with 1 teacher for 10 students</li>
                      <li>Weekly projects using real-life data</li>
                      <li>Get real-time answers to never be stuck</li>
                      <li>Lifetime Access to Pivot2Techs resources </li>
                      <li>CV and Job Application support</li>
                    </ul>
                    <div>
                      <a
                        href="#pricing"
                        className="theme-btn style-four"
                      >
                        Secure a spot
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
          </section>
        </div>
      </section>
    </Layout>
  );
};
export default CourseDetails;
