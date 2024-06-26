import React from "react";
import Link from "next/link";
import { Accordion, Nav, Tab } from "react-bootstrap";
import WellernAccordion from "./WellernAccordion";

import { useState } from "react";

function FAQ() {
  const [active, setActive] = useState(false);
  const onClick = (value) => {
    console.log(value);
    setActive(value === active ? "" : value);
  };
  return (
    <div
      style={{ padding: "15px" }}
      className="container"
    >
      <h2>FAQs</h2>
      <Accordion
        className="faq-accordion pt-10 "
        id="course-faq"
        defaultActiveKey=""
      >
        <WellernAccordion
          eventName={"collapse1"}
          title={"Do I need a tech background/experience?"}
          active={active}
          onClick={() => onClick("collapse1")}
        >
          <div className="course-video-list">
            <p className="p-40">
              No, the Bootcamp is for complete beginners looking to change their
              career. All of our students have have a non-technical background,
              including our co-founder, Shuayb!
            </p>
          </div>
        </WellernAccordion>
      </Accordion>
      <Accordion
        className="faq-accordion pt-10 "
        id="course-faq"
        defaultActiveKey=""
      >
        <WellernAccordion
          eventName={"collapse1"}
          title={"What are the time requirements?"}
          active={active}
          onClick={() => onClick("collapse1")}
        >
          <div className="course-video-list">
            <p className="p-40">
              The live lessons (for software engineering and freelance courses)
              are <strong>completely optional</strong> although we do recommend
              them
              <br></br>
              <br></br>
              You'll have <strong>lifetime access</strong> of all the lesson
              recordings & resources
            </p>
          </div>
        </WellernAccordion>
      </Accordion>
      <Accordion
        className="faq-accordion pt-10 "
        id="course-faq"
        defaultActiveKey=""
      >
        <WellernAccordion
          eventName={"collapse1"}
          title={"Are the live lessons recorded?"}
          active={active}
          onClick={() => onClick("collapse1")}
        >
          <div className="course-video-list">
            <p className="p-40">
              All our sessions are recorded, and you'll have 24/7 access to our
              tutors via the online community.
              <br></br>
              We also run extra drop-in sessions once a week - usually on
              Thursday evenings for the Software Engineering course.
            </p>
          </div>
        </WellernAccordion>
      </Accordion>
      <Accordion
        className="faq-accordion pt-10 "
        id="course-faq"
        defaultActiveKey=""
      >
        <WellernAccordion
          eventName={"collapse1"}
          title={"What opportunites can I get after the course?"}
          active={active}
          onClick={() => onClick("collapse1")}
        >
          <div className="course-video-list">
            <p className="p-40">
              Once you've graduated, you'll be equipped with the skills,
              confidence and a full portfolio of real-life proejcts. We've had
              students land base salaries of <strong>£40,000 </strong>at
              companies like <strong>Santander and capgemini.</strong>
              <br></br>
              <br></br>
              For the freelance digital marketing bootcamp, past students have
              landed freelance gigs ranging between <strong>£500-1000</strong>
            </p>
          </div>
        </WellernAccordion>
      </Accordion>
      <Accordion
        className="faq-accordion pt-10 "
        id="course-faq"
        defaultActiveKey=""
      >
        <WellernAccordion
          eventName={"collapse1"}
          title={"Do we get a certificate at the end of the bootcamp?"}
          active={active}
          onClick={() => onClick("collapse1")}
        >
          <div className="course-video-list">
            <p className="p-40">
              Yes, we offer an official certifcate of completeion for your CV.
            </p>
          </div>
        </WellernAccordion>
      </Accordion>
      <Accordion
        className="faq-accordion pt-10 "
        id="course-faq"
        defaultActiveKey=""
      >
        <WellernAccordion
          eventName={"collapse1"}
          title={"How much support do I get?"}
          active={active}
          onClick={() => onClick("collapse1")}
        >
          <div className="course-video-list">
            <p className="p-40">
              We provide unlimited help-desk support, 1-1 Zoom calls, code
              reviews, and answer any question, ensuring you will never get
              stuck
            </p>
          </div>
        </WellernAccordion>
      </Accordion>

      <Accordion
        className="faq-accordion pt-10 "
        id="course-faq"
        defaultActiveKey=""
      >
        <WellernAccordion
          eventName={"collapse1"}
          title={"I don't have a degree, is this still for me?"}
          active={active}
          onClick={() => onClick("collapse1")}
        >
          <div className="course-video-list">
            <p className="p-40">
              Why would you let that stop you? coding bootcamps gives you the
              skills which are highly in demand. Since 2020, 90% of graduates
              from bootcamps are hired!
            </p>
          </div>
        </WellernAccordion>
      </Accordion>
      <Accordion
        className="faq-accordion pt-10 "
        id="course-faq"
        defaultActiveKey=""
      >
        <WellernAccordion
          eventName={"collapse1"}
          title={"What is your refund policy"}
          active={active}
          onClick={() => onClick("collapse1")}
        >
          <div className="course-video-list">
            <p className="p-40">
              We offer a cooling-off period of 30 days from the date of purchase
              and on the condition that you go through 60% (9 hours) of the
              course content and provide proof with one project you have built.
              If the course hasn't given you the skills, you can apply for a
              full refund
            </p>
          </div>
        </WellernAccordion>
      </Accordion>
    </div>
  );
}

export default FAQ;
