import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';  // Import EmailJS

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State to store any error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonClicked(true);

    // Define the email parameters, including the user's email as the recipient
    const emailParams = {
      from_name: 'PK Engineering',        // Sender's name (can be static)
      to_name: formData.name,             // User's name
      to_email: formData.email,           // User's email (recipient)
      subject: formData.subject,          // Email subject
      message: formData.message,          // Email message
      phone: formData.phone               // Phone number (optional)
    };

    // Send the email using EmailJS
    emailjs.send(
      'service_4fs7o8n',      // Service ID
      'template_armu5yn',     // Template ID
      emailParams,            // Email parameters (form data)
      'BSkrlYYhus_OeYAbB'     // Public Key (User ID)
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setShowMessage(true); // Show success modal
    }, (error) => {
      console.error('FAILED...', error);
      setErrorMessage('Failed to send email. Please try again later.'); // Handle error
    })
    .finally(() => {
      setButtonClicked(false);
    });
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
    setButtonClicked(false);
    setErrorMessage('');  // Clear any error message when the modal is closed
  };

  return (
    <div className="container1 mt-5">
      <p className="contact-info1">
        We'd love to hear from you, please drop us a line if you've any query or question.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <input
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button 
          type="submit" 
          className={`btn ${buttonClicked ? 'btn-light' : 'btn-primary'}`} 
          style={{ background: buttonClicked ? 'white' : '#f88f4a', color: buttonClicked ? '#f88f4a' : 'white' }}
          disabled={buttonClicked} // Disable button while sending
        >
          <i className="fas fa-paper-plane" 
          style={{ background: buttonClicked ? 'white' : '#f88f4a', color: buttonClicked ? '#f88f4a' : 'white' }}></i> Send
        </button>
      </form>

      {/* Success/Failure Message Modal */}
      {showMessage && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content" style={{ padding: '5%' }}>
              <h5 className="modal-title">kpenggs.com says</h5>
              <p>Email sent successfully!</p>
              <button type="button" className="btn btn-primary popup-button" onClick={handleCloseMessage}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Message Modal */}
      {errorMessage && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content" style={{ padding: '5%' }}>
              <h5 className="modal-title">Error</h5>
              <p>{errorMessage}</p>
              <button type="button" className="btn btn-danger popup-button" onClick={handleCloseMessage}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUsForm;
