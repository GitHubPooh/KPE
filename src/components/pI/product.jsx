import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductNameList from "./productNamesModal";

const Product = () => {
  const [rows, setRows] = useState([{}]); // One empty row initially
  const [isModalOpen, setIsModalOpen] = useState(false);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const qtyRefs = useRef([]);

  const fieldRefs = useRef([{}]); // Store refs for each field in every row
  

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
    }
    setIsModalOpen(false); // Close the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleChange = (e, rowIndex, fieldName) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][fieldName] = e.target.value;
  
    if (["qty", "rate", "tax", "discount"].includes(fieldName)) {
      updatedRows[rowIndex].amount = calculateAmount(updatedRows[rowIndex]);
    }
  
    setRows(updatedRows);
  };
  
  const handleKeyDown = (e, rowIndex, fieldName) => {
    if (e.key === "Enter") {
      const fields = ["qty", "rate", "tax", "discount", "mrp"];
      const nextFieldIndex = fields.indexOf(fieldName) + 1;
  
      if (nextFieldIndex < fields.length) {
        fieldRefs.current[rowIndex][fields[nextFieldIndex]].focus();
      } else if (rowIndex < rows.length - 1) {
        fieldRefs.current[rowIndex + 1]["qty"].focus();
      } else {
        addRow();
        setTimeout(() => {
          fieldRefs.current[rowIndex + 1]["qty"].focus();
        }, 0);
      }
    }
  };
  

  const handleQtyChange = (e, index) => {
    const updatedRows = [...rows];
    updatedRows[index].qty = e.target.value; // Update the quantity value in the row
    setRows(updatedRows);
  };

  const handleQtyKeyDown = (e, index) => {
    if (e.key === "Enter") {
      // Calculate amount when Enter key is pressed
      const updatedRows = [...rows];
      updatedRows[index].amount = calculateAmount(updatedRows[index]);
      setRows(updatedRows);
    }
  };

  const handleRateChange = (e, index) => {
    const updatedRows = [...rows];
    updatedRows[index].rate = e.target.value;
    setRows(updatedRows);
  };

  const handleDiscountChange = (e, index) => {
    const updatedRows = [...rows];
    updatedRows[index].discount = e.target.value;
    setRows(updatedRows);
  };

  const handleTaxChange = (e, index) => {
    const updatedRows = [...rows];
    updatedRows[index].tax = e.target.value;
    setRows(updatedRows);
  };

  const calculateAmount = ({ qty = 0, rate = 0, discount = 0, tax = 0 }) => {
    const discountedRate = rate - discount;
    const taxAmount = (discountedRate * tax) / 100;
    const amount = qty * (discountedRate + taxAmount);
    return amount.toFixed(2);
  };

  // Focus the qty input when the row is selected
  useEffect(() => {
    if (selectedRowIndex !== null && qtyRefs.current[selectedRowIndex]) {
      qtyRefs.current[selectedRowIndex].focus();
    }
  }, [selectedRowIndex]);

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
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          value={row.qty || ""}
          onChange={(e) => handleChange(e, rowIndex, "qty")}
          onKeyDown={(e) => handleKeyDown(e, rowIndex, "qty")}
          ref={(el) => (fieldRefs.current[rowIndex]["qty"] = el)}
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
          ref={(el) => (fieldRefs.current[rowIndex]["amount"] = el)}
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
      <button className="btn btn-primary p-add-row" onClick={addRow}>
        Add Row
      </button>

      {/* ProductNameList Modal */}
      {isModalOpen && (
        <ProductNameList
          onClose={closeModal}
          onSelectItem={handleSelectItem}
        />
      )}
    </div>
  );
};

export default Product;
