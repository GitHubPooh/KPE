import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalComponent = ({ showModal, searchQuery, setSearchQuery, isSearchEditable }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [items, setItems] = useState([]);

  // Fetch data from JSON file or API endpoint
  useEffect(() => {
    if (showModal) {
      fetch("/data.json") // Adjust the path if needed
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error("Error fetching data:", error));
    }
  }, [showModal]);

  useEffect(() => {
    if (showModal && isSearchEditable) {
      document.querySelector(".search-input").focus();
    }
  }, [showModal, isSearchEditable]);

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
  }, [searchQuery, items]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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

  if (!showModal) return null;

  return (
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
                <tr key={index}>
                  <td>{highlightText(item.name, searchQuery)}</td>
                  <td>{highlightText(item.mobile, searchQuery)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
