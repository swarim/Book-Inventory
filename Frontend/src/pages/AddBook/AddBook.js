// src/pages/AddBook/AddBook.js
import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../../config';
import './AddBook.css';

const AddBook = ({ onBookAdded }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/inventory/`, {
        title,
        author,
        genre,
        publication_date: publicationDate,
        isbn
      });
      alert("Book added successfully!");
      
      // Clear the input fields after a successful addition
      setTitle('');
      setAuthor('');
      setGenre('');
      setPublicationDate('');
      setIsbn('');
    } catch (error) {
      console.error("Error adding book:", error);
  
      // Extract the error message from the API response
      let errorMessage = "Failed to add the book. Please try again.";
      if (error.response && error.response.data) {
        errorMessage += ` ${error.response.data.detail || JSON.stringify(error.response.data)}`;
      }
  
      alert(errorMessage);
    }
  };
  

  return (
    <div className="add-book">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        <input type="date" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} required />
        <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
