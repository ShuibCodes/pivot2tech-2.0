import fs from 'fs';
import path from 'path';
import Head from "next/head";
import Link from 'next/link';
import matter from 'gray-matter'
import { Fragment } from 'react';
import { createClient } from 'next-sanity';

//TODO: This needs to be linked to the blog template.

const Blog = ({posts}) => {
  return (
    <>
      <Head>
        <title>Pivot2Tech | Blog</title>
      </Head>
      <main>
				{
					posts.map((post, idx) => (
						<Fragment key={idx}>
							<Link href={`blog/${post.slug.current}`}>{post.title}</Link>
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
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-05-30",
    useCdn: false
  });

  const posts = await client.fetch(`
  *[_type == "post"]
  `);

  return {
    props: {
      posts: posts
    }
  }
}