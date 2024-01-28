import Link from "next/link";
import Layout from "../src/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import FAQs from "../src/components/FAQ";
import { Accordion, Nav, Tab } from "react-bootstrap";
import WellernAccordion from "../src/components/WellernAccordion";
import Index1WorkStepSlider from "../src/components/slider/Index1WorkStepSlider";
import Advertise from "../src/components/Advertise";
import { useState } from "react";
import Team from "../src/components/team";
import Tweets from "../src/components/tweets";
import { supabase } from "../lib/initSupabase";
import Ebook from "../public/assets/images/ebook-last.png";
import Bundle from "../public/assets/images/bundle-image.png";
import webDev from "../public/assets/images/web-dev.webp";
import moneyback from "../public/assets/images/money-back.png";
import Roadmap from "../src/components/roadmap";
const Index1Isotope = dynamic(
  () => import("../src/components/isotope/Index1Isotope"),
  {
    ssr: false,
  }
);

const Index = () => {
  const [active, setActive] = useState(false);
  const [activeFreelance, setActiveFreelance] = useState(false);

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

  const onClick = (value) => {
    console.log(value);
    setActive(value === active ? "" : value);
  };

  const onClickFreelance = (value) => {
    console.log(value);
    setActive(value === activeFreelance ? "" : value);
  };

  return (
    <Layout
      header={1}
      footer={1}
    >
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
          content="Pivot2Tech Bootcamp "
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="og:description"
          content="Part-time, affordable Tech Bootcamp ⌛️ Beginner →  Software Engineer or Freelancer 🌎 in 3 months! Community of over 620 students 🎯"
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
                <h3 className="mb-20 wow fadeInUp delay-0-4s">
                  Learn recession-proof skills,
                  <span style={{ color: "#1F4ECE" }}> Double your income</span>
                </h3>

                <p className="">
                  Learn <strong>Web development</strong>,{""}
                  <strong> Digital marketing & Freelancing,</strong> or{" "}
                  <strong> Data Analytics </strong>in 3 months or less.
                </p>
                <span
                  style={{
                    marginTop: "10px",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Lastest student salary: £40,000
                </span>
                <div className="hero-btn-group">
                  <div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
                    <a
                      href="#courses-group"
                      className="theme-btn grab-course"
                    >
                      Explore Bootcamps
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                  {/* <div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
                    <a
                      href="#curriculum"
                      style={{ backgroundColor: "#1F4ECE" }}
                      className="theme-btn"
                    >
                      Pick a mentor
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div> */}
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
      <div className="advertise-mobile">{/* <Advertise /> */}</div>
      <div className="text-center p-5">
        <h4 className="mt-20 ">
          Our alums have switched careers and landed roles at{" "}
        </h4>
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
              <img
                src="assets/images/client-logos/capgemini.png"
                alt="Client Logo"
              />
            </div>
            <div className="logo-item wow fadeInUp delay-0-3s">
              <img
                src="assets/images/client-logos/trison.png"
                alt="Client Logo"
              />
            </div>
            <div className="logo-item wow fadeInUp delay-0-4s">
              <img
                src="assets/images/client-logos/agreed-digital.png"
                alt="Client Logo"
              />
            </div>
            <div className="logo-item wow fadeInUp delay-0-4s">
              <img
                src="assets/images/octapus-energy.png"
                alt="Client Logo"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Advertise /> */}
      <section
        id="what-learn"
        className="coach-section rel z-1 pt-120 rpt-90 pb-100 rpb-70 bg-lighter"
      >
        <div className="container cards-title pb-120">
          <h3 className="text-center cards-title-text ">
            Build your dream career with our tech bootcamps
          </h3>
          <p className="text-center  cards-paragraph "></p>
          <div
            className="text-center"
            style={{ margin: "0 auto" }}
          >
            <ul
              style={{ fontSize: "22px" }}
              className="list-style-four"
            >
              <li style={{ fontSize: "22px" }}>
                Evening Zoom Lessons
                <span style={{ color: "#1F4ECE", marginLeft: "6px" }}>
                  2 days a week
                </span>
              </li>
              <li style={{ fontSize: "22px" }}>For complete beginners</li>
            </ul>
            <ul
              style={{ fontSize: "22px" }}
              className="list-style-four"
            >
              <li style={{ fontSize: "22px" }}>
                {" "}
                Community of over 620+ students!
              </li>
            </ul>
          </div>
        </div>

        <div className="section-title text-center">
          <span className="sub-title mb-15">Testimonials</span>
          <h2>What Our Students Say</h2>
        </div>
        <Tweets />
        {/* <Mentoring /> */}

        <div
          id="courses-group"
          className="container"
        >
          <div className="row coach-active justify-content-center">
            <div className="col-lg-4 col-md-6 item development photography">
              <Link href="/course-details">
                <div
                  id="what-learn"
                  className="coach-item wow fadeInUp delay-0-4s"
                >
                  <div className="coach-image">
                    <Link href="/course-grid">
                      <a
                        style={{ fontSize: "11px" }}
                        className="category"
                      >
                        13 Weeks
                      </a>
                    </Link>
                    <img
                      src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwYm9vdGNhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                      alt="fullstack bootcamp"
                    />
                  </div>
                  <div className="coach-content">
                    <span className="label">Online Lessons - 13 weeks</span>
                    <h4>
                      <Link href="/course-details">Software Engineering</Link>
                    </h4>

                    <span style={{ fontSize: "16px", color: "black" }}>
                      Learn to build web applications from scratch and land your
                      dream job as software developer
                    </span>
                    <hr />
                    <p
                      className="bold"
                      style={{ fontSize: "17px" }}
                    >
                      Next cohort: 13th February
                    </p>

                    <ul
                      style={{ marginTop: "10px" }}
                      className="course-tags"
                    >
                      <li>
                        {" "}
                        <span style={{ marginRight: "8px" }}>💻</span> 4
                        real-life projects
                      </li>
                      <li>
                        {" "}
                        <span style={{ marginRight: "8px" }}>👨‍🏫</span>Homework
                        and project review
                      </li>
                      <li>
                        {" "}
                        <span style={{ marginRight: "8px" }}>👨‍🔧👩‍🔧</span> Live
                        chat support
                      </li>
                      <li>
                        {" "}
                        <span style={{ marginRight: "8px" }}>📆</span> Weekly
                        homework
                      </li>
                      <li>
                        {" "}
                        <span style={{ marginRight: "8px" }}>∞ </span>Lifetime
                        access
                      </li>
                    </ul>
                    <p
                      style={{
                        marginTop: "5px",
                        fontSize: "16px",
                        color: "blue",
                        fontWeight: "700",
                      }}
                    >
                      9 spaces left
                    </p>
                    <Link href="/course-details">
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
              </Link>
            </div>
            <Link href="/course-details-freelance">
              <div className="col-lg-4 col-md-6 item design technology">
                {/* <Link href="/course-details-freelance"> */}
                <div className="coach-item wow">
                  <div className="coach-image">
                    <Link href="/course-grid">
                      <a
                        style={{ fontSize: "11px" }}
                        className="category"
                      >
                        7 Weeks
                      </a>
                    </Link>
                    <img
                      src="assets/images/digital-nomad-3.jpg"
                      alt="Coach"
                    />
                  </div>
                  <div className="coach-content">
                    <span className="label">Online Lessons - 7 Weeks</span>
                    <h4>
                      <Link href="/course-details-freelance">
                        Freelance Web & Digital Marketing
                      </Link>
                    </h4>
                    <div className="ratting-price">
                      <span style={{ fontSize: "16px", color: "black" }}>
                        Start earning a side income from home from freelance
                        digital marketing. Turn your digital skills into a
                        paycheck!
                      </span>
                    </div>
                    <div>
                      <p
                        className="bold"
                        style={{ fontSize: "17px" }}
                      >
                        Next cohort: February 2024
                      </p>
                    </div>
                    <div className="d-flex justify-content-around "></div>

                    <ul className="course-tags">
                      <li>
                        {" "}
                        <span style={{ marginRight: "8px" }}> 💰💰</span>Earn an
                        extra £1000/m from home
                      </li>
                      <li>
                        {" "}
                        <span style={{ marginRight: "8px" }}> 💻</span>
                        Low-code Web Development
                      </li>
                      <li>
                        {" "}
                        <span style={{ marginRight: "8px" }}>👨🏾‍💻</span> Digital
                        Marketing
                      </li>
                      <li>
                        {" "}
                        <span style={{ marginRight: "8px" }}> 📈</span>
                        Ecommerce
                      </li>
                      <li>
                        {" "}
                        <span style={{ marginRight: "8px" }}> 🧭</span> How to
                        find clients
                      </li>
                      <li>
                        {" "}
                        <span style={{ marginRight: "8px" }}>∞</span>
                        Lifetime access
                      </li>
                    </ul>
                    <p
                      style={{
                        marginTop: "5px",
                        fontSize: "16px",
                        color: "blue",
                        fontWeight: "700",
                      }}
                    >
                      8 spaces left
                    </p>
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

                {/* </Link> */}
              </div>
            </Link>
            <div className="col-lg-4 col-md-6 item design technology">
              <div className="coach-item">
                <div className="coach-image">
                  <img
                    src="assets/images/careerMastery.webp"
                    alt="data-analytics"
                  />
                </div>
                <div className="coach-content">
                  <span className="label">Online lessons - 3 weeks</span>
                  <h4>
                    <Link href="/product-details">Career Mastery</Link>
                  </h4>
                  {/* <p
                    style={{
                      fontSize: "18px",
                      color: "blue",
                      fontWeight: "600",
                    }}
                  >
                    Sold out
                  </p> */}
                  <div className="ratting-price"></div>
                  <p>
                    Land networking calls, convert job referrals and master each
                    stage of the interview processs
                  </p>
                  {/* <p
                    className="bold"
                    style={{ fontSize: "17px" }}
                  >
                    Start: 4th January
                  </p> */}
                  <ul className="">
                    <li>
                      <span style={{ marginRight: "7px" }}>
                        💻 Networking & LinkedIn Mastery
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span style={{ marginRight: "7px" }}>📝</span>
                      CV Building and Job Applications
                    </li>
                    <li>
                      {" "}
                      <span style={{ marginRight: "7px" }}>📜</span>
                      Get your CV & applications reviewed
                    </li>
                    <li>
                      {" "}
                      <span style={{ marginRight: "7px" }}>📞</span>
                      Mock interviews & technical test practice
                    </li>{" "}
                    <li className="mt-3 bold"> 5 / 15 spaces left</li>
                    <li
                      style={{ color: "blue" }}
                      className="mt-3"
                    >
                      {" "}
                      Only £40/m for 3 months
                    </li>
                  </ul>{" "}
                  <Link href="/careerMastery">
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
              <div className="coach-item">
                <div className="coach-image">
                  <img
                    src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                    alt="data-analytics"
                  />
                </div>
                <div className="coach-content">
                  <span className="label">Online lessons -12 weeks</span>
                  <h4>
                    <Link href="/product-details">Data Analytics</Link>
                  </h4>
                  <div className="ratting-price"></div>
                  <p>
                    Become a successful professional in the Data Analytics field
                    with our immersive, part-time bootcamp.
                  </p>
                  <p
                    className="bold"
                    style={{ fontSize: "17px" }}
                  >
                    Next Cohort: March 2024
                  </p>
                  <ul className="">
                    <li>
                      <span style={{ marginRight: "7px" }}>💻</span>3 real-life
                      projects
                    </li>

                    <li>
                      {" "}
                      <span style={{ marginRight: "7px" }}>✅</span>
                      Live classes 2 times per week
                    </li>
                    <li>
                      {" "}
                      <span style={{ marginRight: "7px" }}>⏳</span>
                      Lifetime access
                    </li>
                    <li>
                      {" "}
                      <span style={{ marginRight: "7px" }}>📜</span>
                      Certifcation upon completion
                    </li>
                    <li className="mt-1">
                      🎁 <b>BONUS</b>: 2 sessions with our{" "}
                      <a
                        style={{ color: "blue" }}
                        href="https://maryandahir.simple.ink/"
                      >
                        careers coach
                      </a>
                    </li>
                  </ul>{" "}
                  <Link href="/data-analytics">
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
          </div>
        </div>
      </section>
      {/* <div className="m-20">
        <Roadmap />
      </div> */}

      <section style={{ maxWidth: " 800px", margin: "auto", padding: "30px" }}>
        <h3 className="text-center cards-title-text ">
          Build an unshakeable foundation
        </h3>
        <p
          style={{
            fontSize: "22px",
            textAlign: "center",
          }}
        >
          Whether you opt for our beginner, freelance or front-end development
          options, you know you’re building a solid foundation for the rest of
          your tech career.
        </p>
      </section>
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
                  <li>Small cohorts with 2 teachers for 10-20 students</li>
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
                  className="why-choose-one mobile-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h3 className="text-center p-5">Beginner's Intro to Web Development</h3>
        <p
          style={{ fontSize: "18px" }}
          className="p-20 text-center"
        >
          This short, mini-course is designed to get you up and running with the
          bulding blocks of web development: HTML, CSS & JavaScript.
        </p>
        <div className="d-md-flex align-items-center justify-content-center p-10">
          <Image
            src={webDev}
            alt="ebook"
            objectFit="contian"
            width={400}
            height={200}
          />

          <div className="newsletter-container md:pl-5">
            <a href="https://pivot2tech.gumroad.com/l/intro-to-web-development?_gl=1*wzamwl*_ga*NTI1MTAxMjY4LjE2OTE0MTI2MjU.*_ga_6LJN6D94N6*MTY5NjE0NzI4MS4xMjIuMS4xNjk2MTQ3NzY3LjAuMC4w">
              <a className="theme-btn">
                Grab a FREE copy
                <i className="fas fa-arrow-right" />
              </a>
            </a>
          </div>
        </div>
      </div>
      <section className="work-process-section bg-white rel z-1 pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div id="what-learn">
            <Index1WorkStepSlider />
          </div>
        </div>
      </section>
      <div className="my-20">{/* <Advertise /> */}</div>

      <div id="the-team">
        <Team />
      </div>
      <div id="FAQs">
        <FAQs />
      </div>
      <div className="text-center hero-btn py-20 wow fadeInUp delay-0-8s">
        <Link href="/contact">
          <a className="theme-btn grab-course">
            Question? - Contact us
            <i className="fas fa-arrow-right" />
          </a>
        </Link>
      </div>

      {/* Work Process Section End */}
      {/* Newsletter Section Start */}
      <div className="">{/* <Advertise /> */}</div>

      {/* Newsletter Section End */}

      {/* Testimonials Section Start */}

      {/* Testimonials Section End */}
      {/* Blog Section Start */}
      <section
        id="blog"
        className="blog-section"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-55">
                <h2>Blogs</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image">
                  <img
                    className="blog-image"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    alt="Blog"
                  />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>6</span> May
                  </span>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />{" "}
                        <Link href="/blog/from-beginner-to-web-developer-7-steps">
                          By Shuayb
                        </Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        <Link href="/blog/from-beginner-to-web-developer-7-steps">
                          3min read
                        </Link>
                      </li>
                    </ul>
                    <h5>
                      <Link href="/blog/from-beginner-to-web-developer-7-steps">
                        From Beginner to Web Developer: 7 Steps to Get You
                        Started
                      </Link>
                    </h5>

                    <Link href="blog/from-beginner-to-web-developer-7-steps">
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
                        <Link href="blog/what-are-the-different-roles-in-software-engineering-frontend-backend-and-fullstack">
                          By Shuayb
                        </Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        <Link href="blog/what-are-the-different-roles-in-software-engineering-frontend-backend-and-fullstack">
                          3min read
                        </Link>
                      </li>
                    </ul>
                    <h5>
                      <Link href="blog/what-are-the-different-roles-in-software-engineering-frontend-backend-and-fullstack">
                        What are the different roles in Software Engineering?
                        Frontend, Backend & Fullstack
                      </Link>
                    </h5>

                    <Link href="blog/what-are-the-different-roles-in-software-engineering-frontend-backend-and-fullstack">
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
                        <Link href="blog/become-a-software-engineer-without-a-degree-in-8-months">
                          By Shuayb
                        </Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        <Link href="blog/become-a-software-engineer-without-a-degree-in-8-months">
                          3min read
                        </Link>
                      </li>
                    </ul>
                    <h5>
                      <Link href="blog/become-a-software-engineer-without-a-degree-in-8-months">
                        How Shuayb became a Software Engineer without a degree
                        in 8 months💻
                      </Link>
                    </h5>

                    <Link href="blog/become-a-software-engineer-without-a-degree-in-8-months">
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
