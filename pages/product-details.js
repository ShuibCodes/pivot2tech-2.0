import Link from 'next/link';
import { Nav, Tab } from 'react-bootstrap';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
const ProductDetails = () => {
	return (
		<Layout>
			<section className="product-details pt-130 rpt-100">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-6">
							<Tab.Container
								defaultActiveKey={'preview1'}
								className="product-details-images rmb-55 wow fadeInLeft delay-0-2s"
							>
								<Tab.Content className="tab-content preview-images">
									<Tab.Pane className="tab-pane fade preview-item" eventKey="preview1">
										<img src="assets/images/bundle-pic.png" alt="freelancing-bundle" />
									</Tab.Pane>
								</Tab.Content>
							</Tab.Container>
						</div>
						<div className="col-lg-5">
							<div className="product-details-content wow fadeInRight delay-0-2s">
								<h2>Beginner Freelance Bundle</h2>
								<div className="author">
									<img src="assets/images/shuayb.jpg" alt="author" />
									<h6>Shuayb</h6>
								</div>
								<div className="ratting-price mb-20">
									<div className="ratting">
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
									</div>
									<span className="price">28</span>
								</div>

								<div>
									<p>
										A Freelance bundle for beginners. This bundle includes guides on how to
										manipulate and use the included 6 website tempaltes. It includes:
									</p>

									<ul>
										<li>
											{' '}
											<span style={{ padding: '7px' }}>✅</span> How to find clients 💰
										</li>
										<li>
											{' '}
											<span style={{ padding: '7px' }}>✅</span>Low code Website templates -{' '}
											<span style={{ color: 'blue', fontWeight: 'bold' }}>worth $160+</span>
										</li>
										<li>
											{' '}
											<span style={{ padding: '7px' }}>✅</span> Proposal & Contract templates 📋{' '}
										</li>
										<li>
											{' '}
											<span style={{ padding: '7px' }}>✅</span> Optimize your Upwork profile{' '}
										</li>
										<li>
											{' '}
											<span style={{ padding: '7px' }}>✅</span> Website Checklist 📋
										</li>
									</ul>
								</div>

								<hr />
								<form
									onSubmit={(e) => e.preventDefault()}
									action="#"
									className="add-to-cart mt-95 rmt-45"
								>
									<button type="submit" className="theme-btn style-two">
										<a style={{ color: 'white' }} href="https://pivot2tech.gumroad.com/l/zenfw">
											Buy Now
										</a>
									</button>
								</form>
							</div>
						</div>
					</div>
					{/* <Tab.Container defaultActiveKey={'details'}>
						<Nav as={'ul'} className="nav border-bottom-1 product-information-tab pt-55 mb-40">
							<Nav.Item as={'li'}>
								<Nav.Link eventKey={'details'} href="#details">
									Description
								</Nav.Link>
							</Nav.Item>
							<Nav.Item as={'li'}>
								<Nav.Link eventKey={'information'} href="#information">
									Information
								</Nav.Link>
							</Nav.Item>
							<Nav.Item as={'li'}>
								<Nav.Link eventKey={'review'} href="#review">
									Review (05)
								</Nav.Link>
							</Nav.Item>
						</Nav>
						<Tab.Content className="tab-content wow fadeInUp delay-0-2s">
							<Tab.Pane className="tab-pane" eventKey="details">
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verit
									atis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
									voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
									magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
									qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non
									numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
									voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
									suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
									iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
									vel illum qui dolorem eum
								</p>
								<form
									onSubmit={(e) => e.preventDefault()}
									id="review-form"
									className="review-form p-50 mt-50 mb-30"
									name="review-form"
									action="#"
									method="post"
								>
									<h4>Leave Your Reviews</h4>
									<div className="your-ratting">
										<h6>Your Ratting</h6>
										<div className="ratting">
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star" />
										</div>
									</div>
									<div className="row mt-25">
										<div className="col-md-4">
											<div className="form-group">
												<input
													type="text"
													id="full-name"
													name="full-name"
													className="form-control"
													defaultValue=""
													placeholder="Full Name"
													required=""
												/>
											</div>
										</div>
										<div className="col-md-4">
											<div className="form-group">
												<input
													type="email"
													id="shop-email"
													name="shop-email"
													className="form-control"
													defaultValue=""
													placeholder="Email Address"
													required=""
												/>
											</div>
										</div>
										<div className="col-md-4">
											<div className="form-group">
												<input
													type="text"
													id="phone"
													name="phone"
													className="form-control"
													defaultValue=""
													placeholder="Phone Number"
													required=""
												/>
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<textarea
													name="message"
													id="message"
													className="form-control"
													rows={4}
													placeholder="Write Comments"
													required=""
													defaultValue={''}
												/>
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group mb-0">
												<button type="submit" className="theme-btn">
													send reviews <i className="fas fa-arrow-right" />
												</button>
											</div>
										</div>
									</div>
								</form>
							</Tab.Pane>
							<Tab.Pane className="tab-pane" eventKey="information">
								<p>
									inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
									ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
									consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
									quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
									sed quia non numquam
								</p>
								<ul className="list-style-two mt-25 mb-25">
									<li>Strong lens for long distance surveillance.</li>
									<li>WIFI technology can view and view the Internet</li>
									<li>Auto Night Vision, Clear video can be seen in the dark at night</li>
									<li>Video recording system on a memory card</li>
									<li>You can watch back videos from the phone</li>
									<li>
										CCTV videos can be viewed live on your Laptop, Desktop, Smartphone or Tablet PC
									</li>
									<li>Direct monitoring of your favorite places from all parts of the world.</li>
									<li>Talking and listening to the two ends. (Same Like Mobile)</li>
									<li>Wide Angle and Long Length</li>
									<li>Smart zooming point</li>
									<li>HD quality video output.</li>
									<li>Smart Alarming System</li>
									<li>Power system 12 volts (without adapter)</li>
								</ul>
								<p>
									Now wherever you are, wherever you are, you can easily monitor your CCTV videos
									through your mobile, tab, laptop or PC. With the wireless camera, you can view the
									camera from your mobile or computer to the right-left 0 to 360-degree video. Cover
									the flower room with a camera.
								</p>
							</Tab.Pane>
							<Tab.Pane className="tab-pane" eventKey="review">
								<ul className="comment-list">
									<li>
										<div className="comment-body">
											<div className="author-thumb">
												<img src="assets/images/blog/comment-author1.jpg" alt="Image" />
											</div>
											<div className="comment-content">
												<div className="name-date">
													<h6>John F. Medina</h6>
													<span className="comment-date">25 Feb 2022</span>
													<div className="ratting">
														<i className="fas fa-star" />
														<i className="fas fa-star" />
														<i className="fas fa-star" />
														<i className="fas fa-star" />
														<i className="fas fa-star" />
													</div>
												</div>
												<p>
													Quis autem vel eum iure reprehenderit quin voluptate velit esseeso
													quam nihile molestiae consequatur veillum quolore
												</p>
												<a href="#" className="reply-link">
													Reply <i className="fas fa-long-arrow-alt-right" />
												</a>
											</div>
										</div>
										<ul className="children">
											<li>
												<div className="comment-body">
													<div className="author-thumb">
														<img src="assets/images/blog/comment-author2.jpg" alt="Image" />
													</div>
													<div className="comment-content">
														<div className="name-date">
															<h6>Somalia D. Silva</h6>
															<span className="comment-date">25 Feb 2022</span>
															<div className="ratting">
																<i className="fas fa-star" />
																<i className="fas fa-star" />
																<i className="fas fa-star" />
																<i className="fas fa-star" />
																<i className="fas fa-star" />
															</div>
														</div>
														<p>
															Quis autem vel eum iure reprehenderit quin voluptate velit
															esseeso quam nihile molestiae consequatur veillum quolore
														</p>
														<a href="#" className="reply-link">
															Reply <i className="fas fa-long-arrow-alt-right" />
														</a>
													</div>
												</div>
											</li>
										</ul>
									</li>
									<li>
										<div className="comment-body">
											<div className="author-thumb">
												<img src="assets/images/blog/comment-author3.jpg" alt="Image" />
											</div>
											<div className="comment-content">
												<div className="name-date">
													<h6>Roger A. Torrence</h6>
													<span className="comment-date">25 Feb 2022</span>
													<div className="ratting">
														<i className="fas fa-star" />
														<i className="fas fa-star" />
														<i className="fas fa-star" />
														<i className="fas fa-star" />
														<i className="fas fa-star" />
													</div>
												</div>
												<p>
													Quis autem vel eum iure reprehenderit quin voluptate velit esseeso
													quam nihile molestiae consequatur veillum quolore
												</p>
												<a href="#" className="reply-link">
													Reply <i className="fas fa-long-arrow-alt-right" />
												</a>
											</div>
										</div>
									</li>
								</ul>
							</Tab.Pane>
						</Tab.Content>
					</Tab.Container> */}
				</div>
			</section>
			{/* Product Details End */}
			{/* Popular Products Start */}
			{/* <section className="popular-product pt-90 rpt-60 pb-100 rpb-70">
				<div className="container">
					<div className="section-title text-center mb-45">
						<span className="sub-title-two">Popular Products</span>
						<h2>Visit Our Related Products</h2>
					</div>
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<div className="product-item wow fadeInUp delay-0-2s">
								<div className="product-image">
									<span className="off">25% off</span>
									<img src="assets/images/shop/product5.png" alt="Products" />
									<a href="https://pivot2tech.gumroad.com/l/zenfw">
										<a className="cart-btn">Buy Now</a>
									</a>
								</div>
								<div className="product-content">
									<h6>
										<Link href="/product-details">Beginner Freelance Guide</Link>
									</h6>
									<span className="category">Medical Equipment</span>
									<div className="ratting">
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
									</div>
									<span className="price">
										<del>73.56</del>
										<span>53.56</span>
									</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<div className="product-item wow fadeInUp delay-0-4s">
								<div className="product-image">
									<img src="assets/images/shop/product6.png" alt="Products" />
									<Link href="/contact">
										<a className="cart-btn">add to cart</a>
									</Link>
								</div>
								<div className="product-content">
									<h6>
										<Link href="/product-details">PSD Book Mockup</Link>
									</h6>
									<span className="category">Medical Equipment</span>
									<div className="ratting">
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
									</div>
									<span className="price">
										<span>53.56</span>
									</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<div className="product-item wow fadeInUp delay-0-6s">
								<div className="product-image">
									<img src="assets/images/shop/product7.png" alt="Products" />
									<Link href="/contact">
										<a className="cart-btn">add to cart</a>
									</Link>
								</div>
								<div className="product-content">
									<h6>
										<Link href="/product-details">Beginner Freelance Guide</Link>
									</h6>
									<span className="category">Medical Equipment</span>
									<div className="ratting">
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
									</div>
									<span className="price">
										<span>53.56</span>
									</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<div className="product-item wow fadeInUp delay-0-8s">
								<div className="product-image">
									<span className="off">25% off</span>
									<img src="assets/images/shop/product8.png" alt="Products" />
									<Link href="/contact">
										<a className="cart-btn">add to cart</a>
									</Link>
								</div>
								<div className="product-content">
									<h6>
										<Link href="/product-details">PSD Book Mockup</Link>
									</h6>
									<span className="category">Medical Equipment</span>
									<div className="ratting">
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
									</div>
									<span className="price">
										<del>73.56</del>
										<span>53.56</span>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</Layout>
	);
};
export default ProductDetails;
