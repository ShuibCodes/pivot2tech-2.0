import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Head from "next/head";
import WellernAccordion from "../src/components/WellernAccordion";
import Layout from "../src/layout/Layout";
import Ebook from "../public/assets/images/ebook-last.png";
import reviewTwo from "../public/assets/images/review-two.png";
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
        <title>Freelance Web & Digital Marketing | Pivot2Tech</title>
        <meta
          property="og:url"
          content="https://pivot2tech.co.uk/course-details-freelance"
        />
        <meta
          property="og:type"
          content="website"
        />
        {/* <meta property="fb:app_id" content="your fb app id" /> */}
        <meta
          property="og:title"
          content="Freelance Bootcamp | Pivot2Tech "
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="og:description"
          content="With our comprehensive courses and experienced mentors, you'll be ready to land your first paying client in no time."
        />
        <meta
          property="og:image"
          content="https://stripe-camo.global.ssl.fastly.net/9f2416a67c351f3755de8a712be31f49509f642296f5207760427f25873fbd61/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a6446387854484e7756464a434e4578534d473536646a424566475a7358327870646d56664e45526e543274745633426a4e6a6c4a5a486844523259344f577477616b743030307055556a615a566f"
        />
      </Head>
      <section className="course-details-area pt-130 rpt-100">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-12">
              <div className="course-details-content">
                <section className="why-choose-section pb-130 rpb-100">
                  <div className="">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-lg-6">
                        <div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s">
                          <div className="section-title mb-25">
                            <h2>
                              <span style={{ color: "#1F4ECE" }}>
                                {" "}
                                Work whenever and wherever you want
                              </span>{" "}
                              join the new generation of freelancers
                            </h2>
                          </div>

                          <div>
                            <p>
                              Experience the freedom to work on exciting
                              projects, earn more, and work around YOUR
                              schedule.
                            </p>
                          </div>
                          <div href="/course-details">
                            <a
                              href="#results"
                              className="theme-btn style-four"
                            >
                              Show me how
                              <i className="fas fa-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mt-10 ">
                          <img
                            src="https://talent2africa.com/wp-content/uploads/2022/07/nomade-digital-T2A.jpg"
                            alt="Why Choose"
                            className="why-choose-one freelance-section"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="why-choose-section pt-120 rpt-90 pb-130 rpb-100">
                  <div className="">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-lg-6">
                        <div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s">
                          <div className="section-title mb-25">
                            <h2>The Ultimate Guide to Freelancing:</h2>
                          </div>

                          <div>
                            <ul
                              style={{ fontSize: "16px", padding: "5px 10px" }}
                              className="course-tags"
                            >
                              <li>
                                <span style={{ marginRight: "10px" }}>✅</span>
                                Comprehensive lessons on No-code Web Development
                              </li>
                              <li>
                                <span style={{ marginRight: "10px" }}>✅</span>
                                Learn the power of personal freelance branding
                              </li>
                              <li>
                                <span style={{ marginRight: "10px" }}>✅</span>
                                Learn how to find Clients both Online and
                                Offline
                              </li>
                              <li>
                                <span style={{ marginRight: "10px" }}>✅</span>
                                SEO, Google Ads and other Digital Marketing
                                skills
                              </li>
                              <li>
                                <span style={{ marginRight: "10px" }}>✅</span>
                                You will learn how to build Upwork profile
                                together
                              </li>
                              <li>
                                <span style={{ marginRight: "10px" }}>✅</span>
                                Reviewing many different Client Situation we can
                                be in and how to handle them
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>{" "}
                      {/* <div className="col-lg-6">
                        <div className="mt-10 ">
                          <img
                            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Why Choose"
                            className="why-choose-one freelance-section"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </section>

                <h2
                  id="results"
                  className="text-center"
                >
                  Student results 👇🏾
                </h2>
                <div className="p-5 freelance-bundle-reviews">
                  <div className="review-image">
                    <Image
                      width="60%"
                      height="25%"
                      layout="responsive"
                      objectFit="fit"
                      alt="testimonial for freelance bootcamp"
                      src="/assets/images/new-client-omar.png"
                    />
                  </div>
                  <div className="review-image">
                    <Image
                      width="100%"
                      height="80%"
                      layout="responsive"
                      objectFit="contain"
                      alt="testimonial for freelance bootcamp"
                      src="/assets/images/freelance-review-2.png"
                    />
                  </div>

                  <div className="review-image">
                    <Image
                      width="100%"
                      height="80%"
                      layout="responsive"
                      objectFit="contain"
                      alt="testimonial tweet for freelance course "
                      src="/assets/images/freelance-review.jpeg"
                    />
                  </div>
                </div>
                <div className="my-50">
                  <h3 className="text-center p-5">
                    What students have been building
                  </h3>
                  <div className="row coach-active justify-content-center">
                    <div className="col-lg-4 col-md-6 item development photography">
                      <img src="assets/images/student-work-mobile.png" />
                    </div>
                    <video
                      width="300"
                      height="300"
                      controls
                      autoPlay
                      muted
                    >
                      <source
                        src="assets/images/video.mp4"
                        type="video/mp4"
                      ></source>
                    </video>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="#pricing"
                    style={{
                      padding: "16px",
                      fontSize: "14px",
                      margin: "10px 0px",
                    }}
                    className="theme-btn"
                  >
                    Enrol now
                  </a>
                </div>
                <section className="why-choose-section pt-120 rpt-90 pb-90   rpb-100">
                  <div className="container">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-lg-6">
                        <div className=" ">
                          <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGl0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                            alt="Why Choose"
                            className="why-choose-one"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 pt-50">
                        <div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s">
                          <div className="section-title mb-25">
                            <h2>
                              Turn more pitches into projects with a strong
                              portfolio
                            </h2>
                          </div>

                          <div>
                            <p>
                              Your best pitch is always your best past work. We
                              teach you to show instead of tell by using strong
                              portfolio samples. Get the best possible samples
                              in the least amount of time so that more of your
                              pitches turn into projects.
                            </p>
                          </div>

                          <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSctqaesUP6GciZgM_yo7RcZop2Z4ykhtTaLdmc8j6B7OKE1SA/viewform?usp=sf_link"
                            className="theme-btn style-four"
                          >
                            Join the waiting list
                            <i className="fas fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div>
                  <p className="info-copy">
                    Our Freelance Web & Digital Marketing course is the perfect
                    way to get started.
                  </p>
                  <br />
                </div>

                <div>
                  <p className="info-copy">
                    Learn in-demand, recession-proof online skills to earn
                    £1,000/m extra
                  </p>
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
                          Week 1-2
                        </span>
                        <span className="title">
                          Comprehensive lessons on how to build a website with a
                          No-code tool, Webflow. With weekly projects &
                          homework.
                        </span>{" "}
                      </li>
                      <li>
                        <span
                          style={{ color: "#1F4ECE", marginRight: "10px" }}
                          className="duration"
                        >
                          Week 3-4
                        </span>
                        <span className="title">
                          Freelancing 101. How to find clients, price your
                          projects & market yourself.
                          <br></br>
                          <br></br>
                          Shopify & Ecommerce. How to build a live E-commerce
                          website using Shopify.
                        </span>{" "}
                      </li>
                      <li>
                        <span
                          style={{ color: "#1F4ECE", marginRight: "10px" }}
                          className="duration"
                        >
                          Week 5-6
                        </span>
                        <span className="title">
                          SEO (Search Engine Optimization). How to get a website
                          ranking on Google.
                          <br></br>
                          <br></br> A full guide on Paid ads (Google & Meta
                          Ads).
                        </span>{" "}
                      </li>
                      <li>
                        <span
                          style={{ color: "#1F4ECE", marginRight: "10px" }}
                          className="duration"
                        >
                          Week 7
                        </span>
                        <span className="title">
                          Projects & portfolio week. 1-1 support with your
                          projects and portfolio.
                          <br></br>
                          <br></br> This final project week gives you an
                          opportunity to showcase your skills, knowledge, and
                          expertise web & digital marketing.
                        </span>
                      </li>
                      <li>
                        <span
                          style={{ color: "#1F4ECE", marginRight: "10px" }}
                          className="duration"
                        >
                          Post-course
                        </span>
                        <span className="title">
                          Freelance Beginners Bundle. Free access to templates,
                          checklists & a comprehensive guide to Upwork .
                          <br />
                          <br />
                          By the end of the course, you will be have 3 projects
                          and a portfolio, ready to secure your first paying
                          client.
                          <br></br>
                          <br></br>
                          <strong style={{ color: "blue" }}>
                            Access to the recordings & Discord community will
                            also be available forever.
                          </strong>
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
                          src="assets/images/freelance.jpeg"
                          alt="Course Details"
                        />
                      </div>
                      <div className="price-off">
                        <span className="price">sold out</span>
                      </div>

                      <p className="bold">or 3 interest-free installments</p>
                      <ul className="course-details-list mb-25">
                        <li>
                          <i className="far fa-file-alt" />{" "}
                          <span>Course Level</span> <b>Beginner</b>
                        </li>
                        <li>
                          <i className="far fa-clock" /> <span>Duration</span>{" "}
                          <b>7 weeks</b>
                        </li>
                        <li>
                          <i className="far fa-clock" /> <span>When</span>{" "}
                          <b>18th Febraury 2024 </b>
                        </li>

                        <li>
                          <i className="fas fa-globe" /> <span></span>{" "}
                          <b>Sundays 7-9pm</b>
                        </li>
                        <p>
                          <i className="mt-5 text-center bold">4 spaces left</i>
                        </p>
                      </ul>

                      <a
                        href="https://buy.stripe.com/cN2dRL5G9awe9Hy7td"
                        style={{
                          padding: "11px",
                          fontSize: "12px",
                          margin: "10px 0px",
                        }}
                        className="theme-btn"
                      >
                        Secure your space
                      </a>
                    </div>
                  </div>
                </div>
                <div>
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
                </div>

                <h3>Your Instructor</h3>
                <div className="course-instructor pt-10 pb-55 wow fadeInUp delay-0-2s">
                  <div className="row align-items-center">
                    <div className="col-sm-4">
                      <div className="instructor-image">
                        <img
                          src="assets/images/shuayb.jpg"
                          alt="instructor-shuayb"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="instructor-details">
                        <h4>Shuayb</h4>
                        <span className="designations">
                          Senior Software Engineer
                        </span>
                      </div>
                      <p>
                        Self-taught Web Developer & Digital Marketer.He runs a{" "}
                        <a href="https://agreeddigital.com/">
                          {" "}
                          digital Agency{" "}
                        </a>
                        attracting high level clientele on day to day business.
                      </p>
                      <h5>Follow Me</h5>
                      <div className="social-style-two">
                        <a href="https://twitter.com/Shuayb__">
                          <i className="fab fa-twitter" />
                        </a>

                        <a href="https://www.instagram.com/__shuib__/?hl=en">
                          <i className="fab fa-instagram" />
                        </a>
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
