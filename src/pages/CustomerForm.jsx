import React, { useState } from 'react';

const CustomerForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    custCode: '',
    stateCode: '',
    stateName: '',
    // Add other fields as necessary
  });

  const [errormsg, setErrorMsg] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isModifyMode, setIsModifyMode] = useState(false);

  // Example fields to replace *ngFor loops
  const detailsFields = [
    { label: 'Field1', name: 'field1', type: 'text', required: true },
    // Add more fields as needed
  ];
  
  const addressFields = [
    { label: 'Address Line 1', name: 'address1', type: 'text' },
    // Add more fields
  ];

  const creditFields = [
    { label: 'Credit Limit', name: 'creditLimit', type: 'text' },
    // Add more fields
  ];

  const licenseFields = [
    { label: 'License No.', name: 'licenseNo', type: 'text' },
    // Add more fields
  ];

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="p-3 custom-container">
      {errormsg && <div className="alert alert-danger">{errormsg}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <h4 className="mb-4">Details</h4>
            <div className="mb-2 row">
              <div className="col-sm-2">
                <label className="small">Name</label>
              </div>
              <div className="col-sm-6">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-sm-2">
                <label className="small">CustCode</label>
              </div>
              <div className="col-sm-2">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  name="custCode"
                  value={formData.custCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {detailsFields.map((field, index) => (
              <div key={index} className="mb-2 row">
                <div className="col-sm-2">
                  <label className="small">{field.label}</label>
                </div>
                <div className="col-sm-6">
                  <input
                    className="form-control form-control-sm"
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                  />
                </div>
                {field.required && (
                  <div className="col-sm-1">
                    <span className="text-danger">*Mandatory</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="col-md-6">
            <h4 className="mb-2">Address Contact Info</h4>
            {addressFields.map((field, index) => (
              <div key={index} className="mb-2 row">
                <div className="col-sm-2">
                  <label className="small">{field.label}</label>
                </div>
                <div className={`col-sm-${field.name === 'stateName' ? '10' : '6'}`}>
                  <input
                    className="form-control form-control-sm"
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                </div>
                {field.name === 'stateName' && (
                  <div className="row col-sm-10">
                    <div className="col-sm-7">
                      <input
                        className="form-control form-control-sm"
                        type={field.type}
                        name="stateName"
                        value={formData.stateName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-sm-2">
                      <label className="small">State Code</label>
                    </div>
                    <div className="col-sm-2">
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name="stateCode"
                        value={formData.stateCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h4 className="mb-2">Credit Info</h4>
            {creditFields.map((field, index) => (
              <div key={index} className="mb-2 row">
                <div className="col-sm-2">
                  <label className="small">{field.label}</label>
                </div>
                <div className="col-sm-6">
                  <input
                    className="form-control form-control-sm"
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-6">
            <h4 className="mb-2">License</h4>
            {licenseFields.map((field, index) => (
              <div key={index} className="mb-2 row">
                <div className="col-sm-2">
                  <label className="small">{field.label}</label>
                </div>
                <div className="col-sm-6">
                  <input
                    className="form-control form-control-sm"
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row mt-4 footer">
          <div className="col text-center">
            {!isModifyMode ? (
              <>
                <button className="btn btn-sm me-1" type="submit">New</button>
                <button className="btn btn-sm me-1" type="button" onClick={() => setIsModifyMode(true)}>Modify</button>
                <button className="btn btn-sm me-1" type="button">Delete</button>
                <button className="btn btn-sm me-1" type="button">View</button>
                <button className="btn btn-sm me-1" type="button">Exit</button>
                <button className="btn btn-sm me-1" type="button">Excel Import</button>
              </>
            ) : (
              <>
                <button className="btn btn-sm me-1" type="button">Save</button>
                <button className="btn btn-sm me-1" type="button" onClick={() => setIsModifyMode(false)}>Cancel</button>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
