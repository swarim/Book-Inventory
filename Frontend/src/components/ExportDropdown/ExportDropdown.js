import React, { useState } from 'react';
import './ExportDropdown.css';

const ExportDropdown = ({ filteredBooks }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const exportToCSV = () => {
    if (!filteredBooks.length) {
      alert("No data to export!");
      return;
    }
    const headers = "Entry ID,Title,Author,Genre,Publication Date,ISBN\n";
    const rows = filteredBooks.map(book =>
      `${book.entry_id},${book.title},${book.author},${book.genre},${book.publication_date},${book.isbn}`
    ).join("\n");
    const csvContent = headers + rows;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "filtered_books.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToJSON = () => {
    if (!filteredBooks.length) {
      alert("No data to export!");
      return;
    }
    const jsonContent = JSON.stringify(filteredBooks, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "filtered_books.json");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="export-dropdown">
      <button onClick={toggleDropdown} className="export-button">
        Export ▼
      </button>
      {showDropdown && (
        <div className="dropdown-menu">
          <button onClick={exportToCSV} className="dropdown-item">Export to CSV</button>
          <button onClick={exportToJSON} className="dropdown-item">Export to JSON</button>
        </div>
      )}
    </div>
  );
};

export default ExportDropdown;
