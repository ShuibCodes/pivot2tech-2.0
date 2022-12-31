import fs from 'fs';
import path from 'path';
import Head from "next/head";
import Link from 'next/link';
import matter from 'gray-matter'
import { Fragment } from 'react';

//TODO: This needs to be linked to the blog template.

const Blog = (props) => {
  return (
    <>
      <Head>
        <title>Pivot2Tech | Blog</title>
      </Head>
      <main>
				{
					props.posts.map((post, idx) => (
						<Fragment key={idx}>
							<Link href={`blog/${post.slug}`}>{post.frontmatter.title}</Link>
						</Fragment>
					))
				}
			</main>
    </>
  );
};

export default Blog;


export async function getStaticProps() {
  // get files from posts directory
  const files = fs.readdirSync(path.join('posts'));

  // get slug and frontmatter from posts
  const posts = files.map((file) => {
    const slug = file.replace('.md', '');
    const markdownFrontMatter = fs.readFileSync(path.join('posts', file), 'utf-8');

    const { data: frontmatter } = matter(markdownFrontMatter);

    return {
      slug,
      frontmatter
    }
  });
  return {
    props: {
      posts: posts
    }
  }
}