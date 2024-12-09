import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PISupplierModal = ({ onClose, onSelectItem }) => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(15);
  const searchInputRef = useRef(null);
  const rowsRef = useRef([]); 

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
      ledgerCode: item.Ledger_Code || "-",
      name: item.Comapy_Name,
      mobileNo: item.Mobile_No || item.Mobile_Number || "—",
      address: item.Addr1 || item.Addr2 || item.Addr3 || item.Addr4 || "",
      type: item.Type || "SUPPLIER",
    }));
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = items.filter(
      (item) =>
        item.ledgerCode.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.mobileNo.toLowerCase().includes(query) ||
        item.address.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
    setHighlightedIndex(0); 
  };

  const highlightText = (text, query) => {
    const startIndex = text.toLowerCase().indexOf(query.toLowerCase());
    if (startIndex === -1) return text;
    const endIndex = startIndex + query.length;
    return (
      <>
        {text.slice(0, startIndex)}
        <span className="highlight">{text.slice(startIndex, endIndex)}</span>
        {text.slice(endIndex)}
      </>
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => {
        const newIndex = Math.min(prevIndex + 1, filteredItems.length - 1);
        if (newIndex >= visibleCount) {
          setVisibleCount((prevCount) => prevCount + 1);
        }
        return newIndex;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => {
        const newIndex = Math.max(prevIndex - 1, 0);
        if (newIndex < visibleCount - 15) {
          setVisibleCount((prevCount) => prevCount - 1);
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
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredItems, highlightedIndex, visibleCount]);

  useEffect(() => {
    if (highlightedIndex >= 0 && rowsRef.current[highlightedIndex]) {
      rowsRef.current[highlightedIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [highlightedIndex]);

  const handleItemClick = (item) => {
    onSelectItem(item); 
    onClose();
  };

  return (
    <div className="pimodal show d-block">
      <div className="pimodal-dialog">
        <table className="table table-bordered tablepi">
          <thead className="pitable-header">
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

        <table className="table table-striped tablepi" style={{ marginTop: "-6px" }}>
          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.slice(0, visibleCount).map((item, index) => (
                <tr className={highlightedIndex === index ? "table-primary" : ""}
                  key={index}
                  ref={(el) => (rowsRef.current[index] = el)} 
                  onClick={() => handleItemClick(item)}
                >
                  <td style={{ width: "5%" }}>{highlightText(item.ledgerCode, searchQuery)}</td>
                  <td style={{ width: "40%" }}>{highlightText(item.name, searchQuery)}</td>
                  <td style={{ width: "15%" }}>{highlightText(item.mobileNo, searchQuery)}</td>
                  <td style={{ width: "25%" }}>{highlightText(item.address, searchQuery)}</td>
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
