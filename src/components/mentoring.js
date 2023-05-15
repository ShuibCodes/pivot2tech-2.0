import React from "react";
import Image from "next/image";
import mentoringImage from "../../public/assets/images/mentoring-image.png";

function mentoring() {
  return (
    <section className="why-choose-section pt-120 rpt-90 pb-130 rpb-100">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="mt-10">
              <Image
                src={mentoringImage}
                alt="mentoring-photo"
                className="why-choose-one"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s p-10">
              <div className="section-title mb-25">
                <h3>Our Mentoring Scheme is now live!</h3>
              </div>

              <ul className="list-style-four pt-5 pb-35">
                <li>Weekly 1-1 time with professionals, dedicated to you</li>
                <li>Weekly projects using real-life data</li>
                <li>Your own mentor, allocated to you</li>
                <li>comprenesive CV Clinic </li>
                <li>Access to our pool of tech recruiters</li>
              </ul>
              <a href="https://pivot2tech-mentoring.webflow.io/">
                <div className="theme-btn style-four">
                  Choose your mentor
                  <i className="fas fa-arrow-right" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default mentoring;
