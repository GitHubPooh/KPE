import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo";
import Awards from "../../components/home-page/Awards";
import Block from "../../components/home-page/Block";
import ContactForm from "../../components/home-page/ContactForm";
import Counter from "../../components/home-page/Counter";
import Education from "../../components/home-page/Education";
import Header from "../../components/home-page/Header";
import Hero from "../../components/home-page/Hero";
import Portfolio from "../../components/home-page/Portfolio";
import ProjectBanner from "../../components/home-page/ProjectBanner";
import Sidebar from "../../components/home-page/Sidebar";
import Skills from "../../components/home-page/Skills";
import Testimonial from "../../components/home-page/Testimonial";
import Tools from "../../components/home-page/Tools";
import Social from "../../components/home-page/Social";
import Tools2 from "@/components/home-page/Tools2";

const Landing = () => {
  return (
    <>
      <Seo pageTitle="KPE Engineering" />

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
              <div className="content" style={{ height: '2000px', paddingTop: '80px' }}>
        <h1 className="mt-5">Page Content</h1>
        <p>Scroll down to see the effect in action.</p>
        {/* Other components and content here */}
      </div>
    
            </div>
          </div>
          {/* End .row */}


          {/* /.block-wrapper */}
        </div>
        {/* /.container */}
      </div>

      {/* 
			=============================================
				Portfolio 
			============================================== 
			*/}
     

      {/* 
			=============================================
				Feature 
			============================================== 
			*/}
      

     

    
      {/*
			=====================================================
				Fancy Short Banner
			=====================================================
			*/}
     


      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <footer className="bg-dark text-white text-center p-3">
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
      
        Footer content
      </footer> 
    </>
  );
};

export default Landing;
