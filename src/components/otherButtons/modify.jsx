import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalComponent = ({ showModal, searchQuery, setSearchQuery, isSearchEditable, onItemSelect }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [items, setItems] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  // Fetch data when modal opens
  useEffect(() => {
    if (showModal) {
      fetch("/data.json")
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error("Error fetching data:", error));
    }
  }, [showModal]);

  // Focus on search input if editable
  useEffect(() => {
    if (showModal && isSearchEditable) {
      document.querySelector(".search-input").focus();
    }
  }, [showModal, isSearchEditable]);

  // Filter items based on search query
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = items.filter(item => {
      const nameWords = item.name.toLowerCase().split(" ");
      const mobileWords = item.mobile.toLowerCase().split(" ");
      return (
        nameWords.some(word => word.startsWith(query)) ||
        mobileWords.some(word => word.startsWith(query))
      );
    });
    setFilteredItems(filtered);
    setHighlightedIndex(-1);
  }, [searchQuery, items]);

  // Keyboard navigation for highlighting rows
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        setHighlightedIndex(prevIndex => Math.min(prevIndex + 1, filteredItems.length - 1));
      } else if (e.key === "ArrowUp") {
        setHighlightedIndex(prevIndex => Math.max(prevIndex - 1, 0));
      } if (e.key === "Enter" && highlightedIndex >= 0) {
        e.preventDefault();
        onItemSelect(filteredItems[highlightedIndex]);
      }
      
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [filteredItems, highlightedIndex, onItemSelect]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Highlight matching text
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

  if (!showModal) return null;

  return (
    <>
    
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile No.</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="modal-body">
          <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
            readOnly={!isSearchEditable}
          />
          <table>
            <tbody>
              {filteredItems.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => onItemSelect(item)}
                  style={{
                    backgroundColor: index === highlightedIndex
                      ? (index % 2 === 0 ? "blue" : "pink")
                      : "transparent",
                    cursor: "pointer",
                  }}
                >
                  <td>{highlightText(item.name, searchQuery)}</td>
                  <td>{highlightText(item.mobile, searchQuery)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default ModalComponent;
