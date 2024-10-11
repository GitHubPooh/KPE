import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const VisionMission = () => {
    return(
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
    );
};

export default VisionMission;
