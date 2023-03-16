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
        <title>Beginners Freelancing Guide | Pivot2Tech</title>
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
          content="Beginners Freelancing Guide  | Pivot2Tech "
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
                      src="assets/images/bundle-pic.png"
                      alt="freelancing-bundle"
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
            <div className="col-lg-5">
              <div className="product-details-content wow fadeInRight delay-0-2s">
                <h2>Beginner Freelance Bundle</h2>
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
                  <span className="price">13</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      marginLeft: "20px",
                    }}
                    className="price"
                  >
                    28
                  </span>
                </div>

                <div>
                  <h4>100+ copies sold</h4>
                  <h6>
                    If you cant commit to a 7-week course but want to start
                    freelancing, this guide is for you
                  </h6>
                  <p>
                    The Ultimate Guide to Freelancing: Learn to Price Projects,
                    Build Portfolios, Find Clients, Brand Yourself & More!
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <span style={{ padding: "7px" }}>✅</span> How to find
                      clients using UpWork
                    </li>
                    <li>
                      {" "}
                      <span style={{ padding: "7px" }}>✅</span>Low code Website
                      templates -{" "}
                      <span style={{ color: "blue", fontWeight: "bold" }}>
                        worth $160+
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span style={{ padding: "7px" }}>✅</span> Proposal &
                      Contract templates 📋{" "}
                    </li>
                    <li>
                      {" "}
                      <span style={{ padding: "7px" }}>✅</span> Optimize your
                      Upwork profile{" "}
                    </li>
                    <li>
                      {" "}
                      <span style={{ padding: "7px" }}>✅</span> Website
                      Checklist 📋
                    </li>
                  </ul>
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
                      href="https://whop.com/pivot2teech"
                    >
                      Grab a copy
                    </a>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ marginTop: "30px" }}>
        <h4 className="text-center">What others are saying 👇🏾</h4>
        <div className="p-10 freelance-bundle-reviews">
          <div className="review-image">
            <Image
              width="100%"
              height="80%"
              layout="responsive"
              objectFit="contain"
              alt="testimonial for freelance bundle"
              src="/assets/images/freelance-review.png"
            />
          </div>

          <div className="review-image">
            <Image
              width="100%"
              height="80%"
              layout="responsive"
              objectFit="contain"
              alt="testimonial tweet for freelance bundle "
              src="/assets/images/review-3.png"
            />
          </div>
          <div className="review-image">
            <Image
              width="100%"
              height="80%"
              layout="responsive"
              objectFit="contain"
              alt="Student finding 2 clients using the freelance bundle"
              src="/assets/images/review-2.png"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ProductDetails;
