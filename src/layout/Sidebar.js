import { Fragment } from 'react';
import { sidebarOnclick } from '../utils';
const Sidebar = () => {
	return (
		<Fragment>
			<div className="form-back-drop" onClick={() => sidebarOnclick()} />
			{/* Hidden Sidebar */}
			<section className="hidden-bar">
				<div className="inner-box text-center">
					<div className="cross-icon" onClick={() => sidebarOnclick()}>
						<span className="fa fa-times" />
					</div>
					<div className="title">
						<h4>Contact Us</h4>
					</div>
					{/*Appointment Form*/}
					<div className="appointment-form">
						<form
							onSubmit={(e) => {
								e.preventDefault();
								sidebarOnclick();
							}}
							method="post"
							action="#"
						>
							<div className="form-group">
								<input type="text" name="text" defaultValue="" placeholder="Name" required="" />
							</div>
							<div className="form-group">
								<input
									type="email"
									name="email"
									defaultValue=""
									placeholder="Email Address"
									required=""
								/>
							</div>
							<div className="form-group">
								<textarea placeholder="Message" rows={5} defaultValue={''} />
							</div>
							<div className="form-group">
								<button type="submit" className="theme-btn">
									Submit now
								</button>
							</div>
						</form>
					</div>
					{/*Social Icons*/}
					<div className="social-style-one">
						<a href="https://twitter.com/Shuayb__">
							<i className="fab fa-twitter" />
						</a>
					</div>
				</div>
			</section>
		</Fragment>
	);
};
export default Sidebar;
