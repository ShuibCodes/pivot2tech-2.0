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
  return (
    <Layout>
      <Head>
        <title>Freelance Bootcamp | Pivot2Tech</title>
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
            <div className="col-lg-8">
              <div className="course-details-content">
                <div className="course-header">
                  <span className="category">Freelance</span>
                </div>
                <h2>Freelance Bootcamp</h2>
                <h3>7 Weeks</h3>

                <div className="image mb-35">
                  <img
                    src="https://stripe-camo.global.ssl.fastly.net/9f2416a67c351f3755de8a712be31f49509f642296f5207760427f25873fbd61/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a6446387854484e7756464a434e4578534d473536646a424566475a7358327870646d56664e45526e543274745633426a4e6a6c4a5a486844523259344f577477616b743030307055556a615a566f"
                    alt="Course Details"
                  />
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
                      How to begin from scratch and quickly build a portfolio
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
                      alt="testimonial for freelance bundle"
                      src="/assets/images/review-1.png"
                    />
                  </div>

                  <div className="review-image">
                    <Image
                      width="100%"
                      height="80%"
                      layout="responsive"
                      objectFit="contain"
                      alt="testimonial tweet for freelance bundle "
                      src="/assets/images/review-3.png"
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

                <div>
                  <p className="info-copy">
                    Our Freelance Bootcamp is the perfect way to get started.
                  </p>
                  <br />
                  <p className="info-copy-small">
                    With our comprehensive courses and experienced mentors,
                    you'll be ready to land your first paying client in no time.
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
                          SEO (Search Engine Optimization) & Ecommerce (Shopify)
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
                          checklists & a comprehensive guide to Upwork{" "}
                        </span>
                      </li>
                    </ul>
                  </WellernAccordion>
                </Accordion>
                <div className="py-20">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdeO7J7yLaY8721yXjyUZEbU_zJW_Y42S8YoTLkCnSGcpiefA/viewform?usp=sf_link"
                    style={{
                      padding: "10px",
                      fontSize: "11px",
                      margin: "10px 0px",
                    }}
                    className="theme-btn"
                  >
                    Reserve your space
                  </a>
                </div>
                <h3>Your Instructor</h3>
                <div className="course-instructor pt-10 pb-55 wow fadeInUp delay-0-2s">
                  <div className="row align-items-center">
                    <div className="col-sm-5">
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
                        Self-taught fullstack developer. Runs a digital Agency
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
                        <h4>Next cohort: June 2023</h4>
                      </div>
                      <div
                        style={{ margin: "10px" }}
                        className="text-center"
                      >
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdeO7J7yLaY8721yXjyUZEbU_zJW_Y42S8YoTLkCnSGcpiefA/viewform?usp=sf_link">
                          <a
                            style={{ fontSize: "13px" }}
                            className="theme-btn"
                          >
                            Join Waiting List
                          </a>
                        </a>
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
                    src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwYm9vdGNhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
                    alt="Course Details"
                  />
                </div>
                <div className="price-off">
                  <span className="price">200</span>
                  <span className="bold">OR £50/month - 4 months</span>
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
                    <i className="far fa-file-alt" /> <span>Course Level</span>{" "}
                    <b>Beginner</b>
                  </li>
                  <li>
                    <i className="far fa-clock" /> <span>Duration</span>{" "}
                    <b>7 weeks</b>
                  </li>
                  <li>
                    <i className="far fa-clock" /> <span>When</span>{" "}
                    <b>June 2023 </b>
                  </li>

                  <li>
                    <i className="fas fa-globe" /> <span></span>{" "}
                    <b>Thursday & Sundays 7-9PM GMT</b>
                  </li>
                  <p>(Times may change during Ramadan)</p>
                </ul>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdeO7J7yLaY8721yXjyUZEbU_zJW_Y42S8YoTLkCnSGcpiefA/viewform?usp=sf_link"
                  style={{
                    padding: "10px",
                    fontSize: "11px",
                    margin: "10px 0px",
                  }}
                  className="theme-btn"
                >
                  Reserve your space
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default CourseDetails;
