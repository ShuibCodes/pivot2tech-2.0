import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import Slider from 'react-slick';
import PageBanner from '../src/components/PageBanner';
import WellernAccordion from '../src/components/WellernAccordion';
import Layout from '../src/layout/Layout';
import { coachSlider } from '../src/sliderProps';
import { checkout } from '../checkout';
const CourseDetails = () => {
  const [active, setActive] = useState(`collapse1`);
  const onClick = (value) => {
    console.log(value);
    setActive(value === active ? '' : value);
  };
  return (
    <Layout>
      <section className="course-details-area pt-130 rpt-100">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-8">
              <div className="course-details-content">
                <div className="course-header">
                  <span className="category">Freelance</span>
                </div>
                <h2>Freelance Web Development</h2>

								<div className="image mb-35">
									<img
										src="https://stripe-camo.global.ssl.fastly.net/9f2416a67c351f3755de8a712be31f49509f642296f5207760427f25873fbd61/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a6446387854484e7756464a434e4578534d473536646a424566475a7358327870646d56664e45526e543274745633426a4e6a6c4a5a486844523259344f577477616b743030307055556a615a566f"
										alt="Course Details"
									/>
								</div>  
								<p style={{fontSize:"20px", fontWeight:"700"}}>
                The Ultimate Guide to Freelancing:

                <ul style={{fontSize: "16px", padding:"5px 10px"}} className="course-tags">
                    <li>
                    <span style={{ marginRight: "10px" }}>✅</span>
                       Earn
                      Comprehensive tutorials on Low-code Web Development 
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
                    Reviewing many different Client Situations, we can be in and how to handle them
                    </li>
                  </ul>
               
								</p>
                <h4 className='text-center'>Student results 👇🏾</h4>
								<div  className='p-10 freelance-bundle-reviews'>
									<div className='review-image'><Image width="100%" height="80%" layout="responsive" objectFit="contain" alt="testimonial for freelance bundle" src="/assets/images/review-1.png"/></div>

									<div className='review-image'><Image width="100%" height="80%" layout="responsive" objectFit="contain"  alt="testimonial tweet for freelance bundle " src="/assets/images/review-3.png"/></div>
									<div className='review-image'><Image width="100%" height="80%" layout="responsive" objectFit="contain"  alt="Student finding 2 clients using the freelance bundle" src="/assets/images/review-2.png"/></div>
								</div>
			         
                <div>
                  <p className='info-copy'>Our Freelance Bootcamp is the perfect way to get started.</p>
                  <br/>
                  <p className='info-copy-small'>With our comprehensive courses and experienced mentors, you'll be ready to land your first paying client in no time.</p>
                </div>

                <h3>Course Curriculum </h3>
                <Accordion
                  className="faq-accordion pt-10 pb-50 wow fadeInUp delay-0-2s"
                  id="course-faq"
                  defaultActiveKey="collapse1"
                >
                  <WellernAccordion
                    eventName={'collapse1'}
                    title={'Curriculum Breakdown'}
                    active={active}
                    onClick={() => onClick('collapse1')}
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
                <div className="py-20">
                <a  
                href="https://buy.stripe.com/00geVP4C56fY1b29AG"
										style={{ padding: '10px', fontSize: '11px', margin: '10px 0px' }}
										className="theme-btn"
									>
										Book Now
									</a>
                </div>
                <h3>Your Instructor</h3>
                <div className="course-instructor pt-10 pb-55 wow fadeInUp delay-0-2s">
                  <div className="row align-items-center">
                    <div className="col-sm-5">
                      <div className="instructor-image">
                        <img src="assets/images/shuayb.jpg" alt="instructor-shuayb" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="instructor-details">
                        <h4>Shuayb</h4>
                        <span className="designations">Senior Software Engineer</span>
                      </div>
                      <p>
                        Self-taught fullstack developer. Runs a digital Agency attracting high
                        level clientele on day to day business.
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
                      <div style={{ marginTop: '20px' }} className="text-center">
                        <h4>
                          Pay in installments 
                          <br />
                         <a style={{color:"blue"}} href="https://buy.stripe.com/00geVP4C56fY1b29AG">here</a> 
                        </h4>
                      </div>
                      <div style={{ margin: '10px' }} className="text-center">
												<h4 className='py-5'>
													Got a question?
												</h4>
												<br />
											<Link href="/#FAQs">
												<a className="theme-btn">
												See the FAQS
												</a>
												</Link>
													

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
                  <span className="price">130</span>
                  <span className="bold">OR £43/month - 3 months</span>
                </div>
                <ul className="course-details-list mb-25">
                  <strong style={{color:"blue", fontStyle:"italic", fontSize:"18px"}} className="text-center">All Classes Are Recorded</strong>

                  <li>
                    <i className="far fa-file-alt" /> <span>Course Level</span> <b>Beginner</b>
                  </li>
                  <li>
                    <i className="far fa-clock" /> <span>Duration</span> <b>13 weeks</b>
                  </li>
                  <li>
                    <i className="far fa-clock" /> <span>When</span> <b>15 March - 18th June </b>
                  </li>

                  <li>
                    <i className="fas fa-globe" /> <span></span> <b>Thursday & Sundays 7-9PM GMT</b>
                  </li>
                </ul>

                <a
                  href="https://buy.stripe.com/00geVP4C56fY1b29AG"
										style={{ padding: '10px', fontSize: '11px', margin: '10px 0px' }}
										className="theme-btn"
									>
										Book Now
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
