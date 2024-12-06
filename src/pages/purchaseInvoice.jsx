import React, { useRef, useState, useEffect } from "react";
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
  const [fieldValues, setFieldValues] = useState({});
  const suppNameRef = useRef(null); // Ref for the "Supp. Name" field
  const fieldsRefs = useRef([]);
  const fieldOrder = [
    "Invoice No",
    "Invoice Date",
    "Delivery Boy",
    "Delivery Charge",
    "Packing Charge",
    "Veh. No / Transport",
    "Project Name",
    "Project Team",
    "Currency Name",
    "PO No.",
    "SalesMan (Ctrl+L)",
    "SalesMan Com.(0%)",
    "SalesMan Com Amt",
    "Narration",
  ];

  useEffect(() => {
    // Initialize default values for fields
    const initialValues = fieldOrder.reduce((acc, field) => {
      acc[field] = field === "Invoice Date" ? "" : "0";
      return acc;
    }, {});
    setFieldValues(initialValues);

    // Focus on "Supp. Name" field on component mount
    if (suppNameRef.current) {
      suppNameRef.current.focus();
    }

    // Set default date for "Invoice Date"
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).replace(/ /g, "-");
    setInvoiceDate(formattedDate);
  }, []);

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === "ArrowDown") {
      event.preventDefault();
      if (index < fieldsRefs.current.length - 1) {
        fieldsRefs.current[index + 1]?.focus(); // Focus on the next field
      }
    } else if (event.key === "ArrowUp" && index > 0) {
      event.preventDefault();
      fieldsRefs.current[index - 1]?.focus(); // Focus on the previous field
    }
  };

  const handleFieldChange = (field, value) => {
    setFieldValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectItem = (item) => {
    setSupplierDetails({
      name: item.name,
      mobileNo: item.mobileNo,
      address: item.address,
    });

    setShowModal(false); // Close modal
    fieldsRefs.current[0]?.focus(); // Focus on the first field (Invoice No) after modal selection
  };

  return (
    <>
      <div className="header-section">
        <div className="header-content">
          <div className="radio-buttons">
            <label>
              <input type="radio" name="gstOption" value="gst" /> GST
            </label>
            <label>
              <input type="radio" name="gstOption" value="composition" /> Composition
            </label>
            <div className="barcode-container">
              <span className="barcode-label">Product Barcode</span>
              <input
                type="text"
                className="barcode-input"
                placeholder="Barcode Shortcut F3"
              />
            </div>
          </div>
          <div className="invoice-title">
            <h3>PURCHASE INVOICE</h3>
          </div>
          <div className="outstanding-balance">
            <h4>Outstanding Balance</h4>
          </div>
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
                      ref={suppNameRef}
                      onChange={(e) =>
                        setSupplierDetails({
                          ...supplierDetails,
                          name: e.target.value,
                        })
                      }
                      onKeyDown={(e) => e.key === "Enter" && setShowModal(true)}
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
                      onChange={(e) =>
                        setSupplierDetails({
                          ...supplierDetails,
                          mobileNo: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                  <input
                      type="text"
                      value={supplierDetails.address}
                      onChange={(e) =>
                        setSupplierDetails({
                          ...supplierDetails,
                          address: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>GST Type</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>GST No</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-section second-table">
            <div className="scrollable-content">
            <table>
                <tbody>
                  {fieldOrder.map((field, index) => (
                    <tr key={field}>
                      <td>{field}</td>
                      <td>
                        <input
                          type="text"
                          ref={(el) => (fieldsRefs.current[index] = el)}
                          value={field === "Invoice Date" ? invoiceDate : fieldValues[field]}
                          onChange={(e) =>
                            field === "Invoice Date"
                              ? setInvoiceDate(e.target.value)
                              : handleFieldChange(field, e.target.value)
                          }
                          onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                      </td>
                    </tr>
                  ))}
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
                    <td>
                      <input type="text" value="0" readOnly />
                    </td>
                  </tr>
                  <tr>
                    <td>GST Amount</td>
                    <td>
                      <input type="text" value="0" readOnly />
                    </td>
                  </tr>
                  <tr>
                    <td>Discount</td>
                    <td>
                      <input type="text" value="0" readOnly />
                    </td>
                  </tr>
                  <tr>
                    <td>Discount Amount</td>
                    <td>
                      <input type="text" value="0" readOnly />
                    </td>
                  </tr>
                  <tr>
                    <td>Amount</td>
                    <td>
                      <input type="text" value="0" readOnly />
                    </td>
                  </tr>
                  <tr>
                    <td>Gross Amount</td>
                    <td>
                      <input type="text" value="0" readOnly />
                    </td>
                  </tr>
                  <tr>
                    <td>Cess Amount</td>
                    <td>
                      <input type="text" value="0" readOnly />
                    </td>
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
