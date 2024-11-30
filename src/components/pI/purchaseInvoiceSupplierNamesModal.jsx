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
        setFilteredItems(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);


  const parseHTMLResponse = (html) => {
    const data = JSON.parse(html);
    return data.map((item) => ({
      name: item.Comapy_Name,
      mobileNo: item.Mobile_No || item.Mobile_Number || "—",
      address: item.Addr1 || item.Addr2 || item.Addr3 || item.Addr4 || "",
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

  return (
    <div className="pimodal show d-block">
      <div className="pimodal-dialog">
        <table className="table table-bordered tablepi">
          <thead className="pitable-header" >
            <tr>
              <th style={{ width: "5%" }}>.</th>
              <th style={{ width: "40%" }}>Supplier Name</th>
              <th style={{ width: "15%" }}>Mobile No.</th>
              <th style={{ width: "25%" }}>Address</th>
              <th style={{ width: "15%" }}>Type</th>
            </tr>
          </thead>
        </table>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="add-new-btn">Add New (Ctrl+N)</button>
        </div>

        <table className="table table-bordered table-striped tablepi" style={{ marginTop:"-6px" }}>
          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <tr key={index} >
                  <td style={{ width: "5%" }}>{index + 1}</td>
                  <td style={{ width: "40%" }}>{item.name}</td>
                  <td style={{ width: "15%" }}>{item.mobileNo}</td>
                  <td style={{ width: "25%" }}>{item.address}</td>
                  <td style={{ width: "15%" }}>{item.type}</td>
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
  );
};

export default PISupplierModal;
