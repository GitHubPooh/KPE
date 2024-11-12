import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/Header";
import ModalComponent from "@/components/otherButtons/modify";

const StaticSupplierForm = () => {
  const [isNewMode, setIsNewMode] = useState(false);
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchEditable, setIsSearchEditable] = useState(false);
  const [formData, setFormData] = useState({
    supplierName: "",
    other1: "",
    other2: "",
    address: "",
    city: "",
    state: "Maharashtra",
    postalCode: "",
    mobile: "",
    phoneNo: "",
    fax: "",
    email: "",
    website: "",
    gstNo: "",
    supplierCode: "",
    areaName: "",
    panCardNo: "",
    aadharCard: "",
    tdsEligibility: "Not Eligible",
    typeOfDealer: "UnRegister",
  });

  const [activeField, setActiveField] = useState("");

  const formFields = [
    "supplierName", "other1", "other2", "address", "city", "state", "postalCode", "mobile",
    "phoneNo", "fax", "email", "website", "gstNo", "typeOfDealer", "supplierCode", "areaName", 
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
      const nextField = formFields[fieldIndex + 1];
      if (nextField) {
        if (nextField === "saveButton" || nextField === "cancelButton ") {
          document.getElementById(nextField).focus();
        } else {
          document.getElementsByName(nextField)[0]?.focus();
        }
      }
    } else if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
      e.preventDefault();
      const prevField = formFields[fieldIndex - 1];
      if (prevField) {
        document.getElementsByName(prevField)[0]?.focus();
      }
    }
  };

  const handleNewClick = () => {
    setIsNewMode(true);
    setIsModifyMode(false);
    setShowModal(false);
    setFormData({
      supplierName: "",
      other1: "",
      other2: "",
      address: "",
      city: "",
      state: "Maharashtra",
      postalCode: "",
      mobile: "",
      phoneNo: "",
      fax: "",
      email: "",
      website: "",
      gstNo: "",
      supplierCode: "",
      areaName: "",
      panCardNo: "",
      aadharCard: "",
      tdsEligibility: "Not Eligible",
      typeOfDealer: "UnRegister",
    });
    setActiveField("supplierName"); 
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
  };

  const handleCancel = () => {
    setIsNewMode(false);
    setIsModifyMode(false);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Header />
      <div className="supplier-form-container fluid">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4">
              {["supplierName", "other1", "other2", "address", "city", "state", "postalCode"].map((field, index) => (
                <div className="form-group row" key={field}>
                  <label className="col-sm-4 col-form-label">
                    {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </label>
                  <div className="col-sm-8">
                    <input
                      type={field === "email" ? "email" : "text"}
                      className={`form-control ${activeField === field ? "black-bg" : isNewMode ? "" : "gray-text"}`}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field)}
                      onBlur={handleBlur}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      readOnly={!isNewMode}
                    />
                  </div>
                </div>
              ))}

              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Mobile</label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className={`form-control ${activeField === "mobile" ? "black-bg" : ""}`} style={{width:"285px"}}
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    onFocus={() => handleFocus("mobile")}
                    onBlur={handleBlur}
                    onKeyDown={(e) => handleKeyDown(e, formFields.indexOf("mobile"))}
                    readOnly={!isNewMode}
                  />
                </div>
                <div className="col-sm-1 d-flex align-items-center">
                  <span className="text-danger" style={{marginLeft:"20px"}}>*Mandatory</span>
                </div>
              </div>

              {["phoneNo", "fax", "email", "website"].map((field, index) => (
                <div className="form-group row" key={field}>
                  <label className="col-sm-4 col-form-label">
                    {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </label>
                  <div className="col-sm-8">
                    <input
                      type={field === "email" ? "email" : "text"}
                      className={`form-control ${activeField === field ? "black-bg" : ""}`}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field)}
                      onBlur={handleBlur}
                      onKeyDown={(e) => handleKeyDown(e, formFields.indexOf(field))}
                      readOnly={!isNewMode}
                    />
                  </div>
                </div>
              ))}

              <div className="form-group row">
                <label className=" col-sm-4 col-form-label">GST No.</label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className={`form-control ${activeField === "gstNo" ? "black-bg" : ""}`} style={{width:"285px"}}
                    name="gstNo"
                    value={formData.gstNo}
                    onChange={handleChange}
                    onFocus={() => handleFocus("gstNo")}
                    onBlur={handleBlur}
                    onKeyDown={(e) => handleKeyDown(e, formFields.indexOf("gstNo"))}
                    readOnly={!isNewMode}
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
                      readOnly={!isNewMode || field === "tdsEligibility"}
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
                <button type="button" className="btn btn-primary mx-1" onClick={handleModalClose}>Modify</button>
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
          isSearchEditable={isSearchEditable} />
    </>
  );
};

export default StaticSupplierForm;