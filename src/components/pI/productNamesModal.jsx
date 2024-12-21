import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductNameList = ({ onClose, onSelectItem }) => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(15);
  const searchInputRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    fetch("https://businessguruerp.com/BG_API_NEW/PRODUCT_STOCK_DISPLAY.php", {
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
      productCode: item.Product_Code || "-",
      productName: item.Product_Name || "N/A",
      groupName: item.Group_Name || "N/A",
      rate: item.Selling_Rate || "0",
      stock: item.Stock || "0",
      tax: item.Tax || "0", // Tax (GST%)
      discount: item.Discount || "0", // Discount
    }));
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = items.filter(
      (item) =>
        item.productCode.toLowerCase().includes(query) ||
        item.productName.toLowerCase().includes(query) ||
        item.groupName.toLowerCase().includes(query) ||
        item.rate.toLowerCase().includes(query) ||
        item.stock.toLowerCase().includes(query)
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
      setHighlightedIndex((prevIndex) => Math.min(prevIndex + 1, filteredItems.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
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
  }, [filteredItems, highlightedIndex]);

  const handleItemClick = (item) => {
    onSelectItem(item);
    onClose();
  };

  return (
    <div className="pimodal show d-block" style={{ marginTop: "-400px" }}>
      <div className="pimodal-dialog" >
        <table className="table table-bordered tablepi" >
          <thead className="pitable-header">
            <tr>
              <th style={{ width: "10%" }}>Code</th>
              <th style={{ width: "40%" }}>Product</th>
              <th style={{ width: "20%" }}>Group</th>
              <th style={{ width: "15%" }}>Rate</th>
              <th style={{ width: "15%" }}>Stock</th>
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
                <tr
                  className={highlightedIndex === index ? "table-primary" : ""}
                  key={index}
                  onClick={() => handleItemClick(item)}
                >
                  <td style={{ width: "10%" }}>{highlightText(item.productCode, searchQuery)}</td>
                  <td style={{ width: "40%" }}>{highlightText(item.productName, searchQuery)}</td>
                  <td style={{ width: "20%" }}>{highlightText(item.groupName, searchQuery)}</td>
                  <td style={{ width: "15%" }}>{highlightText(item.rate, searchQuery)}</td>
                  <td style={{ width: "15%" }}>{highlightText(item.stock, searchQuery)}</td>
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

export default ProductNameList;
