import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const E404 = () => {
  return (
    <Layout>
      {" "}
      <section className="error-section py-130 rpy-100">
        <div className="container">
          <div className="error-inner text-center wow fadeInUp delay-0-2s">
            <div className="section-title mt-50 mb-40">
              <h2>
                Thank you for signing up, and Welcome to the start of your
                future!
              </h2>
            </div>
            <h4>Sign up to our platform below</h4>
            <p>
              This is a self paced course you can start at anytime, all the
              vidoes are uploaded, and you can @ the teacher for questions/help
            </p>

            <a
              href="https://pivot2tech.circle.so/join?invitation_token=45e908ce4922acc2be7e5c8fce4613e57afa1190-1ccd9677-b354-4cba-8ce0-87cc3600c732"
              className="theme-btn style-four"
            >
              <a className="theme-btn style-four">Give me access</a>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default E404;
