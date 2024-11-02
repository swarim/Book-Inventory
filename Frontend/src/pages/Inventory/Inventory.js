// src/pages/Inventory/Inventory.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../config';
import BookCard from '../../components/BookCard/BookCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBar from '../../components/FilterBar/FilterBar';
import ExportDropdown from '../../components/ExportDropdown/ExportDropdown';
import './Inventory.css';

const Inventory = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterField, setFilterField] = useState('title');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${API_URL}/inventory/`);
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const filteredBooks = books.filter(book => {
    const value = book[filterField]?.toLowerCase() || '';
    return value.includes(filterValue.toLowerCase()) && book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="inventory">
      <h2>Book Inventory</h2>
      <div className="controls-container">
        <div className="export-buttons">
          <ExportDropdown filteredBooks={filteredBooks} />
        </div>
        <div className="search-filter-bar">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterBar
            filterField={filterField}
            setFilterField={setFilterField}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />
        </div>
      </div>
      <div className="book-cards">
        {filteredBooks.map(book => (
          <BookCard key={book.entry_id} book={book} onDeleteSuccess={fetchBooks} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
