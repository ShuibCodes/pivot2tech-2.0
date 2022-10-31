import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const E404 = () => {
  return (
    <Layout>
      <PageBanner pageName={"404"} />
      <section className="error-section py-130 rpy-100">
        <div className="container">
          <div className="error-inner text-center wow fadeInUp delay-0-2s">
            <img src="assets/images/404.png" alt="Error" />
            <div className="section-title mt-50 mb-40">
              <h2>OPPS! This Page Are Can’t Be Found</h2>
            </div>
            <Link href="/index">
              <a className="theme-btn style-two">
                goto home <i className="fas fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default E404;
