import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductNameList from "./productNamesModal";

const Product = () => {
  const [rows, setRows] = useState([{}]); // One empty row initially
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const fieldRefs = useRef([]); // Store refs for each field in every row

  const addRow = () => {
    setRows([
      ...rows,
      { qty: "", productName: "", rate: "", tax: "", discount: "", amount: "", mrp: "" },
    ]);
  };

  const handleFieldClick = (rowIndex) => {
    setSelectedRowIndex(rowIndex);
    setIsModalOpen(true); // Open the modal
  };

  const handleSelectItem = (item) => {
    if (selectedRowIndex !== null) {
      // Update the selected row with the item data
      const updatedRows = [...rows];
      updatedRows[selectedRowIndex] = {
        ...updatedRows[selectedRowIndex],
        productName: item.productName,
        rate: item.rate,
        tax: item.tax,
        discount: item.discount,
      };
      setRows(updatedRows);
      setTimeout(() => {
        fieldRefs.current[selectedRowIndex]["qty"].focus();
      }, 0); // Focus quantity field
    }
    setIsModalOpen(false); // Close the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e, rowIndex, fieldName) => {
    const value = e.target.value;
  
    if (["qty", "rate", "tax", "discount", "amount"].includes(fieldName) && !/^\d*\.?\d*$/.test(value)) {
      return; // Restrict invalid input
    }
  
    const updatedRows = [...rows];
    updatedRows[rowIndex][fieldName] = value;
  
    setRows(updatedRows); // Update row data without immediate calculation
  };
  

  const handleKeyDown = (e, rowIndex, fieldName) => {
    if (e.key === "Enter") {
      const fields = ["qty", "rate", "tax", "discount"];
      const nextFieldIndex = fields.indexOf(fieldName) + 1;
  
      if (nextFieldIndex === fields.length) {
        // Last field in calculation chain (Discount) triggers amount calculation
        const updatedRows = [...rows];
        updatedRows[rowIndex].amount = calculateAmount(updatedRows[rowIndex]);
        setRows(updatedRows);
  
        // Focus on the MRP field
        fieldRefs.current[rowIndex]["mrp"].focus();
      } else if (fieldName === "mrp") {
        // Navigate to the Product Name field of the next row
        if (rowIndex < rows.length - 1) {
          fieldRefs.current[rowIndex + 1]["productName"].focus();
        } else {
          addRow();
          setTimeout(() => {
            fieldRefs.current[rowIndex + 1]["productName"].focus();
          }, 0);
        }
      } else if (fieldName === "productName") {
        // Open modal for the current row
        handleFieldClick(rowIndex);
      } else {
        // Move to the next field in the same row
        const nextField = fields[nextFieldIndex];
        fieldRefs.current[rowIndex][nextField].focus();
      }
    }
  };
  
  

  const calculateAmount = ({ qty = 0, rate = 0, discount = 0, tax = 0 }) => {
    const discountedRate = rate - discount;
    const taxAmount = (discountedRate * tax) / 100;
    const amount = qty * (discountedRate + taxAmount);
    return amount.toFixed(2);
  };  

  return (
    <div className="p-product-container col-md-10">
      <div className="p-table-wrapper">
        <table className="p-table">
          <thead className="p-thead">
            <tr>
              <th style={{ width: "5%" }}>Sr. No</th>
              <th style={{ width: "25%" }}>Product Name</th>
              <th style={{ width: "10%" }}>Qty</th>
              <th style={{ width: "10%" }}>Pur Rate</th>
              <th style={{ width: "10%" }}>GST%</th>
              <th style={{ width: "10%" }}>Discount</th>
              <th style={{ width: "15%" }}>Amount</th>
              <th style={{ width: "10%" }}>MRP</th>
            </tr>
          </thead>
          <tbody className="p-tbody">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{rowIndex + 1}</td>
                <td onClick={() => handleFieldClick(rowIndex)}>
  <input
    type="text"
    className="form-control"
    value={row.productName || ""}
    readOnly
    onKeyDown={(e) => handleKeyDown(e, rowIndex, "productName")}
    ref={(el) => {
      if (!fieldRefs.current[rowIndex]) {
        fieldRefs.current[rowIndex] = {};
      }
      fieldRefs.current[rowIndex]["productName"] = el;
    }}
  />
</td>

                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={row.qty || ""}
                    onChange={(e) => handleChange(e, rowIndex, "qty")}
                    onKeyDown={(e) => handleKeyDown(e, rowIndex, "qty")}
                    ref={(el) => {
                      if (!fieldRefs.current[rowIndex]) {
                        fieldRefs.current[rowIndex] = {};
                      }
                      fieldRefs.current[rowIndex]["qty"] = el;
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={row.rate || ""}
                    onChange={(e) => handleChange(e, rowIndex, "rate")}
                    onKeyDown={(e) => handleKeyDown(e, rowIndex, "rate")}
                    ref={(el) => (fieldRefs.current[rowIndex]["rate"] = el)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={row.tax || ""}
                    onChange={(e) => handleChange(e, rowIndex, "tax")}
                    onKeyDown={(e) => handleKeyDown(e, rowIndex, "tax")}
                    ref={(el) => (fieldRefs.current[rowIndex]["tax"] = el)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={row.discount || ""}
                    onChange={(e) => handleChange(e, rowIndex, "discount")}
                    onKeyDown={(e) => handleKeyDown(e, rowIndex, "discount")}
                    ref={(el) => (fieldRefs.current[rowIndex]["discount"] = el)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={row.amount || ""}
                    readOnly
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={row.mrp || ""}
                    onChange={(e) => handleChange(e, rowIndex, "mrp")}
                    onKeyDown={(e) => handleKeyDown(e, rowIndex, "mrp")}
                    ref={(el) => (fieldRefs.current[rowIndex]["mrp"] = el)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> 
      {isModalOpen && (
        <ProductNameList onClose={closeModal} onSelectItem={handleSelectItem} />
      )}
    </div>
  );
};

export default Product;
