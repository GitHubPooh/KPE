import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const PISuppModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [items, setItems] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  // Fetch data from the API
  useEffect(() => {
    if (showModal) {
      fetch("https://businessguruerp.com/BG_API_NEW/LEDGER_MASTER_Display_API.php", {
        method: "POST",
        body: new URLSearchParams({
          appKeyCodeKey: "1013",
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => response.json()) // Parse the JSON response
        .then((data) => {
          const parsedData = data.map((item) => ({
            Ledger_Code: item.Ledger_Code,
            Supplier_Name: item.Company_Name,
            Mobile_No: item.Mobile_No || "N/A",
            Address: item.Addr1 || "N/A",
            Type: item.Type || "Supplier",
          }));
          setItems(parsedData);
          setFilteredItems(parsedData); // Initialize filteredItems
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [showModal]);

  // Filter the items based on the search query
  useEffect(() => {
    const filtered = items.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredItems(filtered);
    setHighlightedIndex(0); // Reset highlighted index on new search
  }, [searchQuery, items]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) => Math.min(prevIndex + 1, filteredItems.length - 1));
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [showModal, filteredItems]);

  return (
    showModal && (
      <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Supplier Modal</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              {/* Search Field */}
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {/* Table */}
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Ledger Code</th>
                    <th>Supplier Name</th>
                    <th>Mobile No</th>
                    <th>Address</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                      <tr
                        key={item.Ledger_Code}
                        className={highlightedIndex === index ? "table-primary" : ""}
                      >
                        <td>{item.Ledger_Code}</td>
                        <td>{item.Supplier_Name}</td>
                        <td>{item.Mobile_No}</td>
                        <td>{item.Address}</td>
                        <td>{item.Type}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No data found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PISuppModal;
