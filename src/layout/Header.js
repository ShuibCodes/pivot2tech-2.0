import Link from "next/link";
import Image from "next/future/image";
import { Fragment, useEffect, useState } from "react";
import { sidebarOnclick, stickyNav } from "../utils";
import { Blog, Courses, Home, Pages, Resources } from "./Menu";
import MobileHeader from "./MobileHeader";

const Header = ({ header }) => {
  useEffect(() => {
    stickyNav();
  }, []);
  const [navToggle, setNavToggle] = useState(false);
  switch (header) {
    case 1:
      return (
        <Header1
          navToggle={navToggle}
          setNavToggle={setNavToggle}
        />
      );
    case 3:
      return (
        <Header3
          navToggle={navToggle}
          setNavToggle={setNavToggle}
        />
      );
    case 4:
      return (
        <Header4
          navToggle={navToggle}
          setNavToggle={setNavToggle}
        />
      );

    default:
      return (
        <DefaultHeader
          navToggle={navToggle}
          setNavToggle={setNavToggle}
        />
      );
  }
};
export default Header;
const Header1 = ({ navToggle, setNavToggle }) => (
    <Fragment>
      <header className="main-header">
        {/* Header-Top */}
        <HeaderTop />
        {/* Header-Upper */}
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="d-lg-flex align-items-center">
                <div className="logo">
                  {/* mobile logo here */}
                  <Link href="/">
                    <img
                      src="/assets/images/new-bootcamp-logo-phone.png"
                      alt="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer ">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                      onClick={() => setNavToggle(!navToggle)}
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${
                      navToggle ? "show" : ""
                    }`}
                  >
                    <Menus />
                    <MobileHeader />
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              {/* Menu Button */}
              <div className="menu-btn-sidebar d-flex align-items-center">
                {/* menu sidbar */}
                <div
                  className="menu-sidebar"
                  onClick={() => sidebarOnclick()}
                >
                  <button>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*End Header Upper*/}
      </header>
    </Fragment>
  ),
  Header3 = ({ navToggle, setNavToggle }) => (
    <Fragment>
      <header className="main-header header-three">
        {/* Header-Top */}
        <HeaderTop />
        {/* Header-Upper */}
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="">
                  <Link href="/">
                    <Image
                      src="/assets/images/new-bootcamp-logo-phone.png"
                      alt="Logo"
                      width="80"
                      height="80"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo">
                      <Link href="/">
                        <a>
                          <img
                            src="assets/images/logos/logo-two.png"
                            alt="Logo"
                            title="Logo"
                          />
                        </a>
                      </Link>
                    </div>
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${
                      navToggle ? "show" : ""
                    }`}
                  >
                    <Menus />
                    <MobileHeader />
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              {/* Menu Button */}
              <div className="menu-btn-sidebar d-flex align-items-center">
                <div className="nav-search">
                  <button className="fa fa-search" />
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    className="hide"
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      className="searchbox"
                      required=""
                    />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div>
                <button className="cart">
                  <i className="fas fa-shopping-bag" />
                </button>
                <button>
                  <i className="far fa-user-circle" />
                </button>
                {/* menu sidbar */}
                <div
                  className="menu-sidebar"
                  onClick={() => sidebarOnclick()}
                >
                  <button>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
    </Fragment>
  ),
  Header4 = ({ navToggle, setNavToggle }) => (
    <header className="main-header header-four">
      {/* Header-Top */}
      <div className="header-top bg-light-blue text-white">
        <div className="container-fluid">
          <div className="top-inner">
            <div className="top-left">
              <p>
                <i className="far fa-clock" /> <b>Working Hours</b> : Manday -
                Friday, 08am - 05pm
              </p>
              <p>
                <i className="fas fa-phone" /> <b>Hotline</b> :{" "}
                <a href="callto:+012(345)6789">+012 (345) 67 89</a>
              </p>
            </div>
            <div className="top-right d-flex align-items-center">
              <div className="social-style-two">
                <Link href="/contact">
                  <i className="fab fa-twitter" />
                </Link>
                <Link href="/contact">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link href="/contact">
                  <i className="fab fa-instagram" />
                </Link>
                <Link href="/contact">
                  <i className="fab fa-pinterest-p" />
                </Link>
              </div>
              <ul className="top-menu">
                <li>
                  <Link href="/about">Setting &amp; Privacy</Link>
                </li>
                <li>
                  <Link href="/faqs">Faqs</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Header-Upper */}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner d-flex align-items-center justify-content-between">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo-three.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/logos/logo-three.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    onClick={() => setNavToggle(!navToggle)}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div
                  className={`navbar-collapse collapse clearfix ${
                    navToggle ? "show" : ""
                  }`}
                >
                  <Menus />
                  <MobileHeader />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  ),
  DefaultHeader = ({ navToggle, setNavToggle }) => (
    <Fragment>
      <header className="main-header header-two">
        {/* Header-Top */}
        <HeaderTop />
        {/* Header-Upper */}
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="">
                  <Link href="/">
                    <Image
                      src="/assets/images/new-bootcamp-logo-phone.png"
                      alt="Logo"
                      width="103"
                      height="100"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo bg-green br-10 p-15">
                      <a href="/">
                        <img
                          src="assets/images/new-bootcamp-logo-phone.png"
                          alt="Logo"
                          title="Logo"
                          style={{ width: "80%", height: "80%" }}
                        />
                      </a>
                    </div>
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                      onClick={() => setNavToggle(!navToggle)}
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${
                      navToggle ? "show" : ""
                    }`}
                  >
                    <Menus />
                    <MobileHeader />
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              {/* Menu Button */}
            </div>
          </div>
        </div>

        {/*End Header Upper*/}
      </header>
    </Fragment>
  ),
  Menus = () => (
    <ul className="navigation d-none d-lg-flex">
      <li>
        <ul>
          <Home />
        </ul>
      </li>

      <li className="dropdown">
        <a href="#">Courses</a>
        <ul>
          <Courses />
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">Resources</a>
        <ul>
          <Resources />
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div>
      </li>

      <li className="dropdown">
        <Link href="Blogs">Blog</Link>
      </li>
      <li>
        <Link href="contact/">Contact</Link>
      </li>
    </ul>
  ),
  HeaderTop = () => (
    <div className="header-top bg-light-blue text-white">
      <div className="container-fluid">
        <div className="top-inner">
          <div className="top-left">
            <p>
              <i className="far fa-clock" />{" "}
              <Link href="/data-analytics">
                Join The Data Analytics Bootcamp
              </Link>
            </p>
          </div>
          <div className="top-right d-flex align-items-center">
            <div className="social-style-two">
              <h6 className="py-1">
                {" "}
                <span className="px-2">🚨</span>Last 11 spaces
                <span className="px-2">🚨</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
