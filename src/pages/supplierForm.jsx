import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap";
import Header from "../components/header/Header";

const SupplierForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    supplierName: "",
    other1: "",
    other2: "",
    address: "",
    city: "",
    state: "",
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


  const openFileDialog = () => {
    document.getElementById("pictureInput").click();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, picture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleCancel = () => {
    navigate("/"); // Navigate to the main page when Cancel is clicked
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
                    className="form-control"
                    name="supplierName"
                    value={formData.supplierName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Other 1</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="other1"
                    value={formData.other1}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Other 2</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="other2"
                    value={formData.other2}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Address</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">City</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">State</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="Maharashtra"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Postal Code</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Mobile</label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    <span className="text-danger">* Mandatory</span>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Phone No</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Fax</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="fax"
                    value={formData.fax}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Email</label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Website</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">GST No.</label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="gstNo"
                    value={formData.gstNo}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-2">
                  <button type="button" className="btn btn-dark">Check</button>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Type Of Dealer</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="typeOfDealer"
                    value={formData.typeOfDealer}
                    readOnly
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
                  <input
                    type="text"
                    className="form-control picture"
                    readOnly
                  />
                  <div
                    className="file-select-box"
                    onClick={openFileDialog}
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
                      <span
                        style={{
                          color: "white",
                          fontSize: "18px",
                        }}
                      >
                        .
                      </span>
                      </div>
                </div>
              </div>
              </div>

            <div className="col-md-4">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Supplier Code</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="supplierCode"
                    value={formData.supplierCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Area Name</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="areaName"
                    value={formData.areaName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">PAN Card No</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="panCardNo"
                    value={formData.panCardNo}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Aadhar Card</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="aadharCard"
                    value={formData.aadharCard}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">TDS Eligibility</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="tdsEligibility"
                    value={formData.tdsEligibility}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-footer text-center mt-4">
            <button type="submit" className="btn btn-primary mx-1">Save Ctrl+S</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SupplierForm;
