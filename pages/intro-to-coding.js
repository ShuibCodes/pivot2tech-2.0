import Link from "next/link";
import Head from "next/head";
import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import Image from "next/image";
import ReactPlayer from "react-player";

const ProductDetails = () => {
  return (
    <Layout>
      <Head>
        <title>Beginners Freelancing Guide | Pivot2Tech</title>
        <meta
          property="og:url"
          content="https://pivot2tech.co.uk/product-details"
        />
        <meta
          property="og:type"
          content="website"
        />
        {/* <meta property="fb:app_id" content="your fb app id" /> */}
        <meta
          property="og:title"
          content="Beginners Freelancing Guide  | Pivot2Tech "
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="og:description"
          content="Guide includes all you need to start Freelancing & work remotely 🌴"
        />
        <meta
          property="og:image"
          content="https://bigthink.com/wp-content/uploads/2022/06/AdobeStock_323910609.jpeg"
        />
      </Head>
      <section className="product-details pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="video-course-mobile">
                <ReactPlayer
                  url="https://vimeo.com/856759428?share=copy"
                  controls
                  autoplay
                  height={320}
                  width={500}
                />
              </div>
              <div className="video-course-large">
                <ReactPlayer
                  controls
                  autoplay
                  url="https://vimeo.com/856759428?share=copy"
                  height={300}
                  width={350}
                />
              </div>
            </div>
            <div className="col-lg-5 course-overview">
              <div className="product-details-content wow fadeInRight delay-0-2s sm-py-10">
                <h2 className="">Beginner Intro to Web Development</h2>

                <div className="ratting-price mb-20">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span
                    style={{
                      color: "#1F4ECE",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    FREE
                  </span>

                  <span
                    style={{
                      textDecoration: "line-through",
                      marginLeft: "20px",
                    }}
                    className="price"
                  >
                    99
                  </span>
                </div>
                {/* <p style={{ fontWeight: "700", fontSize: "21px" }}>
                  ** Limited time offer **
                </p> */}
                <div>
                  <h6>
                    This short, mini-course is designed to get you up and
                    running with the bulding blocks of web development: HTML,
                    CSS & JavaScript.
                  </h6>
                  <p>
                    You will learn how what these programming langauges are, and
                    how to use them practically.
                  </p>
                  <p>
                    Throughout the tutorial, our Tutor, Moin will walk you
                    though how to put together a basic cookie clicker game from
                    scratch.{" "}
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <span style={{ padding: "7px" }}>✅</span>4 hours of video
                      tutorials on HTML & CSS
                    </li>
                    <li>
                      {" "}
                      <span style={{ padding: "7px" }}>✅</span> One
                      comprehensive project tutorial, with the source code
                    </li>
                    <li>
                      {" "}
                      <span style={{ padding: "7px" }}>✅</span> Tutorial on how
                      to deploy your project live on the web
                    </li>
                  </ul>
                </div>

                <div></div>
                <hr />
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="add-to-cart mt-95 rmt-45"
                >
                  <button
                    type="submit"
                    className="theme-btn style-two"
                  >
                    <a
                      style={{ color: "white" }}
                      href="https://pivot2tech.gumroad.com/l/zenfw"
                    >
                      Get access
                    </a>
                  </button>
                </form>
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
                  <h2>Learn by doing</h2>
                  <h6>Your Instructor: Moin Bukhari</h6>
                </div>

                <p>
                  Moin is an Web Developer, Tutor & Startup founder, building
                  Muddakir, an arabic vocabulary app to learn Quran. He helps
                  with our Discord community & teaches sessions throughout the
                  week
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-10 ">
                <img
                  src="https://pivot2tech.co.uk/_next/image?url=%2Fassets%2Fimages%2Fmoin.png&w=640&q=75"
                  alt="Instructor"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ marginTop: "30px" }}>
        <h4 className="text-center">What others are saying 👇🏾</h4>
        <div className="p-10 freelance-bundle-reviews">
          <div className="review-image">
            <Image
              width="100%"
              height="80%"
              layout="responsive"
              objectFit="contain"
              alt="student review"
              src="/assets/images/review-three.png"
            />
          </div>
          <div className="review-image">
            <Image
              width="100%"
              height="80%"
              layout="responsive"
              objectFit="contain"
              alt="student review"
              src="/assets/images/review-two.png"
            />
          </div>

          <div className="review-image">
            <Image
              width="100%"
              height="80%"
              layout="responsive"
              objectFit="contain"
              alt="student review"
              src="/assets/images/review-first.png"
            />
          </div>
        </div>
      </div>
      <div className="m-30 text-center">
        <h3>More Courses</h3>
      </div>
      <div
        id="courses-group"
        className="container"
      >
        <div className="row coach-active justify-content-center">
          <div className="col-lg-4 col-md-6 item development photography">
            {/* <Link href="/course-details"> */}
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
                  Next cohort: 3rd October 2023
                </p>
                <p style={{ fontSize: "18px", color: "blue" }}>
                  <span>30 spaces left</span>
                </p>
                <ul
                  style={{ marginTop: "10px" }}
                  className="course-tags"
                >
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
                    homework
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
                      fontSize: "11px",
                      margin: "10px 0px",
                    }}
                    className="theme-btn"
                  >
                    Enrol Today
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            {/* </Link> */}
          </div>
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
                    Start earning a side income from home from freelance digital
                    marketing. Turn your digital skills into a paycheck!
                  </span>
                </div>
                <div>
                  <p
                    className="bold"
                    style={{ fontSize: "17px" }}
                  >
                    Next cohort: 17th September 2023
                  </p>
                </div>
                <p style={{ fontSize: "18px", color: "blue" }}>
                  <span>37 spaces left</span>
                </p>

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
                    <span style={{ marginRight: "8px" }}> 📈</span>
                    SEO
                  </li>
                  <li>
                    {" "}
                    <span style={{ marginRight: "8px" }}>👨🏾‍💻</span> Digital
                    Marketing
                  </li>
                  <li>
                    {" "}
                    <span style={{ marginRight: "8px" }}> 🧭</span> How to find
                    clients - fast
                  </li>
                  <li>
                    {" "}
                    <span style={{ marginRight: "8px" }}>∞</span>
                    Lifetime access
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
                    Enrol Today
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
                {/* <p
                    style={{
                      fontSize: "14px",
                      color: "blue",
                      fontWeight: "600",
                    }}
                  >
                    30% Off (until Wednesday)
                  </p> */}
              </div>
            </div>

            {/* </Link> */}
          </div>
          <div className="col-lg-4 col-md-6 item design technology">
            <div className="coach-item">
              <div className="coach-image">
                <img
                  src="https://bigthink.com/wp-content/uploads/2022/06/AdobeStock_323910609.jpeg"
                  alt="freelance-bundle"
                />
              </div>
              <div className="coach-content">
                <span className="label">Lifetime access</span>
                <h4>
                  <Link href="/product-details">
                    Beginners Freelancing Guide
                  </Link>
                </h4>
                <div className="ratting-price">
                  <span style={{ color: "#1F4ECD", fontWeight: "700" }}>
                    FREE{" "}
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginLeft: "22px",
                      }}
                      className="price"
                    >
                      99
                    </span>
                  </span>
                </div>

                <p>
                  Get the guide to everything you need to become a freelancer on
                  your own.
                </p>
                <ul className="">
                  <li>
                    <span style={{ marginRight: "7px" }}>✅</span>
                    <span>
                      {" "}
                      Comprehensive videos on finding clients with{" "}
                      <a
                        style={{ color: "blue", textDecoration: "underline" }}
                        target="_blank"
                        href="https://www.upwork.com/"
                      >
                        Upwork
                      </a>
                    </span>
                  </li>
                  <li>
                    <span style={{ marginRight: "7px" }}>✅</span> Low-code
                    Website templates- (worth $500)
                  </li>

                  <li>
                    {" "}
                    <span style={{ marginRight: "7px" }}>✅</span>
                    Client contract & proposal tempalte
                  </li>
                  <li>
                    {" "}
                    <span style={{ marginRight: "7px" }}>✅</span>
                    Website Creation Checklist
                  </li>
                </ul>
                <a href="https://pivot2tech.gumroad.com/l/intro-to-web-development">
                  <a
                    style={{
                      padding: "10px",
                      fontSize: "11px",
                      margin: "10px 0px",
                    }}
                    className="theme-btn"
                  >
                    Grab your copy
                    <i className="fas fa-arrow-right" />
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ProductDetails;
