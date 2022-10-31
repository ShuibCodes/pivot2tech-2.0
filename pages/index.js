import Link from 'next/link';
import Layout from '../src/layout/Layout';

import dynamic from 'next/dynamic';
import Slider from 'react-slick';
import { Accordion, Nav, Tab } from 'react-bootstrap';
import Index1WorkStepSlider from '../src/components/slider/Index1WorkStepSlider';
import { index1EventWrap, index1Testimonial } from '../src/sliderProps';
import Advertise from '../src/components/Advertise';
const Index1Isotope = dynamic(() => import('../src/components/isotope/Index1Isotope'), {
	ssr: false,
});

const Index = () => {
	return (
		<Layout header={1} footer={1}>
			<section className="hero-section rel z-1 pt-150 rpt-135 pb-75 rpb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-7">
							<div className="hero-content rpt-25 rmb-75">
								<span className="sub-title style-two mb-20 wow fadeInUp delay-0-2s">
									Courses start at £32/m!
								</span>
								<h1 className="mb-20 wow fadeInUp delay-0-4s">Web Development Bootcamp</h1>
								<p className="wow fadeInUp delay-0-6s">
									Change careers and start your journey as a web developer with our live online
									courses. Learn the skills to freelance or a Job in tech!
								</p>

								<div className="hero-btn-group">
									<div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
										<Link href="/course-grid">
											<a className="theme-btn">
												Grab your course
												<i className="fas fa-arrow-right" />
											</a>
										</Link>
									</div>
									<div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
										<a
											href="https://forms.gle/D9Q7zQZEaFmAjYhr5"
											style={{ backgroundColor: '#1F4ECE' }}
											className="theme-btn"
										>
											Register Interest
											<i className="fas fa-arrow-right" />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="hero-right-images text-lg-right wow fadeInUp delay-0-2s"></div>
						</div>
					</div>
				</div>
			</section>
			{/* Hero Section End */}
			{/* Features Section Start */}

			{/* Features Section End */}
			{/* About Section Start */}
			<Advertise />
			{/* About Section End */}
			{/* Coach Section Start */}
			<div id="course-group">
				<Index1Isotope />
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

			<section className="features-section-three rel z-1 pt-110 rpt-85 pb-100 rpb-70">
				<div className="container">
					<section className="faqs-section pt-20 rpt-90 pb-10 rpb-85 wow fadeInUp delay-0-2s">
						<div className="container">
							<div className="section-title mb-35">
								<h3>What our Web Development Bootcamp Looks Like</h3>
								<span className="sub-title-two">Check out our curriculum week after week.</span>
							</div>
							<Tab.Container defaultActiveKey={'tabContent1'}>
								<Nav className="nav faqs-tab mb-40">
									<li>
										<Nav.Link eventKey={'tabContent1'} href="#tabContent1">
											Week 1-3
										</Nav.Link>
									</li>
									<li>
										<Nav.Link eventKey={'tabContent2'} href="#tabContent2">
											Week 4-6
										</Nav.Link>
									</li>
									<li>
										<Nav.Link eventKey={'tabContent3'} href="#tabContent3">
											Week 7-9
										</Nav.Link>
									</li>
									<li>
										<Nav.Link eventKey={'tabContent4'} href="#tabContent4">
											Week 10-12
										</Nav.Link>
									</li>
									<li>
										<Nav.Link eventKey={'tabContent5'} href="#tabContent5">
											Week 13
										</Nav.Link>
									</li>
								</Nav>
								<Tab.Content className="tab-content faq-accordion">
									<Tab.Pane className="tab-pane fade" eventKey="tabContent1">
										<Accordion defaultActiveKey="a1">
											<div className="container">
												<div className="feature-three-item wow fadeInUp delay-0-2s">
													<h4>Foundations: Web Basics</h4>
													<div className="d-flex my-2">
														<img
															className="tech-icon m-1"
															src="assets/images/logos/html.png"
														/>
														<img
															className="tech-icon m-1"
															src="assets/images/logos/css.png"
														/>
														<img
															className="tech-icon m-1"
															src="assets/images/logos/bootstrap.png"
														/>
													</div>
													<ul className="course-info-list">
														<li>How the Web Works</li>
														<li>HTML & CSS, Bootstrap 4.0</li>
														<li>CSS layouts with flexbox and</li>
														<li>code your first multi-page website </li>
													</ul>
												</div>
											</div>
										</Accordion>
									</Tab.Pane>
									<Tab.Pane className="tab-pane fade" eventKey="tabContent2">
										<Accordion defaultActiveKey="a1">
											<div className="container">
												<div className="feature-three-item ">
													<h4>Front-end Development</h4>
													<div className="d-flex my-2">
														<img
															className="tech-icon m-2"
															src="assets/images/logos/js.png"
														/>
														<img
															className="tech-icon m-2"
															src="assets/images/logos/github.png"
														/>
														<img
															className="tech-icon m-2"
															src="assets/images/logos/terminal.png"
														/>
													</div>
													<ul className="course-info-list">
														<li>
															Programming basics (variable, loops, functions, data
															structure){' '}
														</li>
														<li>Terminal & Github</li>
														<li>Read / write from files (CSV, JSON, etc.)</li>
														<li>DOM manipulation</li>
														<li>
															Build and deploy a quiz game that you can share with your
															friends
														</li>
													</ul>
												</div>
											</div>
										</Accordion>
									</Tab.Pane>
									<Tab.Pane className="tab-pane" eventKey="tabContent3">
										<Accordion defaultActiveKey="a1">
											<div className="container">
												<div className="feature-three-item">
													<h4>Databases & More JavaScript</h4>
													<div className="d-flex my-2">
														<img
															className="tech-icon m-2"
															src="assets/images/logos/database.png"
														/>
														<img
															className="tech-icon m-2"
															src="assets/images/logos/js.png"
														/>
													</div>
													<p>
														Learn by doing, we’ll buld multiple JavaScript projects
														including CRUD apps (Create, Read, Update, Delete). Using the
														relational database, SQL, we’ll store and exract data.
													</p>
													<ul className="course-info-list">
														<li>
															Master JavaScript to add dynamic behaviors to your website.
														</li>

														<li>DOM manipulation</li>
														<li>
															Learn to connect your database to your software with an ORM
															(Object Relational Mapping).
														</li>
													</ul>
												</div>
											</div>
										</Accordion>
									</Tab.Pane>
									<Tab.Pane className="tab-pane" eventKey="tabContent4">
										<Accordion defaultActiveKey="a1">
											<div className="container">
												<div className="feature-three-item">
													<h4>Projects & Testing</h4>
													<ul className="course-info-list">
														<li>
															Using what we covered, we’ll build 2 projects for your
															portfolios
														</li>
														<li>
															Test your applications using TDD (Test Driven Development)
															with Jest. This is key for interviews!{' '}
														</li>
													</ul>
												</div>
											</div>
										</Accordion>
									</Tab.Pane>

									<Tab.Pane className="tab-pane " eventKey="tabContent5">
										<Accordion defaultActiveKey="a1">
											<div className="container">
												<div className="feature-three-item">
													<h4>Porfolio week </h4>
													<ul className="course-info-list">
														<li>
															Introduction to GatsbyJS, a JavaScript framework & Static
															Site Generator
														</li>
														<li>
															Build and customize your own portfolio to host your projects
															using GatsbyJS & Netlify
														</li>
													</ul>
												</div>
											</div>
										</Accordion>
									</Tab.Pane>
								</Tab.Content>
							</Tab.Container>
						</div>
					</section>
				</div>
			</section>
			<section className="why-choose-section pt-120 rpt-90 pb-130 rpb-100">
				<div className="container">
					<div className="row justify-content-between align-items-center">
						<div className="col-lg-6">
							<div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s">
								<div className="section-title mb-25">
									<h2>Passionate teachers, innovative methods & modern tools</h2>
								</div>

								<ul className="list-style-four pt-5 pb-35">
									<li>Small cohorts with 1 teacher for 10 students</li>
									<li>Weekly projects using real-life data</li>
									<li>Get real-time answers to never be stuck</li>
									<li>Lifetime Access to Pivot2Techs resources </li>
									<li>CV and Job Application support</li>
								</ul>
								<a href="#course-group">
									<div className="theme-btn style-four">
										See Courses <i className="fas fa-arrow-right" />
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

			<section className="testimonials-section bg-white rel z-1 py-100 rpy-100">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-5">
							<div className="testimonial-left-content rmb-65 wow fadeInLeft delay-0-2s">
								<div className="section-title">
									<span className="sub-title mb-15">Testimonials</span>
									<h2>What Our Students Say</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<Slider {...index1Testimonial} className=" ">
								<div className="testimonial-item">
									<div className="testimonial-content">
										<div className="designation">
											<h4>Ayaan Qaasim</h4>
											<span>Fullstack Web Development</span>
										</div>
										<p className="testimonial-p">
											For someone from a completely different industry, Abdulkadir has been really
											patient and thorough in his explaining to make sure no students fall behind,
											a terrific course 10/10 would recommend.
										</p>
										<div className="ratting">
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star" />
										</div>
									</div>
								</div>
								<div className="testimonial-item">
									<div className="testimonial-content">
										<div className="designation">
											<h4>Mohammud Jama</h4>
											<span>Fullstack Web Development</span>
										</div>
										<p stlye={{ maxWidth: '300px' }}>
											I have had the pleasure of having Abdul as my teacher. I found the course
											extremely fun and engaging with practical projects throughout my learning
											process it has taught me to apply my understanding and knowledge.
										</p>
										<div className="ratting">
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star" />
										</div>
									</div>
								</div>
								<div className="testimonial-item">
									<div className="testimonial-content">
										<div className="designation">
											<h4>Yasin Hassan</h4>
											<span>Mentorship Programme</span>
										</div>
										<p stlye={{ maxWidth: '300px' }}>
											Abdulkadir has been an amazing mentor providing me with CV checks &
											assessment centre practice. With his dedication and support I have managed
											to land my first role as a Software Engineer, I highly recommend the
											mentorship scheme he is offering.
										</p>
										<div className="ratting">
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star" />
										</div>
									</div>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</section>
			{/* Work Process Section End */}
			{/* Newsletter Section Start */}
			<div className="">
				<section className="newsletter-section pb-130">
					<div className="container">
						<div className="row align-items-center justify-content-center">
							<div className="col-lg-6">
								<div className="newsletter-content bg-lighter">
									<div className="mb-20">
										<span className="sub-title mb-25">Get Notified</span>
										<h2>Register your intrest</h2>
									</div>

									<form
										onSubmit={(e) => e.preventDefault()}
										className="newsletter-form mt-25"
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
												<label className="custom-control-label" htmlFor="hero-wekly">
													Course Updates
												</label>
											</div>
										</div>
										<div className="newsletter-email">
											<label htmlFor="email">
												<i className="far fa-envelope" />
											</label>
											<input
												id="email"
												type="email"
												placeholder="Enter Email Address"
												required=""
											/>
											<button type="submit" className="theme-btn">
												Subscribe <i className="fas fa-arrow-right" />
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
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
									<img src="https://miro.medium.com/max/1400/0*qmzWtFXW7TrRCM_7" alt="Blog" />
								</div>
								<div className="blog-content">
									<span className="date">
										<span>12</span> October
									</span>
									<div className="content">
										<ul className="blog-meta">
											<li>
												<i className="far fa-user" />{' '}
												<Link href="/blog-details">By Shuayb</Link>
											</li>
											<li>
												<i className="far fa-comments" />{' '}
												<Link href="/blog-details">3min read</Link>
											</li>
										</ul>
										<h5>
											<Link href="/blog-details">
												How Shuayb became a Software Engineer without a degree in 8 months💻
											</Link>
										</h5>
										<p>I took a few online courses on HTML, CSS and JavaScript and began..</p>
										<Link href="/blog-details">
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
