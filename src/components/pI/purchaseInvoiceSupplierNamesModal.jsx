import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PISupplierModal = ({ onClose, onSelectItem }) => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(15);
  const searchInputRef = useRef(null); 

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
    setHighlightedIndex(0);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) => {
        const newIndex = Math.min(prevIndex + 1, filteredItems.length - 1);
        if (newIndex >= visibleCount) {
          setVisibleCount(visibleCount + 1);
        }
        return newIndex;
      });
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) => {
        const newIndex = Math.max(prevIndex - 1, 0);
        if (newIndex < visibleCount - 15) {
          setVisibleCount(visibleCount - 1);
        }
        return newIndex;
      });
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      e.preventDefault();
      handleItemClick(filteredItems[highlightedIndex]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // Focus the search bar when the modal is opened
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredItems, highlightedIndex, visibleCount]);


  const handleItemClick = (item) => {
    onSelectItem(item); // Pass the clicked item back to the parent
    onClose(); // Close the modal
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
            ref={searchInputRef}
          />
          <button className="add-new-btn">Add New (Ctrl+N)</button>
        </div>

        <table className="table table-bordered table-striped tablepi" style={{ marginTop:"-6px" }}>
          <tbody>
          {filteredItems.length > 0 ? (
              filteredItems.slice(visibleCount - 15, visibleCount).map((item, index) => (
                <tr
                  key={index + (visibleCount - 15)}
                  onClick={() => handleItemClick(item)}
                  style={{
                    backgroundColor:
                      index + (visibleCount - 15) === highlightedIndex
                        ? "lightblue"
                        : "transparent",
                    cursor: "pointer",
                  }}
                >
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
