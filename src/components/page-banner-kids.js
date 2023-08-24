import Link from "next/link";

const PageBannerKids = ({ pageTitle, pageName }) => {
  return (
    <section
      className="page-banner-area rel z-1 text-white text-center"
      style={{
        backgroundImage:
          "url('https://funtechsummercamps.com/blog/wp-content/uploads/2019/07/minecraft-coding-copy.jpg')",
      }}
    >
      <div className="container">
        <div className="banner-inner rpt-10">
          <h2 className="page-title wow fadeInUp delay-0-2s">Python Coder</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link href="/">
                  <a>Coding For Kids</a>
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <img
        className="circle-one"
        src="assets/images/shapes/circle-one.png"
        alt="Circle"
      />
      <img
        className="circle-two"
        src="assets/images/shapes/circle-two.png"
        alt="Circle"
      />
    </section>
  );
};
export default PageBannerKids;
