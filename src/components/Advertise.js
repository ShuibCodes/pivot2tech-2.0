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
						<h4 style={{ fontWeight: 'bold' }}>
							{' '}
							<i style={{ padding: '0px 10px' }} className="far fa-user" />
							March 15th
						</h4>
						<a href="https://docs.google.com/forms/d/e/1FAIpQLSfgUs1dTTSUgWIttaWP_PcBO4y4C2l3OHg-40tljOrxn8FDTA/viewform?usp=sf_link">
							<a className="theme-btn">
								Pre-register 
								<i className="fas fa-arrow-right" />
							</a>
						</a>
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
