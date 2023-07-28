import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Home</Link>
    </li>
  </Fragment>
);

export const Courses = () => (
  <Fragment>
    <li>
      <Link href="/course-details">Frontend Web Development</Link>
    </li>
    <li>
      <Link href="/course-details-freelance">
        Freelance Web & Digital Marketing
      </Link>
    </li>
    <li>
      <Link href="/product-details">Beginners Freelance Bundle</Link>
    </li>
  </Fragment>
);

export const Resources = () => (
  <Fragment>
    <li>
      <Link href="/web-development-roadmap-2023">
        FREE Web Development Roadmap
      </Link>
    </li>
    <li>
      <Link href="/product-details">Beginners Freelance Bundle</Link>
    </li>
  </Fragment>
);
export const Pages = () => <Fragment></Fragment>;

export const Blog = () => (
  <Fragment>
    {/* <li>
			<Link href="/blog">Blog Page</Link>
		</li> */}
    <li>
      <Link href="blogs">Latest</Link>
    </li>
  </Fragment>
);
