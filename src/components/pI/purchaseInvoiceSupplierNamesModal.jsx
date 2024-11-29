import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PISupplierModal = ({ onClose }) => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetch("https://businessguruerp.com/BG_API_NEW/LEDGER_MASTER_Display_API.php", {
      method: "POST",
      body: new URLSearchParams({
        appKeyCodeKey: "1013",
        firmCodeKey: "3",
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.text())
      .then((html) => {
        const data = parseHTMLResponse(html);
        setItems(data);
        setFilteredItems(data); // Initialize filtered items
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const parseHTMLResponse = (html) => {
    const data = JSON.parse(html);
    return data.map((item) => ({
      name: item.Comapy_Name,
      mobileNo: item.Mobile_No || item.Mobile_Number,
      address: item.Addr1 || item.Addr2 || item.Addr3 || item.Addr4,
      type: item.Type || "SUPPLIER",
    }));
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(e.target.value);
    const filtered = items.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.mobileNo.toLowerCase().includes(query) ||
        item.address.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose(); // Close the modal
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="pimodal show d-block">
      <div className="pimodal-dialog">
        <div className="pimodal-content">
          <div className="pimodal-body">
            <table className="table table-bordered table-striped table-custom">
              <thead className="table-header">
                <tr className="reduced-height">
                  <th>#</th>
                  <th>Supplier Name</th>
                  <th>Mobile No.</th>
                  <th>Address</th>
                  <th>Type</th>
                </tr>
              </thead>
            </table>

            <table className="table table-bordered table-custom">
              <tbody>
                <tr className="reduced-height">
                  <td colSpan="4">
                    <input
                      type="text"
                      className="search-input"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </td>
                  <td>
                    <button className="add-new-btn">Add New (Ctrl+N)</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="table table-bordered table-striped table-custom">
              <tbody>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <tr className="reduced-height" key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.mobileNo}</td>
                      <td>{item.address}</td>
                      <td>{item.type}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PISupplierModal;