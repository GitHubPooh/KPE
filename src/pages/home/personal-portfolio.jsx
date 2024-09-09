import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo";
import Awards from "../../components/home-page/home-9/Awards";
import Block from "../../components/home-page/home-9/Block";
import ContactForm from "../../components/home-page/home-9/ContactForm";
import Counter from "../../components/home-page/home-9/Counter";
import Education from "../../components/home-page/home-9/Education";
import Header from "../../components/home-page/home-9/Header";
import Hero from "../../components/home-page/home-9/Hero";
import Portfolio from "../../components/home-page/home-9/Portfolio";
import ProjectBanner from "../../components/home-page/home-9/ProjectBanner";
import Sidebar from "../../components/home-page/home-9/Sidebar";
import Skills from "../../components/home-page/home-9/Skills";
import Testimonial from "../../components/home-page/home-9/Testimonial";
import Tools from "../../components/home-page/home-9/Tools";
import Social from "../../components/home-page/home-9/Social";
import Tools2 from "@/components/home-page/home-9/Tools2";

const PersonalPortfolio = () => {
  return (
    <>
      <Seo pageTitle="Persoanl Portfolio" />

      {/* <!-- 
        =============================================
        Sidebar Nav
        ============================================== 
        --> */}
      <Sidebar />

      {/* <!--  =============================================
        Theme Header4 Menu
        ============================================== 	--> */}
      <Header />

      {/* <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
			--> */}
      {/* <Hero /> */}

      {/* 
			=============================================
				Feature Section Twelve
			============================================== 
			*/}
      <div
        className="fancy-feature-twelve position-relative mt-300 xl-mt-200 md-mt-120"
        id="s2"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-2 col-lg-3 text-center"
              data-aos="fade-right"
            >
              <div className="main-count">
              
              </div>
              <h2 className="title fw-500 tx-dark">
               fsdfgsdg
               sg
               ds
               gds
               gdsdg
               fadegdf
               gdsfd
               xdf
               ds
               <fieldset><fieldset><dfn>ds
                f</dfn></fieldset></fieldset>
              </h2>
            </div>
          </div>
          {/* End .row */}


          {/* /.block-wrapper */}
        </div>
        {/* /.container */}
      </div>

      {/* 
			=============================================
				Portfolio Gallery One
			============================================== 
			*/}
     

      {/* 
			=============================================
				Feature Section Thirteen
			============================================== 
			*/}
      

         
      {/* 
			=============================================
				Counter Section One
			============================================== 
			*/}
    

      {/*
			=====================================================
			Feedback Section Four
			=====================================================
			*/}
     

      {/*
			=====================================================
				Fancy Short Banner Five
			=====================================================
			*/}
     


      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-four position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-30 order-lg-0">
              <div className="logo d-flex justify-content-center justify-content-lg-start">
               
              </div>
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-4 mb-30 d-flex justify-content-center justify-content-lg-end order-lg-3">
             
            </div>
            {/* End .col-lg-4 */}

          
            {/* End .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
      </div>
    </>
  );
};

export default PersonalPortfolio;
