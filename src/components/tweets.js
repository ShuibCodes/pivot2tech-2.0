import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Image from "next/image";
import reviewFirst from "../../public/assets/images/review-first.png";
import reviewOne from "../../public/assets/images/review-one.png";
import reviewTwo from "../../public/assets/images/review-two.png";
import reviewThree from "../../public/assets/images/review-three.png";

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
                src={reviewFirst}
                width={230}
                height={250}
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
                src={reviewTwo}
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
