import Seo from "../components/common/Seo";
import Header from "../components/header/Header";


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
