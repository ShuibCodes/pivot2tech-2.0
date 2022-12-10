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
			<Link href="/course-details">Fullstack Web Development</Link>
		</li>
		<li>
			<Link href="/course-details">Freelance Course</Link>
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
			<Link href="/became-a-softwar-engineer-without-a-degree-in-8-months">Latest</Link>
		</li>
	</Fragment>
);
