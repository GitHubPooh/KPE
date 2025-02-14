import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";
import { bottom } from "@popperjs/core";

const numberToWords = (num) => {
  const a = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  
  if (num < 20) return a[num];
  if (num < 100) return b[Math.floor(num / 10)] + " " + a[num % 10];
  if (num < 1000) return a[Math.floor(num / 100)] + " Hundred " + numberToWords(num % 100);
  if (num < 100000) return numberToWords(Math.floor(num / 1000)) + " Thousand " + numberToWords(num % 1000);
  return "";
};

const InvoiceHeader = ({ data }) => {
  return (
    <div className="pdf-invoice-header">
    <div className="pdf-company-details">
      <div className="pdf-invoice-title">{data.title}</div>
      <div className="pdf-invoice-subtitle">{data.subtitle}</div>
      <div className="pdf-invoice-gstNo">GST NO : {data.GSTNo}</div>
    </div>
      <hr className="pdf-divider-thick" />
      <div className="pdf-invoice-info">
        <div className="pdf-info-left pdf-box-border">
          <b>{data.left.name}</b><br />
          {data.left.address}<br />
          Mobile: {data.left.mobile}<br />
          <div className="pdf-state-info">
            State Name: <span>{data.state.name}</span> &nbsp;&nbsp;&nbsp; State Code: <span>{data.state.code}</span>
          </div>
        </div>
        <div className="pdf-info-divider"></div>
        <div className="pdf-info-right pdf-box-border">
          <div className="pdf-info-item">
            <b>Invoice No:</b> {data.invoiceNo} &nbsp;&nbsp;&nbsp;
            <b>Invoice Date:</b> {data.invoiceDate}
          </div>
        </div>
      </div>
    </div>
  );
};

const InvoiceTable = ({ products, startSerial }) => {
  const totalRows = 20;
  const emptyRows = totalRows - products.length;

  return (
    <table className="pdf-item-table" style={{ marginTop: "-20px", borderBottom: "1px solid" }}>
      <thead>
        <tr>
          <th style={{ width: "5%" }}>SN</th>
          <th style={{ width: "45%" }}>Particulars</th>
          <th style={{ width: "10%" }}>Qty</th>
          <th style={{ width: "10%" }}>Rate</th>
          <th style={{ width: "10%" }}>GST(%)</th>
          <th style={{ width: "20%",textAlign: "right" }}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, i) => (
          <tr key={i}>
            <td>{startSerial + i}</td>
            <td>{product.productName}</td>
            <td>{product.qty}</td>
            <td>{product.rate}</td>
            <td>{product.tax}</td>
            <td style={{ textAlign: "right" }}>{product.amount}</td>
          </tr>
        ))}
        {Array.from({ length: emptyRows }).map((_, i) => (
          <tr key={i + products.length}>
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
  );
};

const InvoiceFooter = ({ totalAmount, amountInWords, otherAmount }) => {
  const roundedTotal = parseFloat(totalAmount).toFixed(2);
  const totalInWords = numberToWords(Math.floor(totalAmount)) + " Rupees Only";
  return (
    <div className="pdf-invoice-footer" style={{ marginTop: "633px" }}>
      <div className="pdf-amount-in-words">
      <b>Amount Chargeable :</b> {totalInWords}<span className="pdf-grand-total-right">
      <b>Grand Total:</b> {roundedTotal}
    </span>
      </div>
      <div className="pdf-footer-row">
        <div className="pdf-terms">
          <b>Terms and Conditions:</b> <p>Order once taken will not be cancelled</p>
        </div>
        <div className="pdf-total">
          <div><b>SubTotal:</b> {roundedTotal}</div>
          <div><b>Other Charges:</b> {otherAmount}</div>
          <div className="pdf-grand-total-wrapper"><b>Grand Total:</b> <div className="pdf-grand-total">{roundedTotal}</div></div>
        </div>
      </div>
      <div className="pdf-certification-wrapper">
  <div className="pdf-certification">
    <p>
      I/We hereby certify that our registration certificate under the GST Act 2017 is in force
      on the date on which the sale of the goods specified in this Tax Invoice is made by me/us,
      and that the transaction of sale covered by this Tax Invoice has been effected by me/us
      and it shall be accounted for the turnover of sales while filling the return and the due tax.
      If any, payable on the sale has been paid or shall be paid.
    </p>
    <div className="pdf-receiver-signature">
      <div>Receiver Signature</div>
    </div>
  </div>

  <div className="pdf-authorized-signature" style={{ textAlign:"right"}}>
    <div>Authorized Signature</div>
  </div>
</div>
    </div>
  );
};

const InvoiceComponent = ({ products }) => {
  const invoiceRef = useRef();

  const downloadPDF = () => {
    const input = invoiceRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
  
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
  
      let position = 0;
  
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
  
      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
  
      pdf.save("invoice.pdf");
    });
  };
  

  const invoiceData = {
    title: "RFM SEEDS AND BIOTECH",
    subtitle: "KIDPL Integrated Textile Park, Shed No 1 RSW-51 Apparel Park Phase 11, Doddballapur, Bangalore",
    GSTNo :"123456789",

    left: {
      name: "SHIV AGRO CENTRE",
      address: "DANGIWADA, AJMER, RAJASTHAN",
      mobile: "xxxxxxxxxxx",
    },
    state: {
      name: "RAJASTHAN",
      code: "08",
    },
    invoiceNo: "1033",
    invoiceDate: "14/02/2025",
  };

  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div>
      <div ref={invoiceRef} className="pdf-invoice-container">
        {Array.from({ length: totalPages }).map((_, pageIndex) => {
          const start = pageIndex * itemsPerPage;
          const end = start + itemsPerPage;
          const currentProducts = products.slice(start, end);
          const isLastPage = pageIndex === totalPages - 1;

          return (
            <div className="pdf-page" key={pageIndex}>
              <div className="pdf-border-outer">
                <div className="pdf-border-inner">
                  <div className="pdf-invoice-content">
                    {pageIndex === 0 && <InvoiceHeader data={invoiceData} />}
                    <InvoiceTable products={currentProducts} startSerial={start + 1} />
                    {isLastPage && (
                      <InvoiceFooter
                        totalAmount={products.reduce((sum, p) => sum + parseFloat(p.amount || 0), 0)}
                        otherAmount="0.00"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-3">
      <button className="btn btn-primary mt-3" onClick={downloadPDF}>
        Download PDF
      </button>
      </div>
    </div>
  );
};

export default InvoiceComponent;