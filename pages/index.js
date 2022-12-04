import Link from 'next/link';
import Layout from '../src/layout/Layout';
import Head from 'next/head';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Slider from 'react-slick';
import FAQs from '../src/components/FAQ';
import Banner from '../src/components/Banner';
import { Accordion, Nav, Tab } from 'react-bootstrap';
import Index1WorkStepSlider from '../src/components/slider/Index1WorkStepSlider';
import { index1EventWrap, index1Testimonial } from '../src/sliderProps';
import Advertise from '../src/components/Advertise';
const Index1Isotope = dynamic(() => import('../src/components/isotope/Index1Isotope'), {
	ssr: false,
});

const Index = () => {
	return (
		<Head>
			<Layout header={1} footer={1}>
				<section className="hero-section rel z-1 pt-150 rpt-135 pb-75 rpb-100">
					{/* <Banner /> */}
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-7">
								<div className="hero-content rpt-25 rmb-75">
									<span className="sub-title style-two mb-20 wow fadeInUp delay-0-2s ">
										Courses start at £43/m
									</span>
									<h3 className="mb-20 wow fadeInUp delay-0-4s">
										Launch your <span style={{ color: '#1F4ECE' }}>tech career,</span> join our
										coding bootcamps
									</h3>

									<p className="wow fadeInUp delay-0-6s">
										Change careers and start your journey as a web developer with our live online
										courses. Learn the skills to freelance or a Job in tech!
									</p>
									<span style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '18px' }}>
										Latest student landed £35k role!
									</span>
									<div className="hero-btn-group">
										<div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
											<Link href="/course-details">
												<a className="theme-btn grab-course">
													Grab your course
													<i className="fas fa-arrow-right" />
												</a>
											</Link>
										</div>
										<div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
											<a
												href="/curriculum"
												style={{ backgroundColor: '#1F4ECE' }}
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
				<section id="what-learn" className="coach-section rel z-1 pt-120 rpt-90 pb-100 rpb-70 bg-lighter">
					<div className="container cards-title pb-120">
						<h3 className="text-center cards-title-text ">
							Build your dream career with our tech bootcamps
						</h3>
						<p className="text-center  cards-paragraph "></p>
						<div className="text-center" style={{ margin: '0 auto' }}>
							<ul style={{ fontSize: '22px' }} className="list-style-four">
								<li style={{ fontSize: '22px' }}>Live & recorded classes</li>
								<li style={{ fontSize: '22px' }}>For complete beginners</li>
							</ul>
							<ul style={{ fontSize: '22px' }} className="list-style-four">
								<li style={{ fontSize: '22px' }}> online suppport & community</li>
							</ul>
						</div>
					</div>
					<div id="courses-group" className="container">
						<div className="row coach-active justify-content-center">
							<Link href="/course-details">
								<div className="col-lg-4 col-md-6 item development photography">
									<div id="what-learn" className="coach-item wow fadeInUp delay-0-4s">
										<div className="coach-image">
											<Link href="/course-grid">
												<a style={{ fontSize: '11px' }} className="category">
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
												<span className="bold" style={{ fontSize: '13px' }}>
													Tuesday & Saturdays 7-9pm
												</span>
											</div>
											<p style={{ fontSize: '20px', color: 'blue' }}>
												<strong> Sorry, We're at Capacity!</strong>
											</p>
											<p style={{ fontSize: '18px', color: 'black' }}>
												<strong>Next Cohort: 14th March </strong>
											</p>

											<a
												ahref="https://forms.gle/5A3KUHuDvGn1ZkTC9"
												style={{ padding: '10px', fontSize: '11px', margin: '10px 0px' }}
												className="theme-btn"
											>
												Register your interest
												<i className="fas fa-arrow-right" />
											</a>

											<ul style={{ marginTop: '10px' }} className="course-tags">
												<li>
													{' '}
													<span style={{ marginRight: '8px' }}>💻</span> 4 real-life projects
												</li>
												<li>
													{' '}
													<span style={{ marginRight: '8px' }}>👨‍🏫</span>Homework and project
													review
												</li>
												<li>
													{' '}
													<span style={{ marginRight: '8px' }}>👨‍🔧👩‍🔧</span> Live chat support
												</li>
												<li>
													{' '}
													<span style={{ marginRight: '8px' }}>📆</span> Weekly deadlines
												</li>
												<li>
													{' '}
													<span style={{ marginRight: '8px' }}>∞ </span>Lifetime access
												</li>
											</ul>
											<Link href="/course-details">
												<a
													style={{
														padding: '10px',
														fontSize: '9px',
														margin: '10px 0px',
														backgroundColor: '#0084DF',
													}}
													className="theme-btn"
												>
													Learn More
												</a>
											</Link>
										</div>
									</div>
								</div>
							</Link>

							<Link href="course-details-freelance">
								<div className="col-lg-4 col-md-6 item design technology">
									<div className="coach-item wow fadeInUp delay-0-6s">
										<div className="coach-image">
											<Link href="/course-grid">
												<a style={{ fontSize: '11px' }} className="category">
													13 Weeks
												</a>
											</Link>
											<img src="assets/images/digital-nomad-3.jpg" alt="Coach" />
										</div>
										<div className="coach-content">
											<span className="label">Online Lessons</span>
											<h4>
												<Link href="/course-details-freelance">Freelance Web Development</Link>
											</h4>
											<div className="ratting-price">
												<span className="bold" style={{ fontSize: '13px' }}>
													Thursday & Sundays 7-9pm
												</span>
											</div>
											<p style={{ fontSize: '20px', color: 'blue' }}>
												<strong>8 spaces</strong>
											</p>
											<ul className="course-tags">
												<li>
													{' '}
													<span style={{ marginRight: '8px' }}> 💰💰</span>Earn extra £800/m
													Freelancing part time
												</li>
												<li>
													{' '}
													<span style={{ marginRight: '8px' }}> 💻</span>Learn SEO & Low-code
													Web Design
												</li>
												<li>
													{' '}
													<span style={{ marginRight: '8px' }}>🛠</span> 5 Website templates
												</li>
												<li>
													{' '}
													<span style={{ marginRight: '8px' }}> 🧭</span>Blueprint on how to
													market yourself online
												</li>
												<li>
													{' '}
													<span style={{ marginRight: '8px' }}>∞</span> Lifetime access to{' '}
													<Link href="/product-details"> Beginners Freelance bundle</Link>
												</li>
											</ul>
											<Link href="/course-details-freelance">
												<a
													style={{ padding: '10px', fontSize: '11px', margin: '10px 0px' }}
													className="theme-btn"
												>
													Book a seat
													<i className="fas fa-arrow-right" />
												</a>
											</Link>
										</div>
									</div>
								</div>
							</Link>
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
											<Link href="/course-details">Beginners Freelancing Guide</Link>
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
													{' '}
													<i className="far fa-file-alt" />5 Website templates- (worth £160+)
												</p>
												<p>
													{' '}
													<i className="far fa-file-alt" />
													Video guides to deploy no-code Websites
												</p>
											</li>
										</ul>
										<Link href="/product-details">
											<a
												style={{ padding: '10px', fontSize: '11px', margin: '10px 0px' }}
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
						<Link href="/curriculum">
							<a className="theme-btn">
								View Curriculum
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
										<h2>Passionate teachers, innovative methods & modern tools</h2>
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
				<div className="section-title text-center">
					<span className="sub-title mb-15">Testimonials</span>
					<h2>What Our Students Say</h2>
				</div>
				<section className="testimonials-section bg-white rel z-1 py-100 rpy-100">
					<div className="container">
						<div className="row align-items-center justify-content-between">
							<div className="col-lg-6">
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
							</div>

							<div className="col-lg-6">
								<div className="testimonial-item">
									<div className="testimonial-content">
										<div className="designation">
											<h4>Guled Muse</h4>
											<span>Fullstack Web Development</span>
										</div>
										<p className="testimonial-p">
											I feel as though I am being taken serious. Abdul is giving me a hand with CV
											tips along with getting me interview ready discussing possible questions as
											well as practice interviews to prepare me.
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
		</Head>
	);
};
export default Index;
