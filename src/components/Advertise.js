import Link from "next/link";
import advertise1 from "/public/assets/images/advertise/1.png";
import advertise2 from "/public/assets/images/advertise/2.png";
const Advertise = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="advertise-item wow fadeInUp delay-0-2s">
          <div className="content">
            <p style={{ fontSize: "17px", color: "black" }}>
              The 2023 Bootcamps are <strong>Closed</strong>
            </p>
            <h4 style={{ fontWeight: "bold" }}> Next: Early</h4>
            <Link href="/course-details">
              <a className="theme-btn">
                Enrol Today
                <i className="fas fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advertise;
