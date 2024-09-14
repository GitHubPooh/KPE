import { Link } from "react-router-dom";
import Social from "../common/Social";


const Footer = () => {
  const footerLinks = [
    {
      title: "Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Pricing", href: "/pages-menu/pricing" },
       
      ],
      classes: "col-lg-3 col-sm-4 ms-auto mb-30",
    },
    // {
    //   title: "Help & Support",
    //   links: [
    //     { label: "FAQ", href: "/pages-menu/faq" },
    //     { label: "Blog", href: "/blog/blog-v1" },
    //     { label: "Contact Us", href: "/contact" },
    //     { label: "Support", href: "/contact" },
    //   ],
    //   classes: "col-lg-3 col-sm-4 mb-30",
    // },
  ];

  return (
    <div className="row text-light" style={{marginBottom:"0 rem"}}>

<div  class="col-lg-6 col-md-6 col-sm-12  d-sm-block">
<h4  class="text-light">Address</h4>
<p  >
   <i  class="fa fa-map-marker-alt me-2"></i>Office No, 3 &amp; 4 Nanded City
</p>
<p>Sinhgad Road, opposite Celebram IT Park,</p>
<p  >Nanded City, Pune, Maharashtra 411068</p>
<p ><i  class="fa fa-phone-alt me-2"></i>+91 8856032610</p>
<p ><i  class="fa fa-envelope me-2"></i>pemb@kpenggs.com</p>
<p ><i  class="fa fa-envelope me-2"></i>info@kpenggs.com</p>
<div  class="d-flex pt-2 mb-3"><a  href="#" class="btn btn-outline-light btn-social"><i  class="fab fa-twitter"></i></a><a  href="#" class="btn btn-outline-light btn-social"><i  class="fab fa-facebook-f"></i></a><a  href="#" class="btn btn-outline-light btn-social"><i  class="fab fa-youtube"></i></a><a  href="#" class="btn btn-outline-light btn-social"><i  class="fab fa-linkedin-in"></i></a></div>
</div>
      {footerLinks.map((link, index) => (
        <div key={index} className={link.classes}>
          <h5 className="footer-title tx-dark fw-500 text-light">{link.title}</h5>
          <ul className="footer-nav-link style-none text-light">
            {link.links.map((linkItem, index) => (
              <li key={index}>
                <Link to={linkItem.href}>{linkItem.label}</Link>
              </li>
            ))}
          </ul>

          <h5 className="footer-title tx-dark fw-500 text-light">{link.title}</h5>
          <ul className="footer-nav-link style-none text-light">
            {link.links.map((linkItem, index) => (
              <li key={index}>
                <Link to={linkItem.href}>{linkItem.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* End menu data */}


      <div className="col-xl-3 text-light">
        <div className="logo fs-20 mt-20 mb-30" style={{textAlignLast: "center"}}>
          <Link to="/">
            <img src="https://kpenggs.com/assets/images/logoimg.jfif" alt="" width={95} />
          </Link>
        </div>
        
        <p>
        KP Engineering Services was founded in 2020 by a team of professionals with over 15 years of experience in American Engineering and detailing. We deliver flawless Detailing output with precision and quick turn around schedules that meet our clients design and detailing requirements.
        </p>
       
      </div>
    </div>
  );
};

export default Footer;
