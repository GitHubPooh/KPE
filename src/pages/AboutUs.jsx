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

        <div class="full-width-image">
          <img src="https://kpenggs.com/assets/images/aboutus.jfif" alt="Full Width Image"/>
          <div class="text-overlay">ABOUT US</div>
        </div>
        <p class="image-description"> At KP Engineering Services, we specialize in providing accurate and timely metal 
        building detailing services tailored to the needs of our clients in India. Our experienced team is dedicated to 
        delivering precision in every project we undertake, including PEMB designing and detailing, hybrid structures, 
        and cold-formed structures With a commitment to excellence and a focus on customer satisfaction, we have 
        established ourselves as a trusted partner for clients seeking high-quality detailing services. Our expertise 
        in handling complex projects sets us apart, allowing us to meet the diverse needs of our clients with efficiency
        and professionalism.</p>

        <div class="container mt-5">
          <div class="row">
                          {/* <!-- Vision Box --> */}
            <div class="col-md-6">
              <div class="box">
                <div class="image-wrapper">
                  <img src="https://kpenggs.com/assets/images/vision.png" alt="Vision Image" class="box-image"/>
                </div>
                <br/>
                <h3>VISION</h3>
                <br/>
                <p> To be the best quality 'Detailing and Drafting Service Provider to the Pre Engineered 
                    Metal Building industry and that too in the most cost effective way.</p>
              </div>
            </div>
                          {/* <!-- Mission Box --> */}
            <div class="col-md-6">
              <div class="box">
                <div class="image-wrapper">
                  <img src="https://kpenggs.com/assets/images/mission.png" alt="Mission Image" class="box-image"/>
                </div>
                <br/>
                <h3>MISSION</h3>
                <br/>
                <p>To be the best, we are constantly updating our knowledge and keeping pace with 
                  the latest changes and standards in the industry.</p>
              </div>
            </div>
          </div>
        </div>

  <div class="container mt-5">
    <h2 class="text-center mb-4">OUR EXPERTISE</h2>
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card-body">
            <h5 class="card-title">Aircraft Hanger</h5>
          </div>          
        </div>
        <div class="col-md-4 mb-3"> 
          <div class="card-body"> 
            <h5 class="card-title">Warehouses Structures</h5>
          </div>      
        </div>
        <div class="col-md-4 mb-3">  
          <div class="card-body" >
            <h5 class="card-title">Factories Structures</h5>
          </div>          
        </div>
      </div>
      <div class="row"> 
        <div class="col-md-4 mb-3">
          <div class="card-body" >
            <h5 class="card-title">Churches</h5>
          </div>    
        </div>
        <div class="col-md-4 mb-3">
          <div class="card-body">
            <h5 class="card-title">Schools Structures</h5>
          </div>          
        </div>
        <div class="col-md-4 mb-3">
          <div class="card-body" >
            <h5 class="card-title">Cold Form Structures</h5>
          </div>          
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card-body" >
            <h5 class="card-title">all types of storage buildings</h5>
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
