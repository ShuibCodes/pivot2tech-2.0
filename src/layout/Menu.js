import Link from 'next/link';
import { Fragment } from 'react';

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
			<Link href="/course-details">Web Development Bootcamp</Link>
		</li>
		<li>
			<Link href="/course-details-freelance">Freelance Bootcamp</Link>
		</li>
	</Fragment>
);

export const Pages = () => <Fragment></Fragment>;

export const Blog = () => (
	<Fragment>
		<li>
			<Link href="/blog-details">Blog </Link>
		</li>
	</Fragment>
);
