import Link from "next/link";

const Advertise = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="advertise-item wow fadeInUp delay-0-2s">
          <div className="content">
            <p style={{ fontSize: "22px", fontWeight: "700" }}>FREE Resource</p>
            <h4 style={{ fontWeight: "bold" }}>
              {" "}
              Web Developement Roadmap 2023
            </h4>
            <Link href="/web-development-roadmap-2023">
              <a
                style={{ backgroundColor: "#1F4ECE" }}
                className="theme-btn"
              >
                FREE Copy
                <i className="fas fa-arrow-right" />
              </a>
            </Link>
          </div>
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
};
export default Advertise;
