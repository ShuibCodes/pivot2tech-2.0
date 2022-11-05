import Isotope from 'isotope-layout';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
const Index1Isotope = () => {
	return (
		<section id="what-learn" className="coach-section rel z-1 pt-120 rpt-90 pb-100 rpb-70 bg-lighter">
			<div className="container cards-title">
				<h3 className="text-center cards-title-text ">Build your dream career with our tech bootcamps</h3>
				<p className="text-center  cards-paragraph ">
					Change careers and start your journey as a web developer with our live online courses. Learn the
					skills to freelance or a Job in tech!
				</p>
				<div className="text-center" style={{ margin: '0 auto' }}>
					<ul
						style={{ display: 'flex', gap: '15px', fontSize: '12px', justifyContent: 'center' }}
						className="list-style-four "
					>
						<li style={{ fontSize: '16px' }}>Live & recorded classes</li>
						<li style={{ fontSize: '16px' }}>For complete beginners</li>
					</ul>
					<ul
						style={{ display: 'flex', gap: '15px', fontSize: '12px', justifyContent: 'center' }}
						className="list-style-four  "
					>
						<li style={{ fontSize: '16px' }}> online suppport & community</li>
					</ul>
				</div>
			</div>
			<div className="container">
				<div className="row coach-active justify-content-center">
					<div className="col-lg-4 col-md-6 item development photography">
						<div id="what-learn" className="coach-item wow fadeInUp delay-0-4s">
							<div className="coach-image">
								<Link href="/course-grid">
									<a className="category">13 Weeks</a>
								</Link>
								<img src="assets/images/coachs/coach5.jpg" alt="Coach" />
							</div>
							<div className="coach-content">
								<span className="label">Online Lessons</span>
								<h4>
									<Link href="/course-details">Fullstack Web Development</Link>
								</h4>
								<div className="ratting-price">
									<span className="price">130</span>
									<span className="bold" style={{ fontSize: '18px' }}>
										or £43/m - 3 months
									</span>
								</div>
								<ul className="coach-footer">
									<li>
										<i className="far fa-file-alt" />
										<span>Tuesday & Saturdays 7-9pm</span>
										<p className="">
											<strong>All Classes Are Recorded</strong>
										</p>
									</li>
								</ul>
								<ul className="coach-footer">
									<li>
										<i className="far fa-clock" />
										<span>15 Dec - 22nd March</span>
									</li>
								</ul>
								<Link href="/course-details">
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
					<div className="col-lg-4 col-md-6 item design technology">
						<div className="coach-item wow fadeInUp delay-0-6s">
							<div className="coach-image">
								<Link href="/course-grid">
									<a className="category">13 Weeks</a>
								</Link>
								<img
									src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwYm9vdGNhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
									alt="Coach"
								/>
							</div>
							<div className="coach-content">
								<span className="label">Online Lessons</span>
								<h4>
									<Link href="/course-details">Freelance Web Development</Link>
								</h4>
								<div className="ratting-price">
									<span className="price">130</span>
									<span style={{ fontSize: '18px' }}>or 43/m 3 months</span>
								</div>
								<ul className="coach-footer">
									<li>
										<i className="far fa-file-alt" />
										<span>Thursday & Sundays 7-9pm</span>
										<p className="">
											<strong>All Classes Are Recorded</strong>
										</p>
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
				</div>
			</div>
		</section>
	);
};
export default Index1Isotope;
