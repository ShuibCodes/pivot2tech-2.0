import Head from "next/head";

export const Post = (props) => {
  return (
    <Head>
      <title>{props.blogName}</title>
    </Head>
  );
};
