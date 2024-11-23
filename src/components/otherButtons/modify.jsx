import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalComponent = ({ showModal, searchQuery, setSearchQuery, isSearchEditable, onItemSelect }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [items, setItems] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(22); 

  useEffect(() => {
    if (showModal) {
      fetch("https://businessguruerp.com/BG_API_NEW/LEDGER_MASTER_Display_API.php", {
        method: 'POST',
        body: new URLSearchParams({
          appKeyCodeKey: "1013",
          firmCodeKey: "3"
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
        .then(response => response.text())
        .then(html => {
          const tempData = parseHTMLResponse(html);
          setItems(tempData);
        })
        .catch(error => console.error("Error fetching data:", error));
    }
  }, [showModal]);

  const parseHTMLResponse = (html) => {
    const data = JSON.parse(html);
    return data.map(item => ({
      name: item.Comapy_Name,
      Mobile_No: item.Mobile_No || item.Mobile_Number,
      Addr1: item.Addr1 || item.Addr2 || item.Addr3 || item.Addr4,
      gst: item.gst, 
      mailID: item.mailID,
    }));
  };

  useEffect(() => {
    if (showModal && isSearchEditable) {
      document.querySelector(".search-input").focus();
    }
  }, [showModal, isSearchEditable]);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = items.filter(item => {
      const nameWords = item.name.toLowerCase().split(" ");
      const mobileWords = item.Mobile_No.toLowerCase().split(" ");
      return (
        nameWords.some(word => word.startsWith(query)) ||
        mobileWords.some(word => word.startsWith(query))
      );
    });
    setFilteredItems(filtered);
    setHighlightedIndex(0);
  }, [searchQuery, items]);

  useEffect(() => {
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
          if (newIndex < visibleCount - 22) {
            setVisibleCount(visibleCount - 1); 
          }
          return newIndex;
        });
      } else if (e.key === "Enter" && highlightedIndex >= 0) {
        e.preventDefault();
        onItemSelect(filteredItems[highlightedIndex]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [filteredItems, highlightedIndex, onItemSelect, visibleCount]);

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
              {filteredItems.slice(visibleCount - 22, visibleCount).map((item, index) => (
                <tr
                  key={index + (visibleCount - 22)}
                  onClick={() => onItemSelect(item)}
                  style={{
                    backgroundColor:
                      index + (visibleCount - 22) === highlightedIndex
                        ? (index % 2 === 0 ? "blue" : "pink")
                        : "transparent",
                    cursor: "pointer",
                  }}
                >
                  <td>{highlightText(item.name, searchQuery)}</td>
                  <td>{highlightText(item.Mobile_No, searchQuery)}</td>
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
