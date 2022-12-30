import Link from 'next/link';
import { useState } from 'react';
import { Blog, Courses, Home, Pages } from './Menu';

const MobileHeader = () => {
	const [activeMenu, setActiveMenu] = useState('');
	const activeMenuSet = (value) => setActiveMenu(activeMenu === value ? '' : value),
		activeLi = (value) => (value === activeMenu ? { display: 'block' } : { display: 'none' });
	return (
		<ul className="navigation clearfix d-block d-lg-none mobile-header">
			<li className="dropdown">
				<a href="#">Courses</a>
				<ul style={activeLi('Courses')}>
					<Courses />
				</ul>
				<div className="dropdown-btn" onClick={() => activeMenuSet('Courses')}>
					<span className="fas fa-chevron-down" />
				</div>
			</li>

			<li className="dropdown">
				<a href="#">blog</a>
				<ul style={activeLi('Blog')}>
					<Blog />
				</ul>
				<div className="dropdown-btn" onClick={() => activeMenuSet('Blog')}>
					<span className="fas fa-chevron-down" />
				</div>
			</li>
			<li>
				<Link href="/contact">Contact Us</Link>
			</li>
		</ul>
	);
};
export default MobileHeader;
