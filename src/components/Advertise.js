import Link from "next/link";
import advertise1 from "/public/assets/images/advertise/1.png";
import advertise2 from "/public/assets/images/advertise/2.png";
const Advertise = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="advertise-item wow fadeInUp delay-0-2s">
          <div className="content">
            <p style={{ fontSize: "17px" }}>Next Cohort</p>
            <h4 style={{ fontWeight: "bold" }}>October 2023</h4>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeFgRN8sY32s3E-Qqvmtbpa9Oc5kka_5Nd-_8OTqTepcqMF9g/viewform?usp=sf_link">
              <a className="theme-btn">
                Join The Waiting List
                <i className="fas fa-arrow-right" />
              </a>
            </a>
          </div>
          <div className="image">
            <img
              src={advertise1.src}
              alt="Advertise"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advertise;
