import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const PISupplierModal = ({ onClose, onSelectItem }) => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const visibleCount = 15; // Fixed number of visible rows
  const searchInputRef = useRef(null);
  const tableBodyRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    fetch("https://businessguruerp.com/BG_API_NEW/LEDGER_MASTER_Display_API.php", {
      method: "POST",
      body: new URLSearchParams({
        appKeyCodeKey: "1011",
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
      supplierCode: item.Ledger_Code || "-",
      name: item.Comapy_Name,
      supplierName: item.Comapy_Name || "N/A",
      mobileNo: item.Mobile_No || "N/A",
      address: `${item.Addr1 || ""} ${item.Addr2 || ""}`.trim() || "N/A",
      type: item.Type || "SUPPLIER",
    }));
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = items.filter(
      (item) =>
        item.supplierCode.toLowerCase().includes(query) ||
        item.supplierName.toLowerCase().includes(query) ||
        item.mobileNo.toLowerCase().includes(query) ||
        item.address.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
    setHighlightedIndex(0);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => {
        const nextIndex = Math.min(prevIndex + 1, filteredItems.length - 1);
        scrollToRow(nextIndex);
        return nextIndex;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => {
        const nextIndex = Math.max(prevIndex - 1, 0);
        scrollToRow(nextIndex);
        return nextIndex;
      });
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      e.preventDefault();
      handleItemClick(filteredItems[highlightedIndex]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  const scrollToRow = (index) => {
    const tableBody = tableBodyRef.current;
    if (tableBody) {
      const row = tableBody.querySelector(`tr:nth-child(${index + 1})`);
      if (row) {
        const rowTop = row.offsetTop;
        const rowBottom = rowTop + row.offsetHeight;
        const bodyScrollTop = tableBody.scrollTop;
        const bodyHeight = tableBody.clientHeight;

        if (rowTop < bodyScrollTop) {
          tableBody.scrollTop = rowTop;
        } else if (rowBottom > bodyScrollTop + bodyHeight) {
          tableBody.scrollTop = rowBottom - bodyHeight;
        }
      }
    }
  };

  const handleItemClick = (item) => {
    onSelectItem(item);
    onClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredItems, highlightedIndex]);

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

  return (
    <div className="pimodal show d-block" style={{
      position: "fixed",
      top: "57.5%",
      left: "40%",
      transform: "translate(-50%, -50%)",
      zIndex: 1050,
      borderRadius: "8px",
      overflow: "hidden",
      width: "90%",
      maxWidth: "800px",
    }}>
      <div className="pimodal-dialog">
        <table className="table table-bordered tablepi">
          <thead className="pitable-header">
            <tr>
              <th style={{ width: "15%" }}>Code</th>
              <th style={{ width: "40%" }}>Supplier</th>
              <th style={{ width: "15%" }}>Mobile</th>
              <th style={{ width: "15%" }}>Address</th>
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

        <div
          className="tablepi-body"
          ref={tableBodyRef}
          style={{
            overflowY: "auto",
            maxHeight: `${visibleCount * 25}px`, marginTop: "-4px"
          }}
        >
          <table className="table table-striped tablepi">
            <tbody>
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <tr
                    className={highlightedIndex === index ? "table-primary" : ""}
                    key={index}
                    ref={(el) => (rowsRef.current[index] = el)}
                    onClick={() => handleItemClick(item)}
                    
                  >
                    <td style={{ width: "15%" }}>{highlightText(item.supplierCode, searchQuery)}</td>
                    <td style={{ width: "40%" }}>{highlightText(item.supplierName, searchQuery)}</td>
                    <td style={{ width: "15%" }}>{highlightText(item.mobileNo, searchQuery)}</td>
                    <td style={{ width: "15%" }}>{highlightText(item.address, searchQuery)}</td>
                    <td style={{ width: "15%" }}>{item.type}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PISupplierModal;
