import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import matter from "gray-matter";
import { marked } from 'marked';

import Layout from "../../src/layout/Layout";

export default function Post({ frontmatter, slug, content }) {
  return (
    <Layout>
      <section className="became-a-softwar-engineer-without-a-degree-in-8-months-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="became-a-softwar-engineer-without-a-degree-in-8-months-wrap">
                <div className="image mb-25 wow fadeInUp delay-0-2s">
                  <h3 className="title">
                    {frontmatter.title} 💻
                  </h3>
                  <Image src="https://miro.medium.com/max/1400/0*qmzWtFXW7TrRCM_7" alt="blog-image" width="770" height="433" />

                  <Link href="/">
                    <i className="fas fa-share-alt" />
                  </Link>
                </div>
                <ul className="blog-standard-header wow fadeInUp delay-0-2s">
                  <li>
                    <span className="name">Shuayb A</span>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />{" "}
                    <Link href="/blog/became-a-software-engineer-without-a-degree-in-8-months">
                      {frontmatter.date}
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/became-a-softwar-engineer-without-a-degree-in-8-months">
                      {frontmatter.read_time}
                    </Link>
                  </li>
               </ul>
                <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
                <div className="tag-coulds pb-25 d-flex align-items-center">
                  <h6 className="mr-3">Tags</h6>
                  <Link href="/">Software Engineering</Link>
                  <Link href="/">Careers</Link>
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
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((file) => ({
    params: { slug: file.replace(".md", "") },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug }}) {
  const markdownFrontMatter = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf-8')
  const {data: frontmatter, content } = matter(markdownFrontMatter);

  return {
    props: {
      slug,
      frontmatter,
      content
    },
  };
}
