import Link from "next/link";

import Layout from "../src/layout/Layout";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import Slider from "react-slick";
import FAQs from "../src/components/FAQ";
import Banner from "../src/components/Banner";
import { Accordion, Nav, Tab } from "react-bootstrap";
import WellernAccordion from "../src/components/WellernAccordion";
import Index1WorkStepSlider from "../src/components/slider/Index1WorkStepSlider";
import { index1EventWrap, index1Testimonial } from "../src/sliderProps";
import Advertise from "../src/components/Advertise";
import { useState } from "react";
import Team from '../src/components/team'
import Tweets from "../src/components/tweets";


const Index1Isotope = dynamic(
  () => import("../src/components/isotope/Index1Isotope"),
  {
    ssr: false,
  }
);

const Index = () => {
  const [active, setActive] = useState(false);
  const [activeFreelance, setActiveFreelance] = useState(false);

  const onClick = (value) => {
    console.log(value);
    setActive(value === active ? "" : value);
  };

  const onClickFreelance = (value) => {
    console.log(value);
    setActive(value === activeFreelance ? "" : value);
  };

  return (
    <Layout header={1} footer={1}>
      <Head>
        <title>Pivot2Tech Bootcamp 🚀</title>
        <meta property="og:url" content="https://pivot2tech.co.uk/" />
        <meta property="og:type" content="website" />
        {/* <meta property="fb:app_id" content="your fb app id" /> */}
        <meta property="og:title" content="Pivot2Tech Bootcamp " />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:description"
          content="Part-time, affordable Tech Bootcamp ⌛️ Beginner →  Software Engineer or Freelancer 🌎 in 3 months! Community of 160+ students 🎯"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwYm9vdGNhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />
      </Head>
      <section className="hero-section rel z-1 pt-150 rpt-135 pb-75 rpb-100">
        {/* <Banner /> */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content rpt-25 rmb-75">
                <span className="sub-title style-two mb-20 wow fadeInUp delay-0-2s ">
                  Resgister your interest
                </span>
                <h3 className="mb-20 wow fadeInUp delay-0-4s">
                  Launch your{" "}
                  <span style={{ color: "#1F4ECE" }}>tech career,</span> join
                  our coding bootcamp 🚀
                </h3>

                <p className="wow fadeInUp delay-0-6s">
                  Change careers and start your journey as a web developer with
                  our{" "}
                  <span style={{ color: "#1F4ECE", fontWeight: "700" }}>
                    part-time, remote{" "}
                  </span>
                  courses. Learn the skills to freelance or a Job in tech!
                </p>
                <span
                  style={{
                    marginTop: "10px",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Latest student landed a £35k role!
                </span>
                <div className="hero-btn-group">
                  <div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
            
                      <a href="#courses-group" className="theme-btn grab-course">
                        Grab your course
                        <i className="fas fa-arrow-right" />
                      </a>
                    
                  </div>
                  <div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
                    <a
                      href="#curriculum"
                      style={{ backgroundColor: "#1F4ECE" }}
                      className="theme-btn"
                    >
                      View Curriculum
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-right-images mobile-hero text-lg-right wow fadeInUp delay-0-2s">
                <img src="assets/images/hero-image.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Features Section Start */}

      {/* Features Section End */}
      {/* About Section Start */}
      <div className="advertise-mobile">
        <Advertise />
      </div>

      {/* About Section End */}
      {/* Coach Section Start */}
      <section
        id="what-learn"
        className="coach-section rel z-1 pt-120 rpt-90 pb-100 rpb-70 bg-lighter"
      >
        <div className="container cards-title pb-120">
          <h3 className="text-center cards-title-text ">
            Build your dream career with our tech bootcamps
          </h3>
          <p className="text-center  cards-paragraph "></p>
          <div className="text-center" style={{ margin: "0 auto" }}>
            <ul style={{ fontSize: "22px" }} className="list-style-four">
              <li style={{ fontSize: "22px" }}>Evening Zoom Lessons   
              <span style={{ color: "#1F4ECE", marginLeft:"6px" }}>
                 2 days a week
                 </span>
                 </li>
              <li style={{ fontSize: "22px" }}>For complete beginners</li>
            </ul>
            <ul style={{ fontSize: "22px" }} className="list-style-four">
              <li style={{ fontSize: "22px" }}>
                {" "}
                Community of over 160+ students!
              </li>
            </ul>
          </div>
        </div>
        <div className="webinar-container">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1eU4u5y9MetnIu61Bz-4RvEBgDNSVUazPQc3_bFErkzoAdw/viewform?usp=sf_link">
          <img className="webinar-image" alt="webinar-image"  src="/assets/images/webinar.png"/>
          </a>
        </div>
        <div className="section-title text-center">
          <span className="sub-title mb-15">Testimonials</span>
          <h2>What Our Students Say</h2>
        </div>
        <Tweets/>
        
                  
        <div id="courses-group" className="container">
          <div className="row coach-active justify-content-center">
            <div className="col-lg-4 col-md-6 item development photography">
              <div
                id="what-learn"
                className="coach-item wow fadeInUp delay-0-4s"
              >
                <div className="coach-image">
                  <Link href="/course-grid">
                    <a style={{ fontSize: "11px" }} className="category">
                      13 Weeks
                    </a>
                  </Link>
                  <img
                    src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwYm9vdGNhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="fullstack bootcamp"
                  />
                </div>
                <div className="coach-content">
                  <span className="label">Online Lessons</span>
                  <h4>
                    <Link href="/">Fullstack Web Development</Link>
                  </h4>
                  <div className="ratting-price">
                    <span className="bold" style={{ fontSize: "13px" }}>
                      Tuesday 7-9pm & Saturdays 12:30-14:30 GMT
                    </span>
                  </div>
                  <p style={{ fontSize: "20px", color: "blue" }}>
                    <strong> Sorry, We're at Capacity!</strong>
                  </p>
                  <p style={{ fontSize: "18px", color: "black" }}>
                    <strong>Next Cohort: 15th March </strong>
                  </p>
                  <Link href="https://forms.gle/5A3KUHuDvGn1ZkTC9">
                    <a
                      style={{
                        padding: "10px",
                        fontSize: "11px",
                        margin: "10px 0px",
                      }}
                      className="theme-btn"
                    >
                      Register your interest
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <ul style={{ marginTop: "10px" }} className="course-tags">
                    <li>
                      {" "}
                      <span style={{ marginRight: "8px" }}>💻</span> 4 real-life
                      projects
                    </li>
                    <li>
                      {" "}
                      <span style={{ marginRight: "8px" }}>👨‍🏫</span>Homework and
                      project review
                    </li>
                    <li>
                      {" "}
                      <span style={{ marginRight: "8px" }}>👨‍🔧👩‍🔧</span> Live chat
                      support
                    </li>
                    <li>
                      {" "}
                      <span style={{ marginRight: "8px" }}>📆</span> Weekly
                      deadlines
                    </li>
                    <li>
                      {" "}
                      <span style={{ marginRight: "8px" }}>∞ </span>Lifetime
                      access
                    </li>
                  </ul>
                  <Link href="/course-details">
                    <a
                      style={{
                        padding: "10px",
                        fontSize: "9px",
                        margin: "10px 0px",
                        backgroundColor: "#0084DF",
                      }}
                      className="theme-btn"
                    >
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 item design technology">
              <div className="coach-item wow fadeInUp delay-0-6s">
                <div className="coach-image">
                  <Link href="/course-grid">
                    <a style={{ fontSize: "11px" }} className="category">
                      13 Weeks
                    </a>
                  </Link>
                  <img src="assets/images/digital-nomad-3.jpg" alt="Coach" />
                </div>
                <div className="coach-content">
                  <span className="label">Online Lessons</span>
                  <h4>
                    <Link href="/course-details-freelance">
                      Freelance Web Development
                    </Link>
                  </h4>
                  <div className="ratting-price">
                    <span className="bold" style={{ fontSize: "13px" }}>
                      Thursday & Sundays 7-9pm
                    </span>
                  </div>
                  <p style={{ fontSize: "20px", color: "blue" }}>
                    <strong> Sorry, We're at Capacity!</strong>
                  </p>
                  <p style={{ fontSize: "18px", color: "black" }}>
                    <strong>Next Cohort: 15th March </strong>
                  </p>
                  <Link href="https://forms.gle/5A3KUHuDvGn1ZkTC9">
                    <a
                      style={{
                        padding: "10px",
                        fontSize: "11px",
                        margin: "10px 0px",
                      }}
                      className="theme-btn"
                    >
                      Register your interest
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <ul className="course-tags">
                    <li>
                      {" "}
                      <span style={{ marginRight: "8px" }}> 💰💰</span>Earn
                      extra £800/m Freelancing part time
                    </li>
                    <li>
                      {" "}
                      <span style={{ marginRight: "8px" }}> 💻</span>Learn SEO &
                      Low-code Web Design
                    </li>
                    <li>
                      {" "}
                      <span style={{ marginRight: "8px" }}>🛠</span> 5 Website
                      templates
                    </li>
                    <li>
                      {" "}
                      <span style={{ marginRight: "8px" }}> 🧭</span>Blueprint
                      on how to market yourself online
                    </li>
                    <li>
                      {" "}
                      <span style={{ marginRight: "8px" }}>∞</span> Lifetime
                      access to{" "}
                      <Link href="/product-details">
                        Beginners Freelance bundle
                      </Link>
                    </li>
                  </ul>
                  <Link href="/course-details-freelance">
                    <a
                      style={{
                        padding: "10px",
                        fontSize: "11px",
                        margin: "10px 0px",
                      }}
                      className="theme-btn"
                    >
                      Learn more
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 item design technology">
              <div className="coach-item wow fadeInUp delay-0-6s">
                <div className="coach-image">
                  <img
                    src="https://bigthink.com/wp-content/uploads/2022/06/AdobeStock_323910609.jpeg"
                    alt="freelance-bundle"
                  />
                </div>
                <div className="coach-content">
                  <span className="label">Full Guide</span>
                  <h4>
                    <Link href="/course-details">
                      Beginners Freelancing Guide
                    </Link>
                  </h4>
                  <div className="ratting-price">
                    <span className="price">28</span>
                  </div>
                  <p>Learn to Freelance, Be Your Own Boss!</p>
                  <ul className="coach-footer">
                    <li>
                      <i className="far fa-file-alt" />
                      <span>How to find clients 💰</span>
                      <p>
                        {" "}
                        <i className="far fa-file-alt" />5 Website templates-
                        (worth £160+)
                      </p>
                      <p>
                        {" "}
                        <i className="far fa-file-alt" />
                        Video guides to deploy no-code Websites
                      </p>
                    </li>
                  </ul>
                  <Link href="/product-details">
                    <a
                      style={{
                        padding: "10px",
                        fontSize: "11px",
                        margin: "10px 0px",
                      }}
                      className="theme-btn"
                    >
                      Learn More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        {/* Curriculum */}
        <div id="curriculum">
          <div className="curriculum-title">
            <h5 className=" px-4">
              Online,{" "}
              <span style={{ color: "#1F4ECD" }}>part-time schedule</span>
            </h5>
            <h4 style={{ fontSize: "25px" }} className="px-4 ">
              Check out what our curriculums cover:
            </h4>
          </div>
          <Accordion
            className="faq-accordion pt-10 pb-50 wow fadeInUp delay-0-2s"
            id="course-faq"
            defaultActiveKey="collapse1"
          >
            <WellernAccordion
              eventName={"collapse1"}
              title={"Fullstack Web Development"}
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
                    Front-end Development. More JavaScript, REST API and diving
                    into REACT & Databases.{" "}
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
                    Building projects with Test Driven Development and deploying
                    them live on the web
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
                    Support & guidance from our alumni & teachers in navigating
                    the job market, CV's & job applications
                  </span>
                </li>
              </ul>
            </WellernAccordion>
          </Accordion>
          <div className="text-center">
            <Link href="/course-details">
              <a
                style={{
                  padding: "10px",
                  fontSize: "9px",
                  margin: "10px 0px",
                  backgroundColor: "#0084DF",
                }}
                className="theme-btn"
              >
                Learn More
              </a>
            </Link>
          </div>
          <Accordion
            className="faq-accordion pt-10 pb-50 wow fadeInUp delay-0-2s"
            id="course-faq"
            defaultActiveKey="collapse2"
          >
            <WellernAccordion
              eventName={"collapse2"}
              title={"Freelance Beginners Bootcamp"}
              active={activeFreelance}
              onClick={() => onClickFreelance("collapse2")}
            >
              <ul className="course-video-list">
              <li>
                      <span
                    style={{ color: "#1F4ECE", marginRight: "10px" }}
                    className="duration"
                  >
                    Week 1-3
                  </span>
                        <span className="title">
                          Foundation: Web Development Basics & Freelance Intro
                        </span>{' '}
                      
                      </li>
                      <li>
                      <span
                    style={{ color: "#1F4ECE", marginRight: "10px" }}
                    className="duration"
                  >
                    Week 4-6
                  </span>
                        <span className="title">Low-code Web Development & SEO basics</span>{' '}
                       
                      </li>
                      <li>
                      <span
                    style={{ color: "#1F4ECE", marginRight: "10px" }}
                    className="duration"
                  >
                    Week 7-9
                  </span>
                        <span className="title">How to find clients & tools of the trade</span>{' '}
                      
                      </li>
                      <li>
                      <span
                    style={{ color: "#1F4ECE", marginRight: "10px" }}
                    className="duration"
                  >
                    Week 10-12
                  </span>
                        <span className="title">Advanced Low-code Web Development with projects</span>
                       
                      </li>
                      <li>
                      <span
                    style={{ color: "#1F4ECE", marginRight: "10px" }}
                    className="duration"
                  >
                    Week 13
                  </span>
                        <span className="title">eCommerece 101 - Shopify Crash Course </span>
                     
                      </li>
              </ul>
            </WellernAccordion>
          </Accordion>
        </div>
      </section>
      <div className="text-center">
        <Link href="/course-details-freelance">
          <a
            style={{
              padding: "10px",
              fontSize: "9px",
              margin: "10px 0px",
              backgroundColor: "#0084DF",
            }}
            className="theme-btn"
          >
            Learn More
          </a>
        </Link>
      </div>
<Team/>
      <FAQs />
      <div className="text-center hero-btn mt-30 wow fadeInUp delay-0-8s">
        <Link href="/contact">
          <a className="theme-btn grab-course">
            Question? - Contact us
            <i className="fas fa-arrow-right" />
          </a>
        </Link>
      </div>
      {/* Coach Section End */}
      {/* Work Process Section Start */}
      <section className="work-process-section bg-white rel z-1 pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div id="what-learn">
            <Index1WorkStepSlider />
          </div>
        </div>
      </section>
      <div className="text-center">
        <div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
          <Link href="/course-details">
            <a className="theme-btn">
              More Details
              <i className="fas fa-arrow-right" />
            </a>
          </Link>
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
                <a href="/course-details">
                  <div className="theme-btn style-four">
                    Learn More <i className="fas fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-10 ">
                <img
                  src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwYm9vdGNhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                  alt="Why Choose"
                  className="why-choose-one"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section End */}
      {/* Newsletter Section Start */}
      <div className="">
        <Advertise />
      </div>

      {/* Newsletter Section End */}

      {/* Testimonials Section Start */}

      {/* Testimonials Section End */}
      {/* Blog Section Start */}
      <section id="blog" className="blog-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-55">
                <span className="sub-title mb-20">News &amp; Blog</span>
                <h2>Blogs</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image">
                  <img
                    src="https://miro.medium.com/max/1400/0*qmzWtFXW7TrRCM_7"
                    alt="Blog"
                  />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>12</span> October
                  </span>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />{" "}
                        <Link href="blog/become-a-software-engineer-without-a-degree-in-8-months">By Shuayb</Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        <Link href="blog/become-a-software-engineer-without-a-degree-in-8-months">3min read</Link>
                      </li>
                    </ul>
                    <h5>
                    <Link href="blog/become-a-software-engineer-without-a-degree-in-8-months">
                        How Shuayb became a Software Engineer without a degree
                        in 8 months💻
                      </Link>
                    </h5>
                    <p>
                      I took a few online courses on HTML, CSS and JavaScript
                      and began..
                    </p>
                    <Link href="blog/become-a-software-engineer-without-a-degree-in-8-months">
                      <a className="read-more">
                        Read more <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image">
                  <img
                    src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Blog"
                  />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>3</span> January
                  </span>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />{" "}
                        <Link href="blog/what-are-the-different-roles-in-software-engineering-frontend-backend-and-fullstack">By Shuayb</Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        <Link href="blog/what-are-the-different-roles-in-software-engineering-frontend-backend-and-fullstack">3min read</Link>
                      </li>
                    </ul>
                    <h5>
                    <Link href="blog/what-are-the-different-roles-in-software-engineering-frontend-backend-and-fullstack">
                    What are the different roles in Software Engineering? Frontend, Backend & Fullstack
                      </Link>
                    </h5>
                    <p>
                    Software engineering can be an incredibly rewarding profession, offering a wide range of career opportunities in the technology sector...
                    </p>
                    <Link href="blog/what-are-the-different-roles-in-software-engineering-frontend-backend-and-fullstack">
                      <a className="read-more">
                        Read more <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-more-btn pt-30 text-center"></div>
        </div>
      </section>

      {/* Blog Section End */}
      {/* Logo Section Start */}

      {/* Logo Section End */}
      {/* Instagram Section Start */}
    </Layout>
  );
};
export default Index;
