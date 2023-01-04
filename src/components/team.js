import React from 'react'

function team() {
  return (
    <section class="team text-center py-5">
    <div class="container">
      <div class="header my-5">
        <h1 className="py-50">Meet our Team </h1>
    
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="img-block mb-5">
            <img style={{maxHeight:"250px"}} src="assets/images/abdulkadir.jpeg" class="img-fluid  img-thumbnail" alt="image1"/>
            <div class="content mt-2">
              <h4>Abdulkadir M</h4>
              <p class="text-muted">Fullstack Instructor</p>
           
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 ">
          <div class="img-block mb-5">
            <img style={{maxHeight:"250px"}} src="assets/images/haroon-pic.jpeg" class="img-fluid  img-thumbnail " alt="image1"/>
            <div class="content mt-2">
              <h4>Harun S</h4>
              <p class="text-muted">Web Development Mentor</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="img-block mb-5">
            <img style={{maxHeight:"250px"}} src="assets/images/jamie-pic.jpeg" class="img-fluid  img-thumbnail" alt="image1"/>
            <div class="content mt-2">
              <h4>Jamie H</h4>
              <p class="text-muted">Web Development Instructor</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="img-block mb-5">
            <img style={{maxHeight:"250px"}} src="assets/images/shuayb.jpg" class="img-fluid  img-thumbnail " alt="image1"/>
            <div class="content mt-2">
              <h4>Shuayb A</h4>
              <p class="text-muted">Freelance Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default team