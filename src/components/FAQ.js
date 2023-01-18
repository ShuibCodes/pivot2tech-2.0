import React from 'react';
import Link from 'next/link';
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
		<div style={{ padding: '15px' }} className="container">
			<h2>FAQs</h2>
			<Accordion
            className="faq-accordion pt-10 "
            id="course-faq"
            defaultActiveKey=""
          >
         
            <WellernAccordion
              eventName={"collapse1"}
              title={"Do I need a tech background/experience ??"}
              active={active}
              onClick={() => onClick("collapse1")}
            >
              <div className="course-video-list">
                <p className='p-40'>
				No, the Bootcamp is for complete beginners looking to change their career. All of our students have have a non-technical background, including our co-founder, Shuayb!
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
              title={"What are the time requirements? can I do this part-time?"}
              active={active}
              onClick={() => onClick("collapse1")}
            >
              <div className="course-video-list">
                <p className='p-40'>
				We highly recommend attending the lessons, but this is a part-time, evening course. 4 hours a weel. So there is a lot of self-study thats expected. You can also book 1-1 lessons with our instructors anytime! Details of the times are on the course pages
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
              title={"Whats the difference between the Fullstack and Freelance course?"}
              active={active}
              onClick={() => onClick("collapse1")}
            >
              <div className="course-video-list">
                <p className='p-40'>
                Our Fullstack Web Developer course gives you the skills and confidence to start applying to Junior Fullstack roles in the industry by the end of the course. However, if you're not looking to switch careers and just want to earn a side income, the Freelance course is a great option. We teach you necessary skills to find your own clients doing low-code web development and SEO.

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
                <p className='p-40'>
				We provide unlimited help-desk support, 1-1 Zoom calls, code reviews, and answer any question, ensuring you will never get stuck


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
              title={"Do I have to be good at maths to learn code?"}
              active={active}
              onClick={() => onClick("collapse1")}
            >
              <div className="course-video-list">
                <p className='p-40'>
                  You dont need to be good at maths to be a good developer. Learning to program involves Googling (A LOT), collaboration & problem solving. The computer does all the maths for you :) 
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
                <p className='p-40'>
				Why would you let that stop you? coding bootcamps gives you the skills which are highly in demand. Since 2020, 90% of graduates from bootcamps are hired!
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
              title={"What is you refund policy"}
              active={active}
              onClick={() => onClick("collapse1")}
            >
              <div className="course-video-list">
                <p className='p-40'>
                We offer a cooling-off period of 14 days from the date of purchase and on the condition the bootcamp has not yet commenced. All refund requests are to be made in writing via email to pivot2techteam@gmail.com

                </p>
               
              </div>
            </WellernAccordion>
          </Accordion>
        
          
		
		</div>
	);
}

export default FAQ;
