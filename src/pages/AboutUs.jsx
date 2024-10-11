import FooterContent from "@/components/footer/FooterContent";
import Seo from "../components/common/Seo";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import CopyrightFooter from "@/components/footer/CopyrightFooter";
import "bootstrap/dist/js/bootstrap";
import PantagaonSlider from "@/components/aboutUsPageComponents/pantagaonSlider";
import VisionMission from "@/components/aboutUsPageComponents/visionMission";
import OurExpertise from "@/components/aboutUsPageComponents/OurExpertise";

const AboutUs = () => {
    return (
      <>
        <Seo pageTitle="KPE Engineering" />
        <Header />

        <PantagaonSlider/>

        <VisionMission/>

        <OurExpertise />
  
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
