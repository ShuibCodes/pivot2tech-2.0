import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Head from "next/head";
import WellernAccordion from "../src/components/WellernAccordion";
import Layout from "../src/layout/Layout";

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
                <div className="course-header">
                  <span className="category">Freelance</span>
                </div>
                <h2>Freelance Web & Digital Marketing</h2>
                <h6
                  style={{
                    color: "#1F4ECE",
                    fontSize: "24px",
                    marginLeft: "15px",
                  }}
                >
                  7 spaces left!
                </h6>

                <div className="image mb-35">
                  <img
                    src="https://stripe-camo.global.ssl.fastly.net/9f2416a67c351f3755de8a712be31f49509f642296f5207760427f25873fbd61/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a6446387854484e7756464a434e4578534d473536646a424566475a7358327870646d56664e45526e543274745633426a4e6a6c4a5a486844523259344f577477616b743030307055556a615a566f"
                    alt="Course Details"
                    style={{ width: "70%" }}
                  />
                </div>

                <div className="">
                  <div className="">
                    <ul
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        marginLeft: "8px",
                      }}
                    >
                      <li>Part time - 7 weeks </li>
                    </ul>
                  </div>
                  <p
                    className="bold"
                    style={{ fontSize: "18px" }}
                  >
                    June 22nd
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
                <p style={{ fontSize: "20px", fontWeight: "700" }}>
                  The Ultimate Guide to Freelancing:
                  <ul
                    style={{ fontSize: "16px", padding: "5px 10px" }}
                    className="course-tags"
                  >
                    <li>
                      <span style={{ marginRight: "10px" }}>✅</span>
                      Earn Comprehensive tutorials on Low-code Web Development
                    </li>
                    <li>
                      <span style={{ marginRight: "10px" }}>✅</span>
                      Learn the power of personal freelance branding
                    </li>
                    <li>
                      <span style={{ marginRight: "10px" }}>✅</span>
                      Learn how to find Clients both Online and Offline
                    </li>
                    <li>
                      <span style={{ marginRight: "10px" }}>✅</span>
                      SEO, Google Ads and other Digital Marketing skills
                    </li>
                    <li>
                      <span style={{ marginRight: "10px" }}>✅</span>
                      You will learn how to build Upwork profile together
                    </li>
                    <li>
                      <span style={{ marginRight: "10px" }}>✅</span>
                      Reviewing many different Client Situations, we can be in
                      and how to handle them
                    </li>
                  </ul>
                </p>
                <h4 className="text-center">Student results 👇🏾</h4>
                <div className="p-10 freelance-bundle-reviews">
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

                  <div className="review-image">
                    <Image
                      width="100%"
                      height="80%"
                      layout="responsive"
                      objectFit="contain"
                      alt="Student finding 2 clients using the freelance bundle"
                      src="/assets/images/review-2.png"
                    />
                  </div>
                </div>
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
                          Or 3 interest-free installments
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
                          id="price"
                        >
                          All Classes Are Recorded
                        </strong>

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
                          <b>June 22nd </b>
                        </li>

                        <li>
                          <i className="fas fa-globe" /> <span></span>{" "}
                          <b> Sundays 7-9PM GMT</b>
                        </li>
                        <p>International Students are Welcome</p>

                        <p style={{ color: "blue" }}>
                          Click Klarna option to pay in 3 installments
                        </p>
                      </ul>

                      <a
                        href="https://buy.stripe.com/eVacNH9Wp1ZIbPG4gA"
                        style={{
                          padding: "10px",
                          fontSize: "11px",
                          margin: "10px 0px",
                        }}
                        className="theme-btn"
                      >
                        Enroll Today
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="info-copy">
                    Our Freelance Web & Digital Marketing course is the perfect
                    way to get started.
                  </p>
                  <br />
                  <p className="info-copy-small">
                    With our comprehensive courses and experienced mentors,
                    you'll be ready to land your first paying client in no time.
                  </p>
                </div>

                <section className="why-choose-section pt-120 rpt-90 pb-130 rpb-100">
                  <div className="container">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-lg-6">
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
                          <div href="/course-details">
                            <a
                              href="https://buy.stripe.com/eVacNH9Wp1ZIbPG4gA"
                              className="theme-btn style-four"
                            >
                              Enroll Today
                              <i className="fas fa-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className=" ">
                          <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGl0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                            alt="Why Choose"
                            className="why-choose-one"
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
                            <h2>
                              Handle any client situation with actual experience
                            </h2>
                          </div>

                          <div>
                            <p>
                              Working with a wide variety of clients means
                              you’ll have to be prepared for anything.Because we
                              give you real project experience while teaching
                              you how to handle any client scenario, you won’t
                              be left scrambling when things do get challenging.
                            </p>
                          </div>
                          <div href="/course-details">
                            <a
                              href="https://buy.stripe.com/eVacNH9Wp1ZIbPG4gA"
                              className="theme-btn style-four"
                            >
                              Enroll Today
                              <i className="fas fa-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mt-10 ">
                          <img
                            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Why Choose"
                            className="why-choose-one freelance-section"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div>
                  <p className="info-copy">
                    Learn in-demand, recession-proof online skills to earn a
                    side income online
                  </p>
                  <p
                    style={{ marginTop: "-18px" }}
                    className="info-copy"
                  >
                    From SEO to low-code web development
                  </p>
                </div>
                <h3>Course Curriculum </h3>
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
                          Web Development Basics. HTML, CSS & TailwindCS.
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
                          Freelancing in Web Development with Low-code.
                          Comprehensive guide to Webflow.
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
                          Freelancing 101 - How to find clients & tools of the
                          trade
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
                          SEO (Search Engine Optimization) & Ecommerce
                          (Shopify).
                          <br />
                          <br />
                          You Will learn the key areas of SEO, understanding
                          keywords, on-page optimization, technical SEO and
                          more. This will tie in directly with Ecommerce, and
                          you will build your own demo online store
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
                          client. Access to the recordings will also be
                          available forever.
                        </span>
                      </li>
                    </ul>
                  </WellernAccordion>
                </Accordion>

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

                        <a href="https://linktr.ee/shuaybcodes">
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                      <div
                        style={{ marginTop: "20px" }}
                        className="text-center"
                      >
                        <h4>Next cohort: June 22nd</h4>
                      </div>
                      <div
                        style={{ margin: "10px" }}
                        className="text-center"
                      >
                        <a href="https://buy.stripe.com/eVacNH9Wp1ZIbPG4gA">
                          <a
                            style={{ fontSize: "13px" }}
                            className="theme-btn"
                          >
                            Enroll Today
                          </a>
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
