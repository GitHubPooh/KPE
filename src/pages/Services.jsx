import FooterContent from "@/components/footer/FooterContent";
import Seo from "../components/common/Seo";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import CopyrightFooter from "@/components/footer/CopyrightFooter";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import PantagaonWithImageAndParagraph from "@/components/servicePage/PentagaonWithImageAndParagraph";
import SliderImageWithParagraph from "@/components/servicePage/SliderImageWithParagraph";

const Services = () => {
  return (
    <>
      <Seo pageTitle="KPE Engineering" />
      <Header />
      <PantagaonWithImageAndParagraph/>
      <SliderImageWithParagraph/>
      {/* Footer Section */}
      <div className="footer-style-four text-light theme-basic-footer position-relative">
        <div>
          <div className="container-fluid bg-dark text-light footer wow fadeIn">
            <div className="inner-wrapper text-light row justify-content-between">
              <FooterContent />
              <hr className="custom-hr" />
              <CopyrightFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
