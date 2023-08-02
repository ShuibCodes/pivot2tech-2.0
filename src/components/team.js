import React from "react";

function team() {
  return (
    <section className="team text-center py-5">
      <div className="container">
        <div className="header my-5">
          <h2 className="py-50">Meet our Team </h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="img-block mb-5">
              <img
                style={{ maxHeight: "250px" }}
                src="assets/images/abdulkadir.jpeg"
                className="img-fluid  img-thumbnail"
                alt="image1"
              />
              <div className="content mt-2">
                <h4>Abdulkadir M</h4>
                <p className="text-muted">
                  Senior Software Enginner & Instructor
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 ">
            <div class="img-block mb-5">
              <img
                style={{ maxHeight: "250px" }}
                src="assets/images/moin.png"
                class="img-fluid  img-thumbnail "
                alt="image1"
              />
              <div class="content mt-2">
                <h4>Moin H</h4>
                <p class="text-muted">Web Development Mentor</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="img-block mb-5">
              <img
                style={{ maxHeight: "250px" }}
                src="assets/images/jamie-pic.jpeg"
                class="img-fluid  img-thumbnail"
                alt="image1"
              />
              <div class="content mt-2">
                <h4>Jamie H</h4>
                <p class="text-muted">Web Development Instructor</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="img-block mb-5">
              <img
                style={{ maxHeight: "250px" }}
                src="assets/images/shuayb.jpg"
                class="img-fluid  img-thumbnail "
                alt="image1"
              />
              <div class="content mt-2">
                <h4>Shuayb A</h4>
                <p class="text-muted">
                  Freelance Digital Marketer & Instructor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default team;
