import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const InvoiceHeader = ({ data }) => {
  return (
    <div className="pdf-invoice-header">
      <div className="pdf-invoice-title">{data.title}</div>
      <div className="pdf-invoice-subtitle">{data.subtitle}</div>
      <hr className="pdf-divider-thick" />
      <div className="pdf-invoice-info">
        <div className="pdf-info-left">
          <b>{data.left.name}</b><br />
          {data.left.address}<br />
          Mobile: {data.left.mobile}<br />
          <div className="pdf-state-info">
            State Name: <span>{data.state.name}</span> &nbsp;&nbsp;&nbsp; State Code: <span>{data.state.code}</span>
          </div>
        </div>
        <div className="pdf-info-divider"></div>
        <div className="pdf-info-right">
          <div className="pdf-info-item">
            <b>Invoice No:</b> {data.invoiceNo} &nbsp;&nbsp;&nbsp;
            <b>Invoice Date:</b> {data.invoiceDate}
          </div>
        </div>
      </div>
    </div>
  );
};

const InvoiceTable = ({ products, emptyRowCount }) => {
  return (
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
          <tr key={index} className="empty-row">
            <td colSpan="6">&nbsp;</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const InvoiceFooter = ({ totalAmount, amountInWords, otherAmount }) => {
  return (
    <div className="pdf-invoice-footer">
      <div className="pdf-amount-in-words">
         <b>Amount Chargeable :</b> {amountInWords}
       </div>
      <div className="pdf-footer-row">
        <div className="pdf-terms">
          <b>Terms and Conditions:</b> <p>Order once taken will not be cancelled</p>
        </div>
        <div className="pdf-total">
          <div><b>SubTotal:</b> {totalAmount}</div>
          <div><b>Other Charges:</b> {otherAmount}</div>
          <div className="pdf-grand-total"><b>Grand Total:</b> {totalAmount}</div>
        </div>
      </div>

      {/* Certification section aligned to LHS only */}
      <div className="pdf-certification-wrapper">
        <div className="pdf-certification">
          <p>
            I/We hereby certify that our registration certificate under the GST Act 2017 is in force
            on the date on which the sale of the goods specified in this Tax Invoice is made by me/us,
            and that the transaction of sale covered by this Tax Invoice has been effected by me/us
            and it shall be accounted for the turnover of sales while filling the return and the due tax.
            If any, payable on the sale has been paid or shall be paid.
          </p>
        </div>
        <div className="pdf-empty-space"></div>
      </div>

      <div className="pdf-signatures">
        <div>Receiver Signature</div>
        <div>Authorized Signature</div>
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
    invoiceDate: "07/02/2025"
  };

  const emptyRowCount = 3;
  const totalAmount = products.reduce((sum, p) => sum + parseFloat(p.amount || 0), 0);
  const amountInWords = `${totalAmount} Rupees Only`;
  const otherAmount = "0.00";

  return (
    <div className="pdf-page">
      <div className="pdf-border-outer">
        <div className="pdf-border-inner">
          <div className="pdf-invoice-content">
            <InvoiceHeader data={invoiceData} />
            <InvoiceTable products={products} emptyRowCount={emptyRowCount} />
            <InvoiceFooter totalAmount={totalAmount} amountInWords={amountInWords} otherAmount={otherAmount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComponent;
