import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const SliderImageWithParagraph = () => {
    return(
        <>
        {/* Bootstrap Carousel */}
      <div className="container" style={{ marginTop: '40px'}}>
        <div className="row align-items-center">
          {/* Carousel Section */}
          <div className="col-md-8" style={{ marginBottom:'30px'}}>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://kpenggs.com/business_guru_admin/Product_Image/149745590.jpg" className="d-block w-100" style={{ height: 'auto', maxHeight: '650px', objectFit: 'cover' }} alt="Scroll 1" />
                </div>
                <div className="carousel-item">
                  <img src="https://kpenggs.com/business_guru_admin/Product_Image/149774625.jpg" className="d-block w-100" style={{ height: 'auto', maxHeight: '650px', objectFit: 'cover' }} alt="Scroll 2" />
                </div>
                <div className="carousel-item">
                  <img src="https://kpenggs.com/business_guru_admin/Product_Image/149780120.jpg" className="d-block w-100" style={{ height: 'auto', maxHeight: '650px', objectFit: 'cover' }} alt="Scroll 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          
          {/* Text Section */}
          <div className="col-md-4">
            <h5 className="slider-image-description-title">Hybrid Structures Design and Detailing </h5>
            <p className="slider-image-description-paragraph">
              Product innovations are constant to the construction ecosystem and hybrid structures are one of those innovations. Pre Engineered Metal Buildings bring a myriad of benefits such as reduced construction costs, driving sustainability, flexibility with design, and are rapidly gaining traction within the infrastructure spheres. Hybrid structures that evolved from Pre Engineered Buildings bring a mix of both metal building and structural steel and strike a right balance between quality, performance, speed, and economy. Our experience with Hybrid Structures Design and Detailing goes deep into critical infrastructure projects.
            </p>
          </div>
        </div>
      </div>

       {/* New Image Slider Section - PEMB Detailing */}
       <div className="container" style={{ marginTop: '20px' }}>
        <div className="row align-items-center">
          {/* Left Side: Text Section */}
          <div className="col-md-4">
            <h5 className="slider-image-description-title">PEMB Detailing - Pre Engineered Metal Building Detailing Services</h5>
            <p className="slider-image-description-paragraph">
              KP Engineering Services is your go-to partner for any type of Pre-Engineered Metal Building detailing requirement. Our experienced Detailers, Modellers, Checkers & Project Managers have successfully completed over 50+ projects in a short span covering structures like Factories, Workshops, Warehouses, showrooms, shopping centres, schools, hospitals, and many more. We do simple to complex PEMB Designs with our Professional Team of experts by analysing the scope of the project and finding out the right solutions without any errors. We provide our worldwide customers with accurate, timely, and reliable PEB Designs at the most competitive prices and error-free, high-quality design drawings as quickly as possible.
            </p>
          </div>

          {/* Right Side: Carousel Section */}
          <div className="col-md-8">
            <div id="carouselExamplePEMB" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://kpenggs.com/business_guru_admin/Product_Image/397367226.png" className="d-block w-100" style={{ height: 'auto', maxHeight: '600px', objectFit: 'cover' }} alt="PEMB 1" />
                </div>
                <div className="carousel-item">
                  <img src="https://kpenggs.com/business_guru_admin/Product_Image/397367228.png" className="d-block w-100" style={{ height: 'auto', maxHeight: '600px', objectFit: 'cover' }} alt="PEMB 2" />
                </div>
                <div className="carousel-item">
                  <img src="https://kpenggs.com/business_guru_admin/Product_Image/397367229.png" className="d-block w-100" style={{ height: 'auto', maxHeight: '600px', objectFit: 'cover' }} alt="PEMB 3" />
                </div>
                <div className="carousel-item">
                  <img src="https://kpenggs.com/business_guru_admin/Product_Image/397367230.webp" className="d-block w-100" style={{ height: 'auto', maxHeight: '600px', objectFit: 'cover' }} alt="PEMB 4" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExamplePEMB" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExamplePEMB" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Another Image Slider Section - Structural Steel Design */}
      <div className="container" style={{ marginTop: '100px' }}>
        <div className="row align-items-center">
          {/* Left Side: Carousel Section */}
          <div className="col-md-8" style={{ marginBottom:'30px'}}>
            <div id="carouselExampleSteel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://kpenggs.com/business_guru_admin/Product_Image/149165257.png" className="d-block w-100" style={{ height: 'auto', maxHeight: '650px', objectFit: 'cover' }} alt="Steel 1" />
                </div>
                <div className="carousel-item">
                  <img src="https://kpenggs.com/business_guru_admin/Product_Image/149165261.jpg" className="d-block w-100" style={{ height: 'auto', maxHeight: '650px', objectFit: 'cover' }} alt="Steel 2" />
                </div>
                <div className="carousel-item">
                  <img src="https://kpenggs.com/business_guru_admin/Product_Image/149165262.jpg" className="d-block w-100" style={{ height: 'auto', maxHeight: '600px', objectFit: 'cover' }} alt="Steel 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSteel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSteel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Right Side: Text Section */}
          <div className="col-md-4 slider-image-description">
            <h5 className="slider-image-description-title">Structural Steel Design and Detailing Services</h5>
            <p className="slider-image-description-paragraph">
              KP Engineering-Services is the fastest growing Structural Steel Design and Detailing Company. We adhere stringently to AISC and CISC standards, which has helped us gain a massive footprint in the industry in a short span, serving structural steel fabricators from major parts of the US, Canada, and Asia. KP Engineering-Services are highly skilled and possess over 23 years of combined working experience in steel detailing. With our result-oriented 14-step process, we guarantee accurate and error-free services from project initiation to the final deliverable.
              <br />
              <br />
              Structural Steel detailing is the most crucial part when it comes to scheduling. With our result-oriented project management techniques, we guarantee to hit the timelines every time, irrespective of the complexity of the project. Our experienced project managers work closely with our clients and their teams to ensure smooth workflow, even after submitting the final drawings. At KP Engineering-Services, we work primarily with Tekla, AutoCAD, and SDS/2, supported by in-house state-of-the-art technology.
            </p>
          </div>
        </div>
      </div>

     
    </>
    );
};

export default SliderImageWithParagraph;
