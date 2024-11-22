import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/Header";
import ModalComponent from "@/components/otherButtons/modify";
import ConfirmationModal from "@/components/otherButtons/confirmtionModal";

const StaticSupplierForm = () => {
  const [isNewMode, setIsNewMode] = useState(false);
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchEditable, setIsSearchEditable] = useState(false);
  const [formData, setFormData] = useState({
    Comapy_Name:"",
    other1: "",
    other2: "",
    Addr1: "",
    city: "",
    state: "Maharashtra",
    postalCode: "",
    Mobile_No: "",
    phoneNo: "",
    fax: "",
    mailID: "",
    website: "",
    gst: "",
    supplierCode: "",
    areaName: "",
    panCardNo: "",
    aadharCard: "",
    tdsEligibility: "Not Eligible",
    typeOfDealer: "UnRegister",
  });

  const [activeField, setActiveField] = useState("");

  const formFields = [
    "Comapy_Name", "other1", "other2", "Addr1", "city", "state", "postalCode", "Mobile_No",
    "phoneNo", "fax", "mailID", "website", "gst", "typeOfDealer", "supplierCode", "areaName", 
    "panCardNo", "aadharCard", "tdsEligibility", "saveButton", "cancelButton"
  ];  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField("");
  };

  const handleKeyDown = (e, fieldIndex) => {
    if (["Enter", "ArrowDown", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
      const nextField = formFields[fieldIndex + 1]; // Find the next field in the sequence
      if (nextField) {
        const nextElement = document.getElementsByName(nextField)[0];
        if (nextElement) {
          nextElement.focus(); // Move focus to the next element
        }
      }
    } else if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
      e.preventDefault();
      const prevField = formFields[fieldIndex - 1]; // Find the previous field in the sequence
      if (prevField) {
        const prevElement = document.getElementsByName(prevField)[0];
        if (prevElement) {
          prevElement.focus(); // Move focus to the previous element
        }
      }
    }
  };  

  const handleNewClick = () => {
  setIsNewMode(true);
  setIsModifyMode(false);
  setShowModal(false);
  setFormData({
    Comapy_Name:"",
    other1: "",
    other2: "",
    Addr1: "",
    city: "",
    state: "Maharashtra",
    postalCode: "",
    Mobile_No: "",
    phoneNo: "",
    fax: "",
    mailID: "",
    website: "",
    gst: "",
    supplierCode: "",
    areaName: "",
    panCardNo: "",
    aadharCard: "",
    tdsEligibility: "Not Eligible",
    typeOfDealer: "UnRegister",
  });
  setActiveField("Comapy_Name");
  setTimeout(() => {
    document.getElementsByName("Comapy_Name")[0]?.focus();
  }, 0);
};
  
const handleSelectItem = (item) => {
  setFormData({ Comapy_Name:item.name,Mobile_No:item.Mobile_No,Addr1:item.Addr1,gst:item.gst,mailID:item.mailID});
  setShowModal(false);
  setIsModifyMode(true);
  setActiveField("Comapy_Name");
  setTimeout(() => {
    document.getElementsByName("Comapy_Name")[0]?.focus();
  }, 0);
};

  const handleModifyClick = () => {
    setIsModifyMode(true);
    setIsNewMode(false);
    setShowModal(true);
    setIsSearchEditable(true); // Enable search bar editing
    setSearchQuery(""); // Clear search input
  };

  const handleModalClose = () => {
    setShowModal(false);
    setIsModifyMode(false);
    setIsSearchEditable(false); // Reset search editability when closing modal
    setFormData({
      Comapy_Name:"",
      other1: "",
      other2: "",
      Addr1: "",
      city: "",
      state: "",
      postalCode: "",
      Mobile_No: "",
      phoneNo: "",
      fax: "",
      mailID: "",
      website: "",
      gst: "",
      supplierCode: "",
      areaName: "",
      panCardNo: "",
      aadharCard: "",
      tdsEligibility: "Not Eligible",
      typeOfDealer: "UnRegister",
    }); // Clear all fields
  };
  const handleCancel = () => {
    setIsNewMode(false);
    setIsModifyMode(false);
    setFormData((prevData) => ({
      ...prevData,
      other1: "",
      other2: "",
      Addr1: "",
      city: "",
      state: "",
      postalCode: "",
      Mobile_No: "",
      phoneNo: "",
      fax: "",
      mailID: "",
      website: "",
      gst: "",
      supplierCode: "",
      areaName: "",
      panCardNo: "",
      aadharCard: "",
      tdsEligibility: "Not Eligible",
      typeOfDealer: "UnRegister",
    }));
    setActiveField(""); // Reset the activeField to clear any specific styling
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  
  // Trigger confirmation dialog on Modify button click in modal
  const handleModifyConfirm = () => {
    setShowConfirmation(true);
  };
 // Handle confirmation response
 const handleConfirmYes = () => {
  // Update JSON data (e.g., save formData to file or API)
  fetch("/data.json", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      console.log("Data updated:", data);
      setShowConfirmation(false);
      handleModalClose();
    })
    .catch(error => console.error("Error updating data:", error));
};

const handleConfirmNo = () => {
  setShowConfirmation(false);
  handleModalClose();
};
  return (
    <>
      <Header />
      <div className="supplier-form-container fluid">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Supplier Name</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className={`form-control ${activeField === "Comapy_Name" ? "black-bg" : isNewMode ? "" : "gray-text"}`}
                    name="Comapy_Name"
                    value={formData.Comapy_Name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("Comapy_Name")}
                    onBlur={handleBlur}
                    onKeyDown={(e) => handleKeyDown(e, formFields.indexOf("Comapy_Name"))}
                    readOnly={!isNewMode && !isModifyMode}
                  />
                </div>
              </div>

              {["other1", "other2", "Addr1", "city", "state", "postalCode"].map((field, index) => (
                <div className="form-group row" key={field}>
                  <label className="col-sm-4 col-form-label">
                    {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </label>
                  <div className="col-sm-8">
                    <input
                      type={field === "mailID" ? "mailID" : "text"}
                      className={`form-control ${activeField === field ? "black-bg" : isNewMode ? "" : "gray-text"}`}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field)}
                      onBlur={handleBlur}
                      onKeyDown={(e) => handleKeyDown(e, index + 1)} 
                      readOnly={!isNewMode && !isModifyMode}
                    />
                  </div>
                </div>
              ))}

              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Mobile</label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className={`form-control ${activeField === "Mobile_No" ? "black-bg" : ""}`} style={{width:"285px"}}
                    name="Mobile_No"
                    value={formData.Mobile_No}
                    onChange={handleChange}
                    onFocus={() => handleFocus("Mobile_No")}
                    onBlur={handleBlur}
                    onKeyDown={(e) => handleKeyDown(e, formFields.indexOf("Mobile_No"))}
                    readOnly={!isNewMode && !isModifyMode}
                  />
                </div>
                <div className="col-sm-1 d-flex align-items-center">
                  <span className="text-danger" style={{marginLeft:"20px"}}>*Mandatory</span>
                </div>
              </div>

              {["phoneNo", "fax", "mailID", "website"].map((field, index) => (
                <div className="form-group row" key={field}>
                  <label className="col-sm-4 col-form-label">
                    {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </label>
                  <div className="col-sm-8">
                    <input
                      type={field === "mailID" ? "mailID" : "text"}
                      className={`form-control ${activeField === field ? "black-bg" : ""}`}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field)}
                      onBlur={handleBlur}
                      onKeyDown={(e) => handleKeyDown(e, formFields.indexOf(field))}
                      readOnly={!isNewMode && !isModifyMode}
                    />
                  </div>
                </div>
              ))}

              <div className="form-group row">
                <label className=" col-sm-4 col-form-label">GST No.</label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className={`form-control ${activeField === "gst" ? "black-bg" : ""}`} style={{width:"285px"}}
                    name="gst"
                    value={formData.gst}
                    onChange={handleChange}
                    onFocus={() => handleFocus("gst")}
                    onBlur={handleBlur}
                    onKeyDown={(e) => handleKeyDown(e, formFields.indexOf("gst"))}
                    readOnly={!isNewMode && !isModifyMode}
                  />
                </div>
                <div className="col-sm-1">
                  <button type="button" className="btn btn-dark" style={{marginLeft:"20px"}}>Check</button>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Type of Dealer</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className={`form-control ${activeField === "typeOfDealer" ? "black-bg" : ""}`}
                    name="typeOfDealer"
                    value={formData.typeOfDealer}
                    onFocus={() => handleFocus("typeOfDealer")}
                    onBlur={handleBlur}
                    readOnly
                    onKeyDown={(e) => handleKeyDown(e, formFields.indexOf("typeOfDealer"))}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Picture 1</label>
                <div className="col-sm-6 d-flex align-items-center">
                  <input
                    type="file"
                    id="pictureInput"
                    className="d-none"
                    onChange={(e) => console.log(e.target.files[0])}
                  />
                  <input type="text" className="form-control picture" readOnly />
                  <div
                    className="file-select-box"
                    onClick={() => document.getElementById("pictureInput").click()}
                    style={{
                      width: "25px",
                      height: "23px",
                      backgroundColor: "black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ color: "white", fontSize: "18px" }}>.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              {["supplierCode", "areaName", "panCardNo", "aadharCard", "tdsEligibility"].map((field, index) => (
                <div className="form-group row" key={field}>
                  <label className="col-sm-4 col-form-label">
                    {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className={`form-control ${activeField === field ? "black-bg" : ""}`}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field)}
                      onBlur={handleBlur}
                      onKeyDown={(e) => handleKeyDown(e, formFields.indexOf(field))}
                      readOnly={!isNewMode && !isModifyMode || field === "tdsEligibility"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-footer text-center mt-4">
            {isNewMode ? (
              <>
                <button type="submit" className="btn btn-primary mx-1">Save</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleCancel}>Cancel</button>
              </>
            ) : isModifyMode ? (
              <>
                <button type="button" className="btn btn-primary mx-1" onClick={handleModifyConfirm}>Modify</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleModalClose}>Cancel</button>
              </>
            ) : (
              <>
                <button type="button" className="btn btn-primary mx-1" onClick={handleNewClick}>New</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleModifyClick}>Modify</button>
                <button type="button" className="btn btn-primary mx-1">Delete</button>
                <button type="button" className="btn btn-primary mx-1">View</button>
                <button type="button" className="btn btn-primary mx-1">Exit</button>
                <button type="button" className="btn btn-primary mx-1">Excel Import</button>
              </>
            )}
          </div>
        </form>
      </div>

      <ModalComponent
          showModal={showModal}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isSearchEditable={isSearchEditable}
          onItemSelect={handleSelectItem} />

      <ConfirmationModal
        show={showConfirmation}
        onConfirm={handleConfirmYes}
        onCancel={handleConfirmNo} />
    </>
  );
};

export default StaticSupplierForm;