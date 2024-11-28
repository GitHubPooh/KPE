import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PISupplierModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose(); // Close the modal when Esc is pressed
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown); // Cleanup listener
    };
  }, [onClose]);

  return (
    <div className="pimodal show d-block" tabIndex="-1">
      <div className="pimodal-dialog">
        <div className="pimodal-content">
          <div className="pimodal-body">
            <table className="table table-bordered table-striped">
              <thead className="pitable-success">
                <tr>
                  <th>.</th>
                  <th>Supplier Name</th>
                  <th>Mobile No.</th>
                  <th>Address</th>
                  <th>Type</th>
                </tr>
                <tr>
                  <td colSpan="4">
                    <input
                      type="text"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <button className="btn btn-primary">Add New (ctrl+N)</button>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>AA</td>
                  <td>00</td>
                  <td></td>
                  <td>SUPPLIER</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>FARMA HUB</td>
                  <td>9422351094</td>
                  <td>PUNE SATARA ROAD</td>
                  <td>SUPPLIER</td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>MMMMMMMMMMMMMMMM</td>
                  <td>999999999999</td>
                  <td></td>
                  <td>SUPPLIER</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PISupplierModal;
