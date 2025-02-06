import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const InvoiceHeader = ({ isEditing, data, onEditClick }) => {
  return (
    <div className="pdf-invoice-header" contentEditable={isEditing ? 'true' : 'false'}>
      <div className="pdf-invoice-title">{data.title}</div>
      <div className="pdf-invoice-subtitle">{data.subtitle}</div>
      <hr className="pdf-divider" />
      <div className="pdf-invoice-info d-flex align-items-stretch">
        <div className="pdf-info-left">
          <b>{data.left.name}</b><br />
          {data.left.address}<br />
          Mobile: {data.left.mobile}<br />
          <div className="pdf-state-info">
            State Name: <span>{data.state.name}</span> &nbsp;&nbsp;&nbsp; State Code: <span>{data.state.code}</span>
          </div>
        </div>
        <div className="pdf-vertical"></div>
        <div className="pdf-info-right d-flex justify-content-space-between">
          <div className="pdf-info-item">
            <b>Invoice No:</b> {data.invoiceNo} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Invoice Date:</b> {data.invoiceDate}
          </div>
        </div>
      </div>
      <button className="pdf-btn pdf-header-edit-btn" onClick={() => onEditClick('header')}>
        <i className="fas fa-edit"></i> Edit Header
      </button>
    </div>
  );
};

const InvoiceTable = ({ isEditing, products, emptyRowCount }) => {
  return (
    <div contentEditable={isEditing ? 'true' : 'false'}>
      <table className="pdf-item-table">
        <thead>
          <tr>
            <th>SN</th>
            <th>Particulars</th>
            <th>HSN Code (GST)</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>GST (%)</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{product.Product_Name}</td>
              <td>{product.hsn}</td>
              <td>{product.quantity}</td>
              <td>{product.Selling_Rate}</td>
              <td>{product.gst}</td>
              <td>{product.amount}</td>
            </tr>
          ))}
          {[...Array(emptyRowCount)].map((_, index) => (
            <tr key={index}>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className="pdf-divider" />
      <button className="pdf-btn pdf-table-edit-btn" onClick={() => onEditClick('table')}>
        <i className="fas fa-edit"></i> Edit Table
      </button>
    </div>
  );
};

const InvoiceFooter = ({ totalAmount, amountInWords, otherAmount }) => {
  return (
    <div>
      <div className="d-flex justify-content-space-between">
        <div className="pdf-amount-in-words">
          <div>Amount Chargeable (in words):</div>
          <div><b>{amountInWords}</b></div>
        </div>
        <div className="pdf-total-amount">
          <div><b>SubTotal:</b></div>
          <div><b>{totalAmount}</b></div>
        </div>
      </div>
      <hr className="pdf-divider" />
      <div className="d-flex justify-content-space-between">
        <div><b>Other Amount:</b></div>
        <div><b>{otherAmount}</b></div>
      </div>
      <div className="d-flex justify-content-space-between">
        <div><b>Grand Total:</b></div>
        <div><b>{totalAmount}</b></div>
      </div>
      <hr className="pdf-divider" />
      <div>
        <h6><b>CREDIT</b></h6>
      </div>
    </div>
  );
};

const InvoiceComponent = () => {
  const [isEditingHeader, setIsEditingHeader] = useState(false);
  const [isEditingTable, setIsEditingTable] = useState(false);

  const invoiceData = {
    title: "RFM SEEDS AND BIOTECH",
    subtitle: "KIDPL Integrated Textile Park, Shed No 1 RSW-51 Apparel Park Phase 11, Doddballapur, Bangalore",
    left: {
      name: "SHIV AGRO CENTRE",
      address: "DANGIWADA, AJMER, RAJASTHAN",
      mobile: "xxxxxxxxxxx"
    },
    state: {
      name: "RAJASTHAN",
      code: "08"
    },
    invoiceNo: "1033",
    invoiceDate: "18-Jan-2025"
  };

  const products = [
    { Product_Name: "Product 1", hsn: "123456", quantity: 1, Selling_Rate: 500, gst: 18, amount: 590 },
    { Product_Name: "Product 2", hsn: "654321", quantity: 2, Selling_Rate: 300, gst: 12, amount: 672 }
  ];

  const emptyRowCount = 3;
  const amountInWords = "Five Hundred Ninety Rupees Only";
  const totalAmount = 1262;
  const otherAmount = "0.00";

  const onEditClick = (section) => {
    if (section === 'header') {
      setIsEditingHeader(!isEditingHeader);
    } else if (section === 'table') {
      setIsEditingTable(!isEditingTable);
    }
  };

  return (
    <div className="pdf-invoice-content">
      <InvoiceHeader isEditing={isEditingHeader} data={invoiceData} onEditClick={onEditClick} />
      <InvoiceTable isEditing={isEditingTable} products={products} emptyRowCount={emptyRowCount} />
      <InvoiceFooter totalAmount={totalAmount} amountInWords={amountInWords} otherAmount={otherAmount} />
    </div>
  );
};

export default InvoiceComponent;
