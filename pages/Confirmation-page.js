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
            <h4>
              You'll receive an onboarding email in 5 working days with
              instructions
            </h4>
            <p>Keep an eye out for our email!</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default E404;
