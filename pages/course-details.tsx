export async function getStaticProps() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-05-30",
    useCdn: false,
  });

  const mainCourse = await client.fetch(`
  *[_type == "course"] {
    ...,
    'authorName': author->name,
    'mainImageUrl': mainImage.asset->url,
    'categoryList': categories[]->title,
  }[0]
  `);

  return {
    props: { mainCourse },
    revalidate: 600,
  };
}
