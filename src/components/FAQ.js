import React from 'react';
import Link from 'next/link';
function FAQ() {
	return (
		<div style={{ padding: '30px' }} className="container">
			<div className="text-center">
				<h3 className="text-center"> FAQs 🧐</h3>
				<div className="content">
					<div style={{ padding: '30px' }}>
						<h4>Do I need a tech background/experience ??</h4>
						<p>
							No, the Bootcamp is for{' '}
							<span style={{ color: 'blue', fontWeight: 'bold' }}>complete beginners</span> looking to
							change their career. All of our students have have a non-technical background, including our
							co-founder, Shuayb!
						</p>
					</div>
				</div>
				<div className="content">
					<div style={{ padding: '0 30px' }}>
						<h4>I don't have a degree, is this still for me?</h4>
						<p>
							Why would you let that stop you? coding bootcamps gives you the skills which are highly in
							demand. <span style={{ color: 'blue', fontWeight: 'bold' }}>90% of graduates</span> from
							popular bootcamps are hired!
						</p>
					</div>
				</div>
				<div className="content">
					<div style={{ padding: '0 30px' }}>
						<h4>Can I get a refund after paying for a Bootcamp?</h4>
						<p>
							{' '}
							Once lessons begin, we offer a 14-day money back garantee if you're unhappy with the course{' '}
						</p>
					</div>
				</div>
				<div className="content">
					<div style={{ padding: '0 30px' }}>
						<h4>How long will I be able to access the course materials?</h4>
						<p>
							You’ll be able to access the{' '}
							<span style={{ color: 'blue', fontWeight: 'bold' }}>course materials for life! </span> Your
							access will never expire.
						</p>
					</div>
				</div>
				<div className="content">
					<div style={{ padding: '030px' }}>
						<h4>I learned how to code a few years ago. Is this for me?</h4>
						<p>
							Yes, you'll learn a lot even in our beginner coding workshops because tech has changed quite
							a bit over the past few years.
						</p>
					</div>
				</div>
			</div>
			<Link href="/course-details">
				<div className="text-center">
					<a style={{ padding: '14px', fontSize: '15px', textAlign: 'center' }} className="theme-btn">
						Learn More
						<i className="fas fa-arrow-right" />
					</a>
				</div>
			</Link>
		</div>
	);
}

export default FAQ;
