import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../src/layout/Layout";
import { createClient } from "next-sanity";


function Blog({posts}) {
  return (
    <Layout header={null} footer={null} key={2}>
      <section
        id="blog"
        className="blog-section"
      >
        <div
          style={{ marginTop: "100px" }}
          className="container"
        >
          <div className="row">

              {posts.map((post) => {
                const day = new Date(post.publishedAt).getDate();
                const month = new Date(post.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                  }
                );
                return (

                <div className="col-xl-3 col-lg-6 col-sm-6">
                <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image">
                  <img
                    className="blog-image"
                    src={post.mainImageUrl}
                    alt="Blog"
                  />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>{day}</span> {month}
                  </span>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />{" "}
                        <Link href={`/blog/${post.slug.current}`}>
                          <span>

                          By {post.authorName}
                          </span>
                        </Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        <Link href={`/blog/${post.slug.current}`}>
                          3min read
                        </Link>
                      </li>
                    </ul>
                    <h5>
                    <Link href={`/blog/${post.slug.current}`}>
                       {post.title}
                      </Link>
                    </h5>

                    <Link href={`/blog/${post.slug.current}`}>
                      <a className="read-more">
                        Read more <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
                )
              }
              )}
         
          
          </div>
          <div className="blog-more-btn pt-30 text-center"></div>
        </div>
      </section>
    </Layout>
  );
}

export default Blog;





export async function getStaticProps() {
  // const markdownFrontMatter = fs.readFileSync(
  //   path.join("posts", `${slug}.md`),
  //   "utf-8"
  // );
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-05-30",
    useCdn: false
  });
  // const { data: frontmatter, content } = matter(markdownFrontMatter);
  const posts = await client.fetch(`*[_type == "post"] {
    ...,
    'authorName': author->name,
    'mainImageUrl': mainImage.asset->url
  }`);








  return {
    props: {
      posts,

      // slug,
      // frontmatter,
      // content,
    }
  };
}
