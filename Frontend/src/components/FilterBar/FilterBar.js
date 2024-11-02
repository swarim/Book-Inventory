// src/components/FilterBar/FilterBar.js
import React from 'react';
import './FilterBar.css';

const FilterBar = ({ filterField, setFilterField, filterValue, setFilterValue }) => {
  return (
    <div className="filter-section">
      <label>Filter By:</label>
      <select
        value={filterField}
        onChange={(e) => setFilterField(e.target.value)}
        className="filter-dropdown"
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="genre">Genre</option>
        <option value="isbn">ISBN</option>
      </select>
      <input
        type="text"
        placeholder={`Filter ${filterField}...`}
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        className="filter-input"
      />
    </div>
  );
};

export default FilterBar;
