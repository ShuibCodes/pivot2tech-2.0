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

            <a
              href="https://pivot2tech.circle.so/join?invitation_token=831e17b041678b60b4b241f104c3d24ae31b9c9a-f4ce8a32-9d4d-40cd-b13f-70d0a0515ecb"
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
