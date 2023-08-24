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
      <Link href="/course-details">Software Engineering</Link>
    </li>
    <li>
      <Link href="/course-details-freelance">
        Freelance Web & Digital Marketing
      </Link>
    </li>
  </Fragment>
);

export const Resources = () => (
  <Fragment>
    <li>
      <Link href="/intro-to-coding">
        FREE intro to Web Development mini-course
      </Link>
    </li>
    <li>
      <Link href="/web-development-roadmap-2023">
        FREE Web Development Roadmap
      </Link>
    </li>
    <li>
      <Link href="/product-details">FREE Starter Freelance Pack</Link>
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
