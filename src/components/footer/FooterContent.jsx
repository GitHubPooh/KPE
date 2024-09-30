import { Link } from "react-router-dom";
import Social from "../common/Social";

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "/" },
        { label: "Contact Us", href: "/pages-menu/pricing" },
      ],
      title1: "Services",
      links1: [
        { label: "SERVICES", href: "/" },
        { label: "PROJECTS", href: "/pages-menu/pricing" },
      ],
      classes: "col-lg-3 col-sm-4 ms-auto mb-30",
    },
  ];

  return (
    <div className="row text-light" >

      {/* Added address-section class here */}
      <div className="col-lg-6 col-md-6 col-sm-12 d-sm-block address-section">
        <h4 className="text-light" >Address</h4>
        <p>
          <i className="fa fa-map-marker-alt me-2"></i>Office No, 3 &amp; 4 Nanded City
        </p>
        <p>Sinhgad Road, opposite Celebram IT Park,</p>
        <p>Nanded City, Pune, Maharashtra 411068</p>
        <p><i className="fa fa-phone-alt me-2"></i>+91 8856032610</p>
        <p><i className="fa fa-envelope me-2"></i>pemb@kpenggs.com</p>
        <p><i className="fa fa-envelope me-2"></i>info@kpenggs.com</p>
        <div className="d-flex pt-2 mb-3" >
          <a href="#" className="btn btn-outline-light btn-social">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="btn btn-outline-light btn-social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="btn btn-outline-light btn-social">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="btn btn-outline-light btn-social">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {footerLinks.map((link, index) => (
        <div key={index} className={link.classes}>
          <h5 className="footer-title tx-dark fw-500 text-light">{link.title}</h5>
          <ul className="footer-nav-link style-none text-light">
            {link.links.map((linkItem, index) => (
              <li key={index}>
                <Link to={linkItem.href} style={{ textDecoration: "none", color: "#fff" }}>
                  &gt; {linkItem.label}
                </Link>
              </li>
            ))}
          </ul>

          <h5 className="footer-title tx-dark fw-500 text-light">{link.title1}</h5>
          <ul className="footer-nav-link style-none text-light">
            {link.links1.map((linkItem, index) => (
              <li key={index}>
                <Link to={linkItem.href} style={{ textDecoration: "none", color: "#fff" }}>
                  &gt; {linkItem.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="visitors">
            <span>85+</span>
            <p>visitors</p>
          </div>
        </div>
      ))}

      <div className="col-xl-3 text-light">
        <div className="logo fs-20 mt-20 mb-30" style={{ textAlignLast: "center" }}>
          <Link to="/">
            <img src="https://kpenggs.com/assets/images/logoimg.jfif" alt="" width={115} />
          </Link>
        </div>

        <p>
          KP Engineering Services was founded in 2020 by a team of professionals with over 15 years
          of experience in American Engineering and detailing. We deliver flawless Detailing output with
          precision and quick turn around schedules that meet our clients design and detailing requirements.
        </p>
      </div>
    </div>
  );
};

export default Footer;
