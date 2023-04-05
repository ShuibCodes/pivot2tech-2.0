import Link from "next/link";
import advertise1 from "/public/assets/images/advertise/1.png";
import advertise2 from "/public/assets/images/advertise/2.png";
const Advertise = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="advertise-item wow fadeInUp delay-0-2s">
          <div className="content">
            <p style={{ fontSize: "17px" }}>NEW SPACES</p>
            <h4 style={{ fontWeight: "bold" }}> </h4>
            <a href="https://pivot2tech.co.uk/course-details-freelance">
              <a className="theme-btn">
                More Freelance Spaces
                <i className="fas fa-arrow-right" />
              </a>
              <h4>7 Freelance Spaces Left</h4>
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
