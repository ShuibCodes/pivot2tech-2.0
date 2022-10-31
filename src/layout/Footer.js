import Link from "next/link";
import { Fragment } from "react";
import Newsletters from "../components/Newsletters";

const Footer = ({ footer }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  switch (footer) {
    case 1:
      return <Footer1 scrollTop={scrollTop} />;
    case 3:
      return <Footer3 scrollTop={scrollTop} />;
    case 4:
      return <Footer4 scrollTop={scrollTop} />;
    default:
      return <DefaultFooter scrollTop={scrollTop} />;
  }
};
export default Footer;
const FollowIcon = () => (
    <Fragment>
      <Link href="/contact">
        <a>
          <i className="fab fa-facebook-f" />
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <i className="fab fa-twitter" />
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <i className="fab fa-linkedin-in" />
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <i className="fab fa-youtube" />
        </a>
      </Link>
    </Fragment>
  ),
  Courses = () => (
    <Fragment>
      <li>
        <Link href="/course-details">Life Coach</Link>
      </li>
      <li>
        <Link href="/course-details">Business Coach</Link>
      </li>
      <li>
        <Link href="/course-details">Health Coach</Link>
      </li>
      <li>
        <Link href="/course-details">Development</Link>
      </li>
      <li>
        <Link href="/course-details">Web Design</Link>
      </li>
      <li>
        <Link href="/course-details">SEO Optimize</Link>
      </li>
    </Fragment>
  ),
  Resources = () => (
    <Fragment>
      <li>
        <Link href="/contact">Community</Link>
      </li>
      <li>
        <Link href="/contact">Support</Link>
      </li>
      <li>
        <Link href="/contact">Video Guides</Link>
      </li>
      <li>
        <Link href="/contact">Documentation</Link>
      </li>
      <li>
        <Link href="/contact">Security</Link>
      </li>
      <li>
        <Link href="/contact">Template</Link>
      </li>
    </Fragment>
  ),
  FooterBottom = () => (
    <Fragment>
      <li>
        <Link href="/faqs">Faqs</Link>
      </li>
      <li>
        <Link href="/contact">Links</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Payments</Link>
      </li>
    </Fragment>
  ),
  CopyRight = () => (
    <p>
      © {new Date().getFullYear()}. <Link href="/">Wellern</Link> All rights
      reserved.
    </p>
  ),
  DefaultFooter = ({ scrollTop }) => (
    <footer className="main-footer bg-blue">
      <div className="container">
        <Newsletters />
        <div className="row justify-content-between text-white pt-75">
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget about-widget">
              <h5 className="footer-title">About Us</h5>
              <p>
                Sit amet consectetur adipiscin seeiusmod tempor incididunt ut
                dolore magna aliqu asusp disse ultrices gravida commodo
              </p>
              <h5 className="pt-5">Follow Us</h5>
              <div className="social-style-one">
                <FollowIcon />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Courses</h5>
              <ul>
                <Courses />
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Resources</h5>
              <ul>
                <Resources />
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-sm-6">
                <div className="footer-widget contact-info-widget">
                  <h5 className="footer-title">Get In Touch</h5>
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt" /> 55 Main Street,
                      2nd Block, New York
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <i className="fas fa-phone" />{" "}
                      <a href="callto:+0123456789">+012 (345) 67 89</a>
                    </li>
                    <li>
                      <i className="far fa-clock" /> Sunday - Friday,
                      <br /> 08 am - 05 pm
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="footer-widget video-widget">
                  <p>Quis autem vel eum iure repre enderit voluptate</p>
                  <div className="video-widget overlay my-20">
                    <img src="assets/images/footer/video.jpg" alt="Video" />
                    <a
                      href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                      className="mfp-iframe video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <Link href="/about">
                    <a className="read-more">
                      view more <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area bg-dark-blue text-white rel">
        <div className="container">
          <div className="copyright-inner">
            <CopyRight />
            <ul className="footer-menu">
              <FooterBottom />
            </ul>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button
          className="scroll-top scroll-to-target"
          data-target="html"
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
        >
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </footer>
  ),
  Footer1 = ({ scrollTop }) => (
    <footer className="main-footer bg-blue text-white pt-75">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget about-widget">
              <h5 className="footer-title">About Us</h5>
              <p>
                Sit amet consectetur adipiscin seeiusmod tempor incididunt ut
                dolore magna aliqu asusp disse ultrices gravida commodo
              </p>
              <h5 className="pt-5">Follow Us</h5>
              <div className="social-style-one">
                <FollowIcon />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Courses</h5>
              <ul>
                <Courses />
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Resources</h5>
              <ul>
                <Resources />
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-sm-6">
                <div className="footer-widget contact-info-widget">
                  <h5 className="footer-title">Get In Touch</h5>
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt" /> 55 Main Street,
                      2nd Block, New York
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <i className="fas fa-phone" />{" "}
                      <a href="callto:+0123456789">+012 (345) 67 89</a>
                    </li>
                    <li>
                      <i className="far fa-clock" /> Sunday - Friday,
                      <br /> 08 am - 05 pm
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="footer-widget video-widget">
                  <p>Quis autem vel eum iure repre enderit voluptate</p>
                  <div className="video-widget overlay my-20">
                    <img src="assets/images/footer/video.jpg" alt="Video" />
                    <a
                      href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                      className="mfp-iframe video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <Link href="/about">
                    <a className="read-more">
                      view more <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area bg-dark-blue rel">
        <div className="container">
          <div className="copyright-inner">
            <CopyRight />
            <ul className="footer-menu">
              <FooterBottom />
            </ul>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button
          className="scroll-top scroll-to-target"
          data-target="html"
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
        >
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </footer>
  ),
  Footer3 = ({ scrollTop }) => (
    <footer className="main-footer bg-black">
      <div className="container">
        <div className="row justify-content-between text-white pt-65">
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget about-widget">
              <h5 className="footer-title">About Us</h5>
              <p>
                Sit amet consectetur adipiscin seeiusmod tempor incididunt ut
                dolore magna aliqu asusp disse ultrices gravida commodo
              </p>
              <h5 className="pt-5">Follow Us</h5>
              <div className="social-style-one">
                <FollowIcon />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Courses</h5>
              <ul>
                <Courses />
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Resources</h5>
              <ul>
                <Resources />
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-sm-6">
                <div className="footer-widget contact-info-widget">
                  <h5 className="footer-title">Get In Touch</h5>
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt" /> 55 Main Street,
                      2nd Block, New York
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <i className="fas fa-phone" />{" "}
                      <a href="callto:+0123456789">+012 (345) 67 89</a>
                    </li>
                    <li>
                      <i className="far fa-clock" /> Sunday - Friday,
                      <br /> 08 am - 05 pm
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="footer-widget newsletter-widget">
                  <h5 className="footer-title">Newsletter</h5>
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <h6>Every Single Updates and Notifications</h6>
                    <div className="email-input">
                      <label htmlFor="footer-newsletter">
                        <i className="far fa-envelope" />
                      </label>
                      <input
                        type="email"
                        id="footer-newsletter"
                        placeholder="Enter Email"
                        required=""
                      />
                    </div>
                    <button className="theme-btn style-two" type="submit">
                      sign up <i className="fas fa-arrow-right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area bg-light-blue text-white rel">
        <div className="container">
          <div className="copyright-inner">
            <CopyRight />
            <ul className="footer-menu">
              <FooterBottom />
            </ul>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
          className="scroll-top scroll-to-target"
          data-target="html"
        >
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </footer>
  ),
  Footer4 = ({ scrollTop }) => (
    <footer className="main-footer footer-two bg-blue-two text-white">
      <div className="container">
        <div className="logo-inner style-two pt-85 pb-35">
          <div className="logo-item">
            <Link href="/about">
              <img
                src="assets/images/client-logos/client-logo-two1.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link href="/about">
              <img
                src="assets/images/client-logos/client-logo-two5.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link href="/about">
              <img
                src="assets/images/client-logos/client-logo-two3.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link href="/about">
              <img
                src="assets/images/client-logos/client-logo-two4.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link href="/about">
              <img
                src="assets/images/client-logos/client-logo-two2.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link href="/about">
              <img
                src="assets/images/client-logos/client-logo-two6.png"
                alt="Client Logo"
              />
            </Link>
          </div>
        </div>
        <div className="row large-gap justify-content-between pt-85">
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget about-widget">
              <div className="footer-logo mb-25">
                <Link href="/">
                  <a>
                    <img src="assets/images/logos/logo-four.png" alt="Logo" />
                  </a>
                </Link>
              </div>
              <p>
                Sit amet consectetur adipiscin seeiusmod tempor incididunt ut
                dolore magna aliqu asusp{" "}
              </p>
              <div className="social-style-one pt-10">
                <FollowIcon />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Courses</h5>
              <ul>
                <Courses />
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="footer-widget contact-info-widget">
              <h5 className="footer-title">Get In Touch</h5>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt" /> 55 Main Street, 2nd
                  Block, New York
                </li>
                <li>
                  <i className="far fa-envelope" />{" "}
                  <a href="mailto:support@gmail.com">support@gmail.com</a>
                </li>
                <li>
                  <i className="fas fa-phone" />{" "}
                  <a href="callto:+0123456789">+012 (345) 67 89</a>
                </li>
                <li>
                  <i className="far fa-clock" /> Sunday - Friday,
                  <br /> 08 am - 05 pm
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widget gallery-widget">
              <h5 className="footer-title">Gallery</h5>
              <div className="gallery-widget-wrap">
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery1.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery1.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery2.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery2.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery3.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery3.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery4.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery4.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery5.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery5.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery6.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery6.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area rel">
        <div className="container">
          <div className="copyright-inner">
            <CopyRight />
            <ul className="footer-menu">
              <FooterBottom />
            </ul>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
          className="scroll-top scroll-to-target"
          data-target="html"
        >
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </footer>
  );
