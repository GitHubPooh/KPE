import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/Header";


const StaticSupplierForm = () => {
  const navigate = useNavigate();

  const handleNewClick = () => {
    navigate("/new");
  };
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
  return (
    <>
    <Header />
      <div className="supplier-form-container">
        <form>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group row">
              <label className="col-sm-4 col-form-label">Supplier Name</label>
                <div className="col-sm-8">
                  <input className="form-control" readOnly  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Other 1</label>
                <div className="col-sm-8">
                  <input  className="form-control" readOnly />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Other 2</label>
                <div className="col-sm-8">
                  <input  className="form-control" readOnly />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Address</label>
                <div className="col-sm-8">
                  <input  className="form-control" readOnly />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">City</label>
                <div className="col-sm-8">
                  <input  className="form-control" readOnly />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">State</label>
                <div className="col-sm-8">
                  <input  className="form-control" readOnly />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Postal Code</label>
                <div className="col-sm-8">
                  <input  className="form-control" readOnly />
                </div>
              </div>
            
              <div className="form-group row align-items-center">
                <label className="col-sm-4 col-form-label">Mobile</label>
                <div className="col-sm-8 d-flex">
                  <input type="text" className="form-control" readOnly />
                  <span className="text-danger ml-2 align-self-center">*Mandatory</span>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Phone No</label>
                <div className="col-sm-8">
                  <input  className="form-control" readOnly />
                </div>
              </div><div className="form-group row">
                <label className="col-sm-4 col-form-label">Fax</label>
                <div className="col-sm-8">
                  <input  className="form-control" readOnly />
                </div>
              </div><div className="form-group row">
                <label className="col-sm-4 col-form-label">Email</label>
                <div className="col-sm-8">
                  <input  className="form-control" readOnly />
                </div>
              </div><div className="form-group row">
                <label className="col-sm-4 col-form-label">Website</label>
                <div className="col-sm-8">
                  <input  className="form-control" readOnly />
                </div>
              </div> <div className="form-group row align-items-center">
                <label className="col-sm-4 col-form-label">GST No.</label>
                <div className="col-sm-6">
                  <input className="form-control" readOnly />
                </div>
                <div className="col-sm-2">
                  <button type="button" className="btn btn-dark">Check</button>
                </div>
              </div><div className="form-group row">
                <label className="col-sm-4 col-form-label">Type of Dealer</label>
                <div className="col-sm-8">
                <input
                    className="form-control blurred-text"
                    value="UnRegister"
                    readOnly
                  />
                </div>
              </div><div className="form-group row">
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
                  <input  className="form-control" readOnly />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Area Name</label>
                <div className="col-sm-8">
                  <input  className="form-control" readOnly />
                </div>
              </div>
              
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">PAN Card No</label>
                <div className="col-sm-8">
                  <input className="form-control" readOnly />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Aadhar Card</label>
                <div className="col-sm-8">
                  <input  className="form-control" readOnly />
                </div>
              </div>
            
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">TDS Eligibility</label>
                <div className="col-sm-8">
                  <input
                    className="form-control blurred-text"
                    value="Not Eligible"
                    readOnly
                  />
                </div>
              </div>
            </div>
            
          </div>
          <div className="form-footer text-center mt-4">
            <button type="button" className="btn btn-primary mx-1" onClick={handleNewClick}>New</button>
            <button type="button" className="btn btn-primary mx-1"> Modify </button>
            <button type="button" className="btn btn-primary mx-1"> Delete </button>
            <button type="button" className="btn btn-primary mx-1"> View </button>
            <button type="button" className="btn btn-primary mx-1"> Exit </button>
            <button type="button" className="btn btn-primary mx-1"> Excel Import </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StaticSupplierForm;
