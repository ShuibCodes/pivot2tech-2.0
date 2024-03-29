import PageBanner from "../src/components/PageBanner";
import Head from "next/head";
import Layout from "../src/layout/Layout";

const ContactUs = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us | Pivot2Tech</title>
        <meta
          property="og:url"
          content="https://pivot2tech.co.uk/contact"
        />
        <meta
          property="og:type"
          content="website"
        />
        {/* <meta property="fb:app_id" content="your fb app id" /> */}
        <meta
          property="og:title"
          content="Contact Us | Pivot2Tech"
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
      <PageBanner pageName={"Contact Us"} />

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
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group text-center mb-0">
                  <button
                    type="submit"
                    className="theme-btn"
                  >
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
