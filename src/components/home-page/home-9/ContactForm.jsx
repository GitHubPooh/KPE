const ContactForm = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_161.svg",
      title: "Our Address",
      content: (
        <>
          &nbsp;&nbsp;B701, Mangalam Shraddha, <br />
          &nbsp;&nbsp; Ganeshpeth, Nagpur,<br />&nbsp;&nbsp; Maharashtra, India
        </>
      ),
    },
    {
      icon: "/images/icon/call.svg",
      title: "Contact Info",
      content: (
        <>
          &nbsp;&nbsp;Call at <br />
          <a href="tel:+919975947989" className="call">
          &nbsp;&nbsp; +91 9975947989
          </a>
        </>
      ),
    },
    {
      icon: "/images/icon/icon_162.svg",
      title: "Email",
      content: (
        <>
          &nbsp;&nbsp;Drop an email at <br />
          <a href="mailto:name@email.com" className="webaddress">
          &nbsp;&nbsp; info@nullsafe.co.in
          </a>
        </>
      ),
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div className="address-block-three d-flex mb-70 lg-mb-40" key={index}>
          <div className="icon">
            <img src={block.icon} alt="icon"/>
          </div>
          <div className="text">
            <h5 className="title">&nbsp;&nbsp;{block.title}</h5>
            <p>&nbsp;&nbsp;{block.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactForm;
