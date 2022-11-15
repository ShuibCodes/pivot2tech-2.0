import Link from 'next/link';
import advertise1 from '/public/assets/images/advertise/1.png';
import advertise2 from '/public/assets/images/advertise/2.png';
const Advertise = () => {
	return (
		<div className="row justify-content-center">
			<div className="col-lg-6">
				<div className="advertise-item wow fadeInUp delay-0-2s">
					<div className="content">
						<p style={{ fontSize: '17px' }}>Next Cohort</p>
						<h3>9 spots left for our Fullstack Course</h3>
						<p style={{ fontWeight: 'bold' }}>
							{' '}
							<i style={{ padding: '0px 10px' }} className="far fa-user" />
							December 15th
						</p>
						<Link href="/course-details">
							<a className="theme-btn">
								Book a seat
								<i className="fas fa-arrow-right" />
							</a>
						</Link>
					</div>
					<div className="image">
						<img src={advertise1.src} alt="Advertise" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Advertise;
