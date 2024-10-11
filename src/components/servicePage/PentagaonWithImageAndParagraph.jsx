import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const PantagaonWithImageAndParagraph = () => {
    return(
        <>
        <div className="full-width-image">
        <img src="https://kpenggs.com/assets/images/kpservice.jfif" alt="Full Width Image" />
        <div className="text-overlay">SERVICE</div>
      </div>

      <p className="image-description" style={{ marginBottom: '2px' }}>
        At KP-Engineering-service Detailing Services, we are dedicated to delivering precision and excellence in metal building detailing. Our mission is to provide accurate and timely detailing services, tailored to the unique needs of our clients in India. Guided by core values of integrity and innovation, we specialize in handling complex projects, including PEMB designing and detailing, hybrid structures, and cold-formed structures.
      </p>
      
      <p className="image-description" style={{ marginTop: '2px' }}>
        With a rich history and a team of experienced professionals, we have consistently achieved milestones in the field. Our client-centric approach ensures that every project is a testament to our commitment to quality and client satisfaction.
      </p>
    </>
    );
 
};

export default PantagaonWithImageAndParagraph;
