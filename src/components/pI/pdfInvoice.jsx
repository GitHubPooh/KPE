import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const InvoiceHeader = ({ data }) => {
  return (
    <div className="pdf-invoice-header">
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
        <div className="pdf-info-right d-flex justify-content-space-between">
          <div className="pdf-info-item">
            <b>Invoice No:</b> {data.invoiceNo} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Invoice Date:</b> {data.invoiceDate}
          </div>
        </div>
      </div>
    </div>
  );
};

const InvoiceTable = ({ products, emptyRowCount }) => {
  return (
    <div>
      <table className="pdf-item-table">
        <thead>
          <tr>
            <th>SN</th>
            <th>Particulars</th>
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
              <td>{product.productName}</td>
              <td>{product.qty}</td>
              <td>{product.rate}</td>
              <td>{product.tax}</td>
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

const InvoiceComponent = ({ products }) => {
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

  const emptyRowCount = 3;
  const totalAmount = products.reduce((sum, p) => sum + parseFloat(p.amount || 0), 0);
  const amountInWords = `${totalAmount} Rupees Only`;
  const otherAmount = "0.00";

  return (
    <div className="pdf-invoice-content">
      <InvoiceHeader data={invoiceData} />
      <InvoiceTable products={products} emptyRowCount={emptyRowCount} />
      <InvoiceFooter totalAmount={totalAmount} amountInWords={amountInWords} otherAmount={otherAmount} />
    </div>
  );
};

export default InvoiceComponent;
