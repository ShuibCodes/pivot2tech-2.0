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
									<span className="category">Web Development</span>
								</div>
								<h2>Fullstack Web Development Bootcamp</h2>

								<div className="image mb-35">
									<img src="assets/images/coachs/course-details.jpg" alt="Course Details" />
								</div>
								<p>
									Learn skills to secure a job as a full-stack software engineer.- HTML, CSS
									JavaScript, Node JS, testing- heavy emphasis on project based learning
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
												<span className="title">Foundation: Web Development Basics</span>{' '}
												<span className="duration">Week 1-3</span>
											</li>
											<li>
												<span className="title">Front-end Development</span>{' '}
												<span className="duration">Week 4-6</span>
											</li>
											<li>
												<span className="title">Databases & more JavaScript</span>{' '}
												<span className="duration">Week 7-9</span>
											</li>
											<li>
												<span className="title">Projects and Test Driven Development</span>
												<span className="duration">Week 10-12</span>
											</li>
											<li>
												<span className="title">Portfolio Week</span>
												<span className="duration">Week 13</span>
											</li>
										</ul>
									</WellernAccordion>
								</Accordion>
								<div className="py-20">
									<div style={{ marginTop: '20px' }}>
										<h5>
											£43/m for 3 months
											<br />
											click the Klarna option{' '}
											<a href="https://buy.stripe.com/fZe8xrecF1ZI1b26oo">here</a>
										</h5>
									</div>
									<a href="https://buy.stripe.com/fZe8xrecF1ZI1b26oo">
										<button className="theme-btn">
											Book your seat
											<i className="fas fa-arrow-right" />
										</button>
									</a>
								</div>

								<div className="course-instructor pt-10 pb-55 wow fadeInUp delay-0-2s">
									<div className="row align-items-center">
										<div className="col-sm-5">
											<div className="instructor-image">
												<img src="assets/images/abdulkadir.jpeg" alt="instructor" />
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div className="instructor-details">
												<h4>Abdulkadir Maxamed</h4>
												<span className="designations">Senior Software Engineer</span>
											</div>
											<p>
												An experienced Software Engineer who works for a global technology
												consultancy company
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
												<h3>
													£43/m for 3 months
													<br />
													click the Klarna option{' '}
													<a href="https://buy.stripe.com/fZe8xrecF1ZI1b26oo">here</a>
												</h3>
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
									<span className="bold">OR £43 month - 3 months</span>
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
										<i className="fas fa-globe" /> <span></span>{' '}
										<b>Tuesday & Saturdays 7-9PM GMT</b>
									</li>
								</ul>

								<a href="https://buy.stripe.com/fZe8xrecF1ZI1b26oo">
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
