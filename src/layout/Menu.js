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
			<Link href="#course-group">All Courses</Link>
		</li>
		<li>
			<Link href="/course-details">Web Development Bootcamp</Link>
		</li>
	</Fragment>
);

export const Pages = () => <Fragment></Fragment>;

export const Blog = () => (
	<Fragment>
		<li>
			<Link href="/blog">Blog Page</Link>
		</li>
		<li>
			<Link href="/blog-details">Blog Details</Link>
		</li>
	</Fragment>
);
