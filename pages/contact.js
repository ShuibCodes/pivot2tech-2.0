import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
const ContactUs = () => {
	return (
		<Layout>
			<PageBanner pageName={'Contact Us'} />

			{/* Contact Info End */}
			{/* Contact Form Start */}
			<section className="contact-form-area wow">
				<div className="container">
					<form
						id="contact-form"
						className="contact-form p-50 z-1 rel"
						name="contact-form"
						action="https://getform.io/f/a5bd7840-377b-4857-934e-b058c13d4aad"
						method="POST"
					>
						<div className="section-title text-center mb-50">
							<span className="sub-title-two">Send Us Message</span>
						</div>
						<div className="row mt-25">
							<div className="col-md-4">
								<div className="form-group">
									<input
										type="email"
										id="email-address"
										name="email"
										className="form-control"
										defaultValue=""
										placeholder="Email Address"
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
										placeholder="Write Message"
										required=""
										defaultValue={''}
									/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group text-center mb-0">
									<button type="submit" className="theme-btn">
										send Message <i className="fas fa-arrow-right" />
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
			{/* Contact Form End */}
			{/* Location Map Area Start */}
		</Layout>
	);
};
export default ContactUs;
