import Link from 'next/link';
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
									<img src="assets/images/freelance-pic.jpg" alt="Course Details" />
								</div>
								<p>
									Our Freelance package gets you an all inclusive experience on how to self-market,
									retain & attract customers. Alongside your 9-5 or as a career in itself.
								</p>

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
												<span className="title">
													Foundation: Web Development Basics & Freelance Intro
												</span>{' '}
												<span className="duration">Week 1-3</span>
											</li>
											<li>
												<span className="title">More HTML & CSS</span>{' '}
												<span className="duration">Week 4-6</span>
											</li>
											<li>
												<span className="title">How to Find Clients</span>{' '}
												<span className="duration">Week 7-9</span>
											</li>
											<li>
												<span className="title">Low-code Web Development (Webflow)</span>
												<span className="duration">Week 10-12</span>
											</li>
											<li>
												<span className="title">Shopify Web Development</span>
												<span className="duration">Week 13</span>
											</li>
										</ul>
									</WellernAccordion>
								</Accordion>
								<div className="py-20">
									<a href="https://buy.stripe.com/9AQdRL8Sl9sadXOeUV">
										<button className="theme-btn">
											Book your seat
											<i className="fas fa-arrow-right" />
										</button>
									</a>
								</div>
								<h3>Instructors</h3>
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
									<span className="bold">OR £43.33 month - 3 months</span>
								</div>
								<ul className="course-details-list mb-25">
									<strong className="text-center">All Classes Are Recorded</strong>

									<li>
										<i className="far fa-file-alt" /> <span>Course Level</span> <b>Beginner</b>
									</li>
									<li>
										<i className="far fa-clock" /> <span>Duration</span> <b>13 weeks</b>
									</li>
									<li>
										<i className="far fa-clock" /> <span>When</span> <b>15 Dec - 22nd March </b>
									</li>

									<li>
										<i className="fas fa-globe" /> <span></span> <b>Thursday & Sundays 7-9PM GMT</b>
									</li>
								</ul>

								<a href="https://buy.stripe.com/9AQdRL8Sl9sadXOeUV">
									<button className="theme-btn">
										Book your seat
										<i className="fas fa-arrow-right" />
									</button>
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
