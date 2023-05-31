
import Link from "next/link";
import Image from "next/image";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"


import Layout from "../../src/layout/Layout";

export default function Post({ post }) {

  const niceDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Layout>
      <section className="became-a-softwar-engineer-without-a-degree-in-8-months-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="became-a-softwar-engineer-without-a-degree-in-8-months-wrap">
                <div className="image mb-25 wow fadeInUp delay-0-2s">
                  <h3 className="title">{post.title} 💻</h3>
                  <Image
                    src={post.mainImageUrl}
                    alt="blog-image"
                    width="770"
                    height="433"
                  />

                  <Link href="/">
                    <i className="fas fa-share-alt" />
                  </Link>
                </div>
                <ul className="blog-standard-header wow fadeInUp delay-0-2s">
                  <li>
                    <span className="name">
                      {post.authorName}
                    </span>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />{" "}
                    <Link href="/blog/became-a-software-engineer-without-a-degree-in-8-months">
                      {niceDate}
                    </Link>
                  </li>
                  <li>
                    {/* <Link href="/blog/became-a-softwar-engineer-without-a-degree-in-8-months"> */}
                    {/* {frontmatter.read_time} */}
                    {/* </Link>   */}
                  </li>
                </ul>
                <PortableText
                  // Pass in block content straight from Sanity.io
                  content={post.body}
                  // Optionally override marks, decorators, blocks, etc. in a flat
                  // structure without doing any gymnastics
                  serializers={{
                    h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                    li: ({ children }) => <li className="special-list-item">{children}</li>,
                  }}
                />
              
                <div className="tag-coulds pb-25 d-flex align-items-center">

                  <h6 className="mr-3">Tags</h6>
                  {post.categoryList.map((category) => (
                    
                    <Link href="/">{category}</Link>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {

  const client = createClient({
    projectId: "ljgfsbre",
    dataset: "production",
    apiVersion: "2023-05-30",
    useCdn: false
  });

  const posts = await client.fetch(`*[_type == "post"]`);

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  const { slug } = params;

  const client = createClient({
    projectId: "ljgfsbre",
    dataset: "production",
    apiVersion: "2023-05-30",
    useCdn: false
  });

  const post = await client.fetch(`
  *[_type == "post" && slug.current == "${slug}"] {
    ...,
    'authorName': author->name,
    'mainImageUrl': mainImage.asset->url,
    'categoryList': categories[]->title,
  }[0]
  `);

  return {
    props: {
      post,
    }
  };
}
