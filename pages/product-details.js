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
                <Tab.Content className="">
                  <Tab.Pane
                    className=""
                    eventKey="preview1"
                  >
                    <img
                      style={{ padding: "15px 0px" }}
                      src="assets/images/bundle-image.png"
                      alt="freelancing-bundle"
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
            <div className="col-lg-5">
              <div className="product-details-content wow fadeInRight delay-0-2s">
                <h2 className="">Beginner Freelance Bundle</h2>
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
                  <span
                    style={{
                      color: "#1F4ECE",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    FREE
                  </span>

                  <span
                    style={{
                      textDecoration: "line-through",
                      marginLeft: "20px",
                    }}
                    className="price"
                  >
                    99
                  </span>
                </div>
                {/* <p style={{ fontWeight: "700", fontSize: "21px" }}>
                  ** Limited time offer **
                </p> */}
                <div>
                  <h6>
                    If you cant commit to a 7-week course but want to start
                    freelancing, this starter pack is for you
                  </h6>
                  <p>
                    The Ultimate Guide to Freelancing: Learn to Find clients,
                    build no-code websites from scratch and start your
                    freelancing career
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <span style={{ padding: "7px" }}>✅</span>$160 worth of 5
                      No-code Website templates
                    </li>
                    <li>
                      {" "}
                      <span style={{ padding: "7px" }}>✅</span> Video tutorials
                      on acquiring your first client
                    </li>
                    <li>
                      {" "}
                      <span style={{ padding: "7px" }}>✅</span> Templates for
                      Proposals & Contracts 📋
                    </li>
                    <li>
                      {" "}
                      <span style={{ padding: "7px" }}>✅</span> Upwork profile
                      optimization guide
                    </li>
                    <li>
                      {" "}
                      <span style={{ padding: "7px" }}>✅</span> Website
                      Checklist 📋
                    </li>
                    <li>
                      <span style={{ padding: "7px" }}>✅</span>
                      How To Start Freelancing, With No Experience - The
                      Complete Guide - Ebook
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
                      href="https://pivot2tech.gumroad.com/l/zenfw"
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
              alt="Student finding 2 clients using the freelance bundle"
              src="/assets/images/bundle-review.jpeg"
            />
          </div>
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
