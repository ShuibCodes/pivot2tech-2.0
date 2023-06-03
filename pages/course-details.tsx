import { createClient } from 'next-sanity'
import Image from "next/image";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Head from "next/head";
import Layout from "../src/layout/Layout";
import WellernAccordion from "../src/components/WellernAccordion";
import Blocks from "../src/components/fullstack-blocks";
import { ICourse } from '../src/types/general';
const CourseDetails = ({ mainCourse }: {
  mainCourse: ICourse
}) => {
  const [active, setActive] = useState(`collapse1`);
  const onClick = (value) => {
    console.log(value);
    setActive(value === active ? "" : value);
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

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr",
                  gridGap: "20px",
                  marginBottom: "20px",

                }} >

                  <div className="w-full">


                    <h2>
                      {mainCourse.title}
                    </h2>

                    <h5>
                      {mainCourse.subtitle}
                    </h5>

                    <div className="image mb-35">
                      <Image
                        src={mainCourse.mainImageUrl}
                        alt="course-details"
                        width="735"
                        height="430"
                      />

                      <div className="">
                        <div className="">



                          <ul
                            style={{
                              fontSize: "18px",
                              fontWeight: "700",
                              marginLeft: "8px",
                            }}
                          >

                            <li>
                              {mainCourse.courseTime}
                            </li>

                            <li>
                              {mainCourse.duration}
                            </li>
                          </ul>
                        </div>
                        <div style={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          marginLeft: "8px",
                        }}>
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
                          <h6
                            style={{
                              color: "#1F4ECE",
                              fontSize: "22px",
                              marginLeft: "15px",
                            }}
                          >
                            {mainCourse.spaces} spaces left!
                          </h6>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full d-none d-lg-block">
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
                            <b>{mainCourse.duration}</b>
                          </li>
                          <li>
                            <i className="far fa-clock" /> <span>When</span>{" "}
                            {/* <b>{mainCourse.courseDate?.toDateString()}</b> */}
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
                          href={mainCourse.purchaseLink}
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

                      {mainCourse.kv.map((item, index) => (

                        <li>
                          <span
                            style={{ color: "#1F4ECE", marginRight: "10px" }}
                            className="duration"
                          >
                            {item.key}
                          </span>
                          <span className="title">{item.value}</span>{" "}
                        </li>
                      ))}

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
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "8px",
                  }}>
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
                    <h6
                      style={{
                        color: "#1F4ECE",
                        fontSize: "22px",
                        marginLeft: "15px",
                      }}
                    >
                      {mainCourse.spaces} spaces left!
                    </h6>

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



export async function getStaticProps() {


  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-05-30",
    useCdn: false
  });

  const mainCourse = await client.fetch(`
  *[_type == "course"] {
    ...,
    'authorName': author->name,
    'mainImageUrl': mainImage.asset->url,
    'categoryList': categories[]->title,
  }[0]
  `);

  return {
    props: { mainCourse },
    revalidate: 600,
  };
}