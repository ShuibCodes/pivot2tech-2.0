import Link from "next/link";

const PageBannerKids = ({ pageTitle, pageName }) => {
  return (
    <section
      className="page-banner-area rel z-1 text-white text-center"
      style={{
        backgroundImage:
          "url('https://codeop.tech/wp-content/uploads/2022/09/coding-bootcamp-uk-e1664426392852.jpg')",
      }}
    >
      <div className="container">
        <div className="banner-inner rpt-10">
          <h2 className="page-title wow fadeInUp delay-0-2s">Data Analytics</h2>
          <nav aria-label="breadcrumb"></nav>
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
