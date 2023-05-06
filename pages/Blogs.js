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
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-55">
                <span className="sub-title mb-20">News &amp; Blog</span>
                <h2>Blogs</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image">
                  <img
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
                    <p>
                      I took a few online courses on HTML, CSS and JavaScript
                      and began..
                    </p>
                    <Link href="blog/become-a-software-engineer-without-a-degree-in-8-months">
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
                    <p>
                      Software engineering can be an incredibly rewarding
                      profession, offering a wide range of career opportunities
                      in the technology sector...
                    </p>
                    <Link href="blog/what-are-the-different-roles-in-software-engineering-frontend-backend-and-fullstack">
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
