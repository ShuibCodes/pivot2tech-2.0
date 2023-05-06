import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../src/layout/Layout";
function Blogs() {
  return (
    <Layout>
      <section
        id="blog"
        className="blog-section"
      >
        <div
          style={{ marginTop: "100px" }}
          className="container"
        >
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image">
                  <img
                    className="blog-image"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    alt="Blog"
                  />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>6</span> May
                  </span>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />{" "}
                        <Link href="/blog/from-beginner-to-web-developer-7-steps">
                          By Shuayb
                        </Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        <Link href="/blog/from-beginner-to-web-developer-7-steps">
                          3min read
                        </Link>
                      </li>
                    </ul>
                    <h5>
                      <Link href="/blog/from-beginner-to-web-developer-7-steps">
                        From Beginner to Web Developer: 7 Steps to Get You
                        Started
                      </Link>
                    </h5>

                    <Link href="blog/from-beginner-to-web-developer-7-steps">
                      <a className="read-more">
                        Read more <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image">
                  <img
                    className="blog-image"
                    src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Blog"
                  />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>3</span> January
                  </span>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />{" "}
                        <Link href="blog/what-are-the-different-roles-in-software-engineering-frontend-backend-and-fullstack">
                          By Shuayb
                        </Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        <Link href="blog/what-are-the-different-roles-in-software-engineering-frontend-backend-and-fullstack">
                          3min read
                        </Link>
                      </li>
                    </ul>
                    <h5>
                      <Link href="blog/what-are-the-different-roles-in-software-engineering-frontend-backend-and-fullstack">
                        What are the different roles in Software Engineering?
                        Frontend, Backend & Fullstack
                      </Link>
                    </h5>

                    <Link href="blog/what-are-the-different-roles-in-software-engineering-frontend-backend-and-fullstack">
                      <a className="read-more">
                        Read more <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image">
                  <img
                    className="blog-image"
                    src="https://miro.medium.com/max/1400/0*qmzWtFXW7TrRCM_7"
                    alt="Blog"
                  />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>12</span> October
                  </span>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />{" "}
                        <Link href="blog/become-a-software-engineer-without-a-degree-in-8-months">
                          By Shuayb
                        </Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        <Link href="blog/become-a-software-engineer-without-a-degree-in-8-months">
                          3min read
                        </Link>
                      </li>
                    </ul>
                    <h5>
                      <Link href="blog/become-a-software-engineer-without-a-degree-in-8-months">
                        How Shuayb became a Software Engineer without a degree
                        in 8 months💻
                      </Link>
                    </h5>

                    <Link href="blog/become-a-software-engineer-without-a-degree-in-8-months">
                      <a className="read-more">
                        Read more <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-more-btn pt-30 text-center"></div>
        </div>
      </section>
    </Layout>
  );
}

export default Blogs;
