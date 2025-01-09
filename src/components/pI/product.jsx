import React, { forwardRef, useImperativeHandle, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductNameList from "./productNamesModal";

const Product = forwardRef((props, ref) => {
  const [rows, setRows] = useState([{}]); // One empty row initially
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const fieldRefs = useRef([]); // Store refs for each field in every row
useImperativeHandle(ref, () => ({
    focusFirstProductName: () => {
      if (fieldRefs.current[0]?.productName) {
        fieldRefs.current[0].productName.focus();
      }
    },
  }));
  const addRow = () => {
    setRows([
      ...rows,
      { qty: "", productName: "", rate: "", tax: "", discount: "", amount: "" },
    ]);
  };

  const handleFieldClick = (rowIndex) => {
    setSelectedRowIndex(rowIndex);
    setIsModalOpen(true); // Open the modal
  };

  const handleSelectItem = (item) => {
    if (selectedRowIndex !== null) {
      const updatedRows = [...rows];
      updatedRows[selectedRowIndex] = {
        ...updatedRows[selectedRowIndex],
        productName: item.productName,
        rate: item.rate,
        tax: item.tax,
        discount: item.discount,
        qty: "1",
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

  const calculateGrandTotal = () => {
    const total = rows.reduce((sum, row) => sum + parseFloat(row.amount || 0), 0);
    props.onUpdateGrandTotal(total.toFixed()); // Pass the total to the parent
  };
  
  const handleChange = (e, rowIndex, fieldName) => {
    const value = e.target.value;
  
    if (
      ["qty", "rate", "tax", "discount", "amount"].includes(fieldName) &&
      !rows[rowIndex].productName
    ) {
      return; 
    }
  
    if (
      ["qty", "rate", "tax", "discount", "amount"].includes(fieldName) &&
      !/^\d*\.?\d*$/.test(value)
    ) {
      return; 
    }
  
    const updatedRows = [...rows];
    updatedRows[rowIndex][fieldName] = value;
    updatedRows[rowIndex].amount = calculateAmount(updatedRows[rowIndex]);
  
    setRows(updatedRows); // Update row data
    calculateGrandTotal(); // Update grand total
  };
  
  const handleKeyDown = (e, rowIndex, fieldName) => {
    const fields = ["qty", "rate", "tax", "discount"];
  
    if (e.key === "Enter") {
      if (fieldName === "productName" && !rows[rowIndex].productName) {
        handleFieldClick(rowIndex); // Open modal to select product
        return;
      }

      if (!rows[rowIndex].productName && ["qty", "rate", "tax", "discount", "amount"].includes(fieldName)) {
        handleFieldClick(rowIndex); // Open modal to select product
        return;
      }
  
      if (["qty", "rate", "discount"].includes(fieldName)) {
        const updatedRows = [...rows];
        updatedRows[rowIndex].amount = calculateAmount(updatedRows[rowIndex]);
        setRows(updatedRows);
      }
  
      const nextFieldIndex = fields.indexOf(fieldName) + 1;
  
      if (nextFieldIndex === fields.length) {
        // Add a new row if on the last field of the row
        if (rowIndex === rows.length - 1) {
          if (!rows[rowIndex].productName) {
            handleFieldClick(rowIndex); // Open modal if product name is empty
            return;
          }
          addRow();
          setTimeout(() => {
            fieldRefs.current[rowIndex + 1]["productName"].focus();
          }, 0);
        }
      } else {
        // Move to the next field in the same row
        const nextField = fields[nextFieldIndex];
        fieldRefs.current[rowIndex][nextField].focus();
      }
    
    } else if (e.key === "ArrowDown") {
      // Move focus to the same field in the next row
      if (rowIndex < rows.length - 1) {
        fieldRefs.current[rowIndex + 1][fieldName].focus();
      }
    } else if (e.key === "ArrowUp") {
      // Move focus to the same field in the previous row
      if (rowIndex > 0) {
        fieldRefs.current[rowIndex - 1][fieldName].focus();
      }
    } else if (e.key === "ArrowLeft") {
      // Move focus to the previous field in the same row
      const prevFieldIndex = fields.indexOf(fieldName) - 1;
      if (prevFieldIndex >= 0) {
        const prevField = fields[prevFieldIndex];
        fieldRefs.current[rowIndex][prevField].focus();
      }
    } else if (e.key === "ArrowRight") {
      // Move focus to the next field in the same row
      const nextFieldIndex = fields.indexOf(fieldName) + 1;
      if (nextFieldIndex < fields.length) {
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
              <th style={{ width: "3%" }}>Sr. No</th>
              <th style={{ width: "20%" }}>Product Name</th>
              <th style={{ width: "10%" }}>Qty</th>
              <th style={{ width: "10%" }}>Pur Rate</th>
              <th style={{ width: "10%" }}>GST%</th>
              <th style={{ width: "10%" }}>Discount</th>
              <th style={{ width: "10%" }}>Amount</th>
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
                    }}disabled={!row.productName}
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
                    disabled={!row.productName}
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
                    readOnly
                    disabled={!row.productName}
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
                    disabled={!row.productName}
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
});

export default Product;