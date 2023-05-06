import Link from "next/link";
import { useState } from "react";
import { Blog, Courses, Home, Pages, Resources } from "./Menu";

const MobileHeader = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation clearfix d-block d-lg-none mobile-header">
      <li className="dropdown">
        <a href="#">Courses</a>
        <ul style={activeLi("Courses")}>
          <Courses />
        </ul>
        <div
          className="dropdown-btn"
          onClick={() => activeMenuSet("Courses")}
        >
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">Resources</a>
        <ul style={activeLi("Resources")}>
          <Resources />
        </ul>
        <div
          className="dropdown-btn"
          onClick={() => activeMenuSet("Resources")}
        >
          <span className="fas fa-chevron-down" />
        </div>
      </li>

      <li>
        <Link href="/Blogs">Blog</Link>
      </li>
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
    </ul>
  );
};
export default MobileHeader;
