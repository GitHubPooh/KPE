import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Product = () => {
  const [rows, setRows] = useState([{}]); // One empty row initially

  const addRow = () => {
    setRows([...rows, {}]); // Add a new empty row
  };

  return (
    <div className="p-product-container col-md-10">
      <div className="p-table-wrapper">
        <table className="p-table">
          <thead className="p-thead">
            <tr>
              <th>Sr No</th>
              <th>Supplier Name</th>
              <th>Height</th>
              <th>Width</th>
              <th>Total</th>
              <th>T1</th>
              <th>T2</th>
              <th>T3</th>
              <th>T4</th>
            </tr>
          </thead>
          <tbody className="p-tbody">
            {rows.map((_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input type="text" className="form-control p-input" />
                </td>
                <td>
                  <input type="text" className="form-control p-input" />
                </td>
                <td>
                  <input type="text" className="form-control p-input" />
                </td>
                <td>
                  <input type="text" className="form-control p-input" />
                </td>
                <td>
                  <input type="text" className="form-control p-input" />
                </td>
                <td>
                  <input type="text" className="form-control p-input" />
                </td>
                <td>
                  <input type="text" className="form-control p-input" />
                </td>
                <td>
                  <input type="text" className="form-control p-input" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary p-add-row" onClick={addRow}>
        Add Row
      </button>
    </div>
  );
};

export default Product;
