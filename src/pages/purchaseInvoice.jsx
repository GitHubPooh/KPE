import React, { useRef, useState, useEffect  } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PISupplierModal from "@/components/pI/purchaseInvoiceSupplierNamesModal";

const PurchaseInvoiceHeader = () => {
  
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [supplierDetails, setSupplierDetails] = useState({
    name: "",
    mobileNo: "",
    address: "",
  });
  const [invoiceDate, setInvoiceDate] = useState(""); // State for Invoice Date
  const suppNameRef = useRef(null); // Ref for the "Supp. Name" field

  useEffect(() => {
    // Focus on "Supp. Name" field on component mount
    if (suppNameRef.current) {
      suppNameRef.current.focus();
    }
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).replace(/ /g, "-");
    setInvoiceDate(formattedDate);
  }, []);
  

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "ArrowDown") {
      setShowModal(true); // Open modal on Enter or ArrowDown key
    }
  };
  const handleSelectItem = (item) => {
    setSupplierDetails({
      name: item.name,
      mobileNo: item.mobileNo,
      address: item.address,
    });
    setShowModal(false); // Close modal after selecting an item
  };
  return (
    <>
    
    <div className="header-section">
      <div className="header-content">
        <div className="radio-buttons">
          <label><input type="radio" name="gstOption" value="gst" /> GST</label>
          <label><input type="radio" name="gstOption" value="composition" /> Composition</label>
          <div className="barcode-container">
            <span className="barcode-label">Product Barcode</span>
            <input type="text" className="barcode-input" placeholder="Barcode Shortcut F3" />
          </div>
        </div>
          <div className="invoice-title"> <h3>PURCHASE INVOICE</h3> </div>
          <div className="outstanding-balance"> <h4>Outstanding Balance</h4> </div>
      </div>
    </div>
    
    <div className="purchase-invoice-header">
      <div className="table-container">
        <div className="table-section first-table">
          <table>
            <tbody>
              <tr>
                <td>Purchase Type</td>
                <td>
                  <select>
                    <option>Credit Purchase</option>
                    <option>Cash Purchase</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Supp. Name</td>
                <td>
                <input
                      type="text"
                      value={supplierDetails.name}
                      onKeyDown={handleKeyDown}
                      ref={suppNameRef}
                      className="highlight-input"
                    />
              </td>
              </tr>
              <tr>
                <td>Mobile No.</td>
                <td>
                <input
                  type="text"
                  value={supplierDetails.mobileNo}
                  readOnly
                />
              </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                <input
                  type="text"
                  value={supplierDetails.address}
                  readOnly
                />
              </td>
              </tr>
              <tr>
                <td>GST Type</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>GST No</td>
                <td><input type="text" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-section second-table">
          <div className="scrollable-content">
            <table>
              <tbody>
                <tr>
                  <td>Invoice No</td>
                  <td><input type="text" value="0" readOnly /></td>
                </tr>
                <tr>
                  <td>Invoice Date</td>
                  <td><input type="text" value={invoiceDate} readOnly /></td>
                </tr>
                <tr>
                  <td>Delivery Boy</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td>Delivery Charge</td>
                  <td><input type="text" value="0" /></td>
                </tr>
                <tr>
                  <td>Packing Charge</td>
                  <td><input type="text" value="0" /></td>
                </tr>
                <tr>
                  <td>Veh. No / Transport</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td>Project Name</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td>Project Team</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td>Currency Name</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td>PO No.</td>
                  <td><input type="text"  /></td>
                </tr>
                <tr>
                  <td>SalesMan (Ctrl+L)</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td>SalesMan Com.(0%)</td>
                  <td><input type="text" value="0" /></td>
                </tr>
                <tr>
                  <td>SalesMan Com Amt</td>
                  <td><input type="text" value="0" /></td>
                </tr>
                <tr>
                  <td>Narration</td>
                  <td><input type="text"  /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="table-section third-table">
          <div className="scrollable-content">
            <table>
              <tbody>
                <tr>
                  <td>Other Amount</td>
                  <td><input type="text" value="0" readOnly /></td>
                </tr>
                <tr>
                  <td>GST Amount</td>
                  <td><input type="text" value="0" readOnly /></td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td><input type="text" value="0" readOnly /></td>
                </tr>
                <tr>
                  <td>Discount Amount</td>
                  <td><input type="text" value="0" readOnly /></td>
                </tr>
                <tr>
                  <td>Amount</td>
                  <td><input type="text" value="0" readOnly /></td>
                </tr>
                <tr>
                  <td>Gross Amount</td>
                  <td><input type="text" value="0" readOnly /></td>
                </tr>
                <tr>
                  <td>Cess Amount</td>
                  <td><input type="text" value="0" readOnly /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="table-section amount-box">
          <div className="balance-display">0</div>
        </div>
      </div>
    </div>
    {showModal && (
        <PISupplierModal
          onClose={() => setShowModal(false)}
          onSelectItem={handleSelectItem}
        />
      )}
    </>
  );
};

export default PurchaseInvoiceHeader;