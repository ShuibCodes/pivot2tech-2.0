import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Head from "next/head";
import Layout from "../src/layout/Layout";

import { InlineWidget } from "react-calendly";
import FAQ from "../src/components/FAQ";
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
                            <h2>FREE TRIAL</h2>
                            <h4>
                              No Credit Card. No commitment. 100% free trial.
                            </h4>
                          </div>

                          <p>
                            1 hour of online private tuition for Coding & Games
                            Design.
                          </p>
                          <div className="flex">
                            <img
                              style={{ maxWidth: "20%", padding: "10px" }}
                              src="assets/images/ofsted-logo.jpeg"
                            />
                            <img
                              style={{ maxWidth: "20%", padding: "10px" }}
                              src="https://static.wixstatic.com/media/74c84a_bee6f50108734ea286254988cf208471~mv2.png/v1/fill/w_304,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/TTALOGO2021.png"
                            />
                            <img
                              style={{ maxWidth: "20%", padding: "10px" }}
                              src="https://static.wixstatic.com/media/74c84a_2b2f7e2a7f5d4199adb3d3583d777cc8~mv2.png/v1/crop/x_11,y_0,w_289,h_178/fill/w_317,h_194,al_c,lg_1,q_85,enc_auto/NC-300x178.png"
                            />
                          </div>
                          <div>
                            <a
                              href="#pricing"
                              className="theme-btn style-four"
                            >
                              Book Now
                              <i className="fas fa-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mt-10 ">
                          <img
                            src="https://cdn-dochk.nitrocdn.com/qEcxptvCNtRciuVoCsqmAJAQKLzxYhSu/assets/images/optimized/rev-1dc3412/www.softwareacademy.co.uk/wp-content/uploads/2022/01/Grad.png"
                            alt="Why Choose"
                            className="why-choose-one"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="logo-section pt-130 rpt-100 pb-80 rpb-50">
                    <div className="container">
                      <div className="logo-inner">
                        <div className="logo-item wow text-center fadeInUp delay-0-1s">
                          <Link href="/contact">
                            <img
                              src="assets/images/free-trial.png"
                              alt="Client Logo"
                              className="py-3"
                            />
                          </Link>
                          <h6 className="py-5">
                            Takes less than 30 seconds to book.
                          </h6>
                        </div>
                        <div className="logo-item text-center wow fadeInUp delay-0-2s">
                          <Link href="/contact">
                            <img
                              src="assets/images/discount.png"
                              alt="Client Logo"
                              className="py-3"
                            />
                          </Link>
                          <h6 className="py-5">
                            Takes less than 30 seconds to book.
                          </h6>
                        </div>
                        <div className="logo-item text-center wow fadeInUp delay-0-3s">
                          <Link href="/contact">
                            <img
                              src="assets/images/cert.png"
                              alt="Client Logo"
                              className="py-3"
                            />
                          </Link>
                          <h6 className="py-5">
                            Takes less than 30 seconds to book.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="logo-item text-center wow fadeInUp delay-0-3s">
                    <h3>In partnership with </h3>
                    <a href="https://www.progresslearningcentre.co.uk/">
                      <img
                        style={{ maxWidth: "20%" }}
                        src="https://static.wixstatic.com/media/74c84a_23793fd31b7e44889268b9e4779299f1~mv2.png/v1/fill/w_195,h_176,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LogoColour1%20(1).png"
                      />
                    </a>
                  </div>
                </section>
                <section className="why-choose-section pt-120 rpt-90 pb-130 rpb-100">
                  <div className="container">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-lg-6">
                        <div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s">
                          <div className="section-title mb-25">
                            <h2>Give your child a head start</h2>
                          </div>

                          <ul className="list-style-four pt-5 pb-35">
                            <li>Technology-Specialist Tutors</li>
                            <li>Step-by-Step Skills Path</li>
                            <li>Online, virtual classes</li>
                            <li>Cerificate of acheivement</li>
                          </ul>
                          <div>
                            <a
                              href="https://buy.stripe.com/4gwcNH7Oh6fY1b2cN7"
                              className="theme-btn style-four"
                            >
                              Free trial
                              <i className="fas fa-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mt-10 ">
                          <img
                            src="https://funtech.co.uk/img/2021/pics/camps-05.webp"
                            alt="Why Choose"
                            className="why-choose-one"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  Book in a slot
                  <InlineWidget url="https://calendly.com/shuayb-agreed-digtial/20min" />
                </section>
                <FAQ />
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
                            Moin is an Web Developer, Tutor & Startup founder,
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
