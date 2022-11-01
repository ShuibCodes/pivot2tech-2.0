import { useState } from 'react';
import { Accordion, Nav, Tab } from 'react-bootstrap';
import PageBanner from '../src/components/PageBanner';
import WellernAccordion from '../src/components/WellernAccordion';
import Layout from '../src/layout/Layout';

const Faqs = () => {
	return (
		<Layout>
			<section className="features-section-three rel z-1 pt-110 rpt-85 pb-100 rpb-70">
				<div className="container">
					<section className="faqs-section pt-20 rpt-90 pb-10 rpb-85 wow fadeInUp delay-0-2s">
						<div id="learning" className="container">
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
								<Tab.Content className="ccordion">
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
														Learn by doing, we’ll buld multiple JavaScript projects using
														ReactJs and SQL.You will be building CRUD apps (Create, Read,
														Update, Delete) Using the relational database, SQL, to store and
														exract data.
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
		</Layout>
	);
};
export default Faqs;
