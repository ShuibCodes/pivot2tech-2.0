import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Image from "next/image";
import reviewFirst from "../../public/assets/images/akhi-tweet.png";
import reviewOne from "../../public/assets/images/review-one.png";
import reviewTwo from "../../public/assets/images/student-job.png";
import reviewThree from "../../public/assets/images/review-three.png";
import testimonialOne from "../../public/assets/images/new-review.png";
import testimonialTwo from "../../public/assets/images/new-job.jpeg";

function tweets() {
  return (
    <div>
      <section
        style={{ margin: "60px" }}
        class="team text-center py-5"
      >
        <div class="container">
          <div class="header my-5"></div>
          <div class="row">
            <div class="col-md-6 col-lg-3 py-10">
              <Image
                src={reviewTwo}
                alt="review"
                width={300}
                height={180}
              />
            </div>{" "}
            <div class="col-md-6 col-lg-3 py-10">
              <Image
                src={testimonialTwo}
                width={280}
                height={100}
                alt="review"
              />
            </div>
            <div class="col-md-6 col-lg-3 py-10">
              <Image
                src={testimonialOne}
                width={350}
                height={80}
                alt="review"
              />
            </div>
            <div class="col-md-6 col-lg-3 py-10">
              <Image
                src={reviewFirst}
                width={250}
                height={100}
                alt="review"
              />
            </div>
            <div class="col-md-6 col-lg-3 py-10">
              <Image
                src={reviewOne}
                width={250}
                height={250}
                alt="review"
              />
            </div>
            <div class="col-md-6 col-lg-3 py-10">
              <Image
                src={reviewThree}
                width={240}
                height={300}
                alt="review"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default tweets;
