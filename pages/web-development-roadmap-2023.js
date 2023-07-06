import Link from "next/link";
import Head from "next/head";
import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import Image from "next/image";
const ProductDetails = () => {
  return (
    <Layout>
      <Head>
        <title>Web Development Roadmap| Pivot2Tech</title>
        <meta
          property="og:url"
          content="https://pivot2tech.co.uk/product-details"
        />
        <meta
          property="og:type"
          content="website"
        />
        {/* <meta property="fb:app_id" content="your fb app id" /> */}
        <meta
          property="og:title"
          content="Web Development Roadmap | Pivot2Tech "
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="og:description"
          content="Guide includes all you need to start Freelancing & work remotely 🌴"
        />
        <meta
          property="og:image"
          content="https://bigthink.com/wp-content/uploads/2022/06/AdobeStock_323910609.jpeg"
        />
      </Head>
      <section className="product-details pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <Tab.Container
                defaultActiveKey={"preview1"}
                className="product-details-images rmb-55 wow fadeInLeft delay-0-2s"
              >
                <Tab.Content className="tab-content preview-images">
                  <Tab.Pane
                    className="tab-pane fade preview-item"
                    eventKey="preview1"
                  >
                    <img
                      src="assets/images/roadmap.png"
                      alt="freelancing-bundle"
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
            <div className="col-lg-5">
              <div className="product-details-content wow fadeInRight delay-0-2s">
                <h2>Web Development Roadmap 2023</h2>
                <div className="author">
                  <img
                    src="assets/images/shuayb.jpg"
                    alt="author"
                  />
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
                  <h4>FREE</h4>
                </div>

                <div>
                  <h6>
                    Its hard to know what to study when pivoting into tech.
                    Thats why we built this FREE Web Development Roadmap for
                    2023
                  </h6>
                  <p>
                    An in-depth roadmap with a structured roadmap of everything
                    you need
                  </p>
                </div>

                <div></div>
                <hr />
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="add-to-cart mt-95 rmt-45"
                >
                  <button
                    type="submit"
                    className="theme-btn style-two"
                  >
                    <a
                      style={{ color: "white" }}
                      href="pivot2tech.gumroad.com/l/pvhut"
                    >
                      FREE copy
                    </a>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ProductDetails;
