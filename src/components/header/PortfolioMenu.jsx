import { Link } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { title: "HOME", href: "#s1" },
  { title: "ABOUT US", href: "#s2" },
  { title: "PROJECTS", href: "#s3" },
  { title: "SERVICES", href: "#s4" },
  { title: "CONTACT US", href: "#s5" },
];

const PortfolioMenu = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#one-page-nav"
        aria-controls="one-page-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        align navItems= "right"
        position= "absolute"
        right= "0"
        top= "0"
      >
        <span />
      </button>
      <div className="collapse navbar-collapse" id="one-page-nav">
        {/* Set the whole row's background color to orange and align items to the left */}
        <ul
          className="navbar-nav"
          style={{
            backgroundColor: "orange", 
            width: "100%", 
            display: "d-flex", 
            justifyContent: "flex-end",
            alignItems: "right end", 
            paddingLeft: "10px", 
            margin: "0",
            padding : "0"
          }}
        >
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link to="/" className="d-block">
                <img src="https://kpenggs.com/assets/images/logoimg.jfif" alt="logo" style={{ marginLeft: "auto" }} />
              </Link>
            </div>
          </li>
          {navItems.map((navItem, i) => (
            <li key={i} className="nav-item" style={{ marginRight: "20px" }} >
              <a
                className={`nav-link ${activeLink === i ? "active" : ""}`}
                href={navItem.href}
                onClick={() => handleLinkClick(i)}
                style={{ color: "white" }} // Text color for better contrast
              >
                {navItem.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default PortfolioMenu;
