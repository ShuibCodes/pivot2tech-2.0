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
              <h2>Thank you for signing up!</h2>
            </div>
            <h4>Click below to get access to the Pivot2Tech Discord channel</h4>
            <h6 style={{ padding: "30px 0px" }}>
              Make sure you make a Discord account and download the app{" "}
            </h6>
            <p>
              All information including Zoom links, guides and access to the
              team will be on there
            </p>
            <p style={{ color: "white" }}>£299</p>
            <a
              href="https://discord.gg/mKEWp9bGhv"
              className="theme-btn style-two"
            >
              Get Access <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default E404;
