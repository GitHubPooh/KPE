import FooterContent from "@/components/footer/FooterContent";
import Seo from "../components/common/Seo";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import CopyrightFooter from "@/components/footer/CopyrightFooter";
import "bootstrap/dist/js/bootstrap";

const AboutUs = () => {
    return (
      <>
        <Seo pageTitle="KPE Engineering" />
        <Header />
  
        <div className="fancy-feature-twelve position-relative mt-300 xl-mt-200 md-mt-120" id="s2">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-3 text-center" data-aos="fade-right">
                <div className="main-count"> </div>
                  <div className="content" style={{ height: '2000px', paddingTop: '80px' }}></div>
              </div>
            </div>
          </div>
        </div>
  
            <div className="footer-style-four text-light theme-basic-footer position-relative"><div >
              <div className="container-fluid bg-dark text-light footer wow fadeIn">
                <div className="inner-wrapper text-light row justify-content-between">
                <FooterContent />
                <hr className="custom-hr" />
                <CopyrightFooter/>
                </div>
              </div>
              
            </div>
        </div>
      </> 
    );
  };

export default AboutUs;
