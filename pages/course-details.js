import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Head from "next/head";
import Layout from "../src/layout/Layout";
import WellernAccordion from "../src/components/WellernAccordion";
import Blocks from "../src/components/fullstack-blocks";
import Ebook from "../public/assets/images/ebook-last.png";
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
                <div className="course-header"></div>

                <section className="why-choose-section rpb-100">
                  <div className="container">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-lg-6">
                        <div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s">
                          <div className="section-title mb-25">
                            <h2>
                              Launch your career with our Web Development course
                            </h2>
                          </div>

                          <p>
                            Learn to build web applications from scratch and
                            land your dream job as Developer without paying
                            thousands for a degree s.
                          </p>
                          <div>
                            <a
                              href="https://docs.google.com/forms/d/e/1FAIpQLSeFgRN8sY32s3E-Qqvmtbpa9Oc5kka_5Nd-_8OTqTepcqMF9g/viewform?usp=sf_link"
                              className="theme-btn style-four"
                            >
                              Join Waiting List
                              <i className="fas fa-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mt-10 ">
                          <img
                            src="https://pivot2tech.co.uk/_next/image?url=%2Fassets%2Fimages%2Fwomen-in-tech.jpeg&w=1920&q=75"
                            alt="Why Choose"
                            className="why-choose-one"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="why-choose-section pt-120 rpt-90 pb-130 rpb-100">
                  <div className="container">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-lg-6">
                        <div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s">
                          <div className="section-title mb-25">
                            <h2>
                              Passionate teachers, innovative methods & modern
                              tools
                            </h2>
                          </div>

                          <ul className="list-style-four pt-5 pb-35">
                            <li>
                              Receive a personalized certificate to enance your
                              CV
                            </li>
                            <li>Weekly projects using real-life data</li>
                            <li>Get real-time answers to never be stuck</li>
                            <li>
                              Lifetime Access to course material & lesson
                              recordings{" "}
                            </li>
                            <li>CV and Job Application support</li>
                          </ul>
                          <div>
                            <a
                              href="https://docs.google.com/forms/d/e/1FAIpQLSeFgRN8sY32s3E-Qqvmtbpa9Oc5kka_5Nd-_8OTqTepcqMF9g/viewform?usp=sf_link"
                              className="theme-btn style-four"
                            >
                              Join Waiting List
                              <i className="fas fa-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="container py-100">
                        <h3 className="text-center p-5">
                          Subscribe & get the E-book FREE
                        </h3>
                        <div className="d-md-flex align-items-center justify-content-center p-10">
                          <Image
                            src={Ebook}
                            alt="ebook"
                            objectFit="contian"
                            width={220}
                            height={300}
                          />

                          <div className="newsletter-container md:pl-5">
                            <form
                              onSubmit={(e) => e.preventDefault()}
                              className="form-newsletter"
                              action="#"
                            >
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
                                    placeholder="Enter Email "
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
                                    style={{
                                      height: "60px",
                                      marginLeft: "15px",
                                    }}
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
                      </div>{" "}
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
                <Blocks />

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
                          Applications open August
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
                          <b>October 2023 </b>
                        </li>

                        <li>
                          <i className="fas fa-globe" /> <span></span>{" "}
                          <b>
                            Tuesdays: 7-9pm GMT <br></br> Saturdays: 12-pm GMT
                          </b>
                        </li>
                        <p>International Students are Welcome</p>
                        <p style={{ color: "blue" }}>
                          Ony 80 spaces, Add your email to be notified early
                        </p>
                      </ul>

                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeFgRN8sY32s3E-Qqvmtbpa9Oc5kka_5Nd-_8OTqTepcqMF9g/viewform?usp=sf_link"
                        style={{
                          padding: "11px",
                          fontSize: "12px",
                          margin: "10px 0px",
                        }}
                        className="theme-btn"
                      >
                        Join Waiting List
                      </a>
                    </div>
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
                              src="/assets/images/moin.png"
                              width="270"
                              height="270"
                              alt="instructor-image"
                            />
                          </div>
                        </div>
                        <div className="">
                          <div className="instructor-details">
                            <h4>Moin Bukhari</h4>
                            <span className="designations">
                              Web Developer & Mentor
                            </span>
                          </div>
                          <p style={{ maxWidth: "70%" }}>
                            Jamie is an Web Developer, Tutor & Startup founder,
                            building{" "}
                            <a
                              style={{ color: "blue" }}
                              href="https://www.muddakir.app/"
                            >
                              Muddakir,
                            </a>{" "}
                            an arabic vocabulary app to learn Quran. He helps
                            with our Discord community & teaches sessions
                            throughout the week
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default CourseDetails;
