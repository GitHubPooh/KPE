import FooterContent from "@/components/footer/FooterContent";
import Seo from "../components/common/Seo";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import CopyrightFooter from "@/components/footer/CopyrightFooter";


const Landing = () => {
  return (
    <>
      <Seo pageTitle="KPE Engineering" />


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
			
       <footer>
   <div  data-wow-delay="0.1s" class="container-fluid bg-dark text-light footer wow fadeIn">
      <div  class="container py-2">
         <div  class="row">
            <div  class="col-lg-6 col-md-6 col-sm-12 d-none d-lg-block">
               <h4  class="text-light mb-4">Address</h4>
               <p  class="mb-3"><i  class="fa fa-map-marker-alt me-2"></i>Office No, 3 &amp; 4 Nanded City</p>
               <p  class="mt-3 me-2">Sinhgad Road, opposite Celebram IT Park,</p>
               <p  class="mt-4 me-2">Nanded City, Pune, Maharashtra 411068</p>
               <p  class="mb-2"><i  class="fa fa-phone-alt me-2"></i>+91 8856032610</p>
               <p  class="mb-2"><i  class="fa fa-envelope me-2"></i>pemb@kpenggs.com</p>
               <p  class="mb-2"><i  class="fa fa-envelope me-2"></i>info@kpenggs.com</p>
               <div  class="d-flex pt-2 mb-3"><a  href="#" class="btn btn-outline-light btn-social"><i  class="fab fa-twitter"></i></a><a  href="#" class="btn btn-outline-light btn-social"><i  class="fab fa-facebook-f"></i></a><a  href="#" class="btn btn-outline-light btn-social"><i  class="fab fa-youtube"></i></a><a  href="#" class="btn btn-outline-light btn-social"><i  class="fab fa-linkedin-in"></i></a></div>
            </div>
            <div  class="col-lg-6 col-md-6 col-sm-12 d-block d-lg-none">
               <h4  class="text-light mb-4">Address</h4>
               <p  class="mb-2"><i  class="fa fa-map-marker-alt me-2"></i>Office No, 3 &amp; 4 Nanded</p>
               <p  class="mt-3 me-2">City, Sinhgad Road, </p>
               <p  class="mt-4 me-2"> Opposite Celebram</p>
               <p  class="mt-4 me-2"> IT Park, Nanded City, Pune, </p>
               <p  class="mt-4 me-2">Maharashtra 411068</p>
               <p  class="mb-2"><i  class="fa fa-phone-alt me-2"></i>+91 8856032610</p>
               <p  class="mb-2"><i  class="fa fa-envelope me-2"></i>pemb@kpenggs.com</p>
               <p  class="mb-2"><i  class="fa fa-envelope me-2"></i>info@kpenggs.com</p>
               <div  class="d-flex pt-2 mb-3"><a  href="#" class="btn btn-outline-light btn-social"><i  class="fab fa-twitter"></i></a><a  href="#" class="btn btn-outline-light btn-social"><i  class="fab fa-facebook-f"></i></a><a  href="#" class="btn btn-outline-light btn-social"><i  class="fab fa-youtube"></i></a><a  href="#" class="btn btn-outline-light btn-social"><i  class="fab fa-linkedin-in"></i></a></div>
            </div>
            <div  class="col-lg-3 col-md-6 col-sm-12">
               <h4  class="text-light mb-4">Quick Links</h4>
               <a  routerlink="/aboutus" fragment="top" class="btn btn-link" href="#/aboutus#top">About Us</a><a  routerlink="/contactus" fragment="top" class="btn btn-link" href="#/contactus#top">Contact Us</a>
               <h4  class="text-light mb-4">Services</h4>
               <ul  class="list-unstyled">
                  <li ><a  href="#/all-menu/133" class="btn btn-link"> SERVICES </a></li>
        
                  <li ><a  class="btn btn-link" href="#/gallery">PROJECT</a></li>
               </ul>
               <div  class="counter">
                  <div  class="progress-circle">
                     <div  class="circle-fill">
                        <div  class="counter-value">11+</div>
                     </div>
                     <div  class="circle-background d-flex align-items-center justify-content-center"><span  class="circle-text">visitors</span></div>
                  </div>
               </div>
            </div>
            <div  class="col-lg-3 col-md-6 col-sm-12">
               <div  class="card-service">
                  <img  src="/assets/images/logoimg.jfif" style={{height: "80px", width: "115px", marginLeft: "73px"}}></img>
                  <h6  class="footdata mt-3">KP Engineering Services was founded in 2020 by a team of professionals with over 15 years of experience in American Engineering and detailing. We deliver flawless Detailing output with precision and quick turn around schedules that meet our clients design and detailing requirements.</h6>
               </div>
            </div>
         </div>
      </div>
      <div  class="container d-none d-lg-block">
         <div  class="copyright">
            <div  class="row">
               <div  class="col-md-6 col-sm-12 text-center text-md-start mb-4 mb-md-0"> © <a  href="#" class="border-bottom">KP Engineering Service</a>, All Right Reserved. </div>
               <div  class="col-md-6 col-sm-12 mt-2 text-center text-md-end"> Designed By <a  href="#" class="border-bottom">MAVERICKIT INDUSTRIES PVT LTD</a></div>
            </div>
         </div>
      </div>
      <div  class="container d-block d-lg-none">
         <div  class="copyright">
            <div  class="row">
               <div  class="col-md-6 col-sm-12 text-center text-md-start mb-4 mb-md-0"> © <a  href="#" class="border-bottom">Pioneer Corporation</a></div>
               <div  class="col-md-6 col-sm-12 text-center text-md-end"> Designed By <a  href="maverickit.in" class="border-bottom">MAVERICKIT.IN</a></div>
            </div>
         </div>
      </div>
   </div>
</footer>    =====================================================
			*/}



       {/* <div className="footer-style-nine theme-basic-footer zn2 position-relative">
          <div className="bg-wrapper"> */}
          

            <div className="footer-style-four text-light theme-basic-footer position-relative">
        <div >
        <div className="container-fluid bg-dark text-light footer wow fadeIn">
        <div className="inner-wrapper text-light row justify-content-between">
              
              <FooterContent />
              <hr className="custom-hr" />
              <CopyrightFooter/>
             </div>
            </div>
          {/* /.container */}
          </div>
        </div>
        {/* /.bg-wrapper */}

 
      </> 
  );
};

export default Landing;
