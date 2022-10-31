import React, { Component, Fragment } from 'react';
import JS from '../slider/js.png';
import Slider from 'react-slick';
import { Index1WorkStepSliderprops } from '../../sliderProps';

export default class Index1WorkStepSlider extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
	}
	render() {
		const settings = {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			speed: 400,
			autoplay: false,
			autoplaySpeed: 5000,
			arrows: false,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		};
		return (
			<Fragment>
				<div className="row justify-content-between align-items-center pb-30 wow fadeInUp delay-0-2s">
					<div className="col-xl-7 col-lg-8">
						<div className="section-title">
							<span className="sub-title mb-15">Course Info</span>
							<h3>Master the fundamental skills of a web developer in just a few weeks</h3>
						</div>
					</div>
				</div>
				<div className="feature-grid">
					<div className="work-step-item">
						<img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" className="number" />
						<div className="content">
							<h4>Learn software fundamentals and databases</h4>
							<p>learn HTML, CSS & JavaScript, the building blocks of Web Development</p>
						</div>
					</div>
					<div className="work-step-item">
						<img src="https://cdn-icons-png.flaticon.com/128/919/919851.png" className="number" />
						<div className="content">
							<h4>Master fullstack Web Development</h4>
							<p>
								Develop responsive web pages with HTML and CSS. Master modern JavaScript and all the
								tools and environment like Webpack and Node.js.
							</p>
						</div>
					</div>
					<div className="work-step-item">
						<img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" className="number" />
						<div className="content">
							<h4>Deploy your apps from live</h4>
							<p>Build complete web applications and deploy them online with a live domain</p>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
