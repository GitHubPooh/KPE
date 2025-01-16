import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDataContext } from "./DataContext";

const ProductNameList = ({ onClose, onSelectItem }) => {
  const { data, isLoading } = useDataContext(); // Use context to get data
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const visibleCount = 15; // Fixed number of visible rows
  const searchInputRef = useRef(null);
  const tableBodyRef = useRef(null);

  useEffect(() => {
    if (!isLoading) {
      setFilteredItems(data); // Set filtered items when data is loaded
    }
  }, [isLoading, data]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredItems, highlightedIndex]);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = data.filter(
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
  
        // Ensure the row is fully visible
        if (rowTop < bodyScrollTop) {
          tableBody.scrollTop = rowTop; // Scroll up to bring the row into view
        } else if (rowBottom > bodyScrollTop + bodyHeight) {
          tableBody.scrollTop = rowBottom - bodyHeight; // Scroll down to bring the row into view
        }
      }
    }
  };
  

  const handleItemClick = (item) => {
    onSelectItem(item);
    onClose();
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

  return (
    <div className="pimodal show d-block" style={{ marginTop: "-400px" }}>
      <div className="pimodal-dialog">
        <table className="table table-bordered tablepi">
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

        <div
          className="tablepi-body"
          ref={tableBodyRef}
          style={{
            overflowY: "auto",
            maxHeight: `${visibleCount * 25}px`, // Visible row count * row height
            marginTop: "-4px"
          }}
        >
          <table className="table table-striped tablepi">
            <tbody>
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <tr
                    className={highlightedIndex === index ? "table-primary" : ""}
                    key={index}
                    onClick={() => handleItemClick(item)}
                    style={{backgroundColor: "blue"}}
                  >
                    <td style={{ width: "10%" }}>{highlightText(item.productCode, searchQuery)}</td>
                    <td style={{ width: "40%" }}>{highlightText(item.productName, searchQuery)}</td>
                    <td style={{ width: "20%" }}>{highlightText(item.groupName, searchQuery)}</td>
                    <td style={{ width: "15%" }}>{highlightText(item.rate, searchQuery)}</td>
                    <td style={{ width: "14.5%" }}>{highlightText(item.stock, searchQuery)}</td>
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
  );
};

export default ProductNameList;
