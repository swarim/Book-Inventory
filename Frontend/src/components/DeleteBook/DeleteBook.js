// src/components/DeleteBook/DeleteBook.js
import React from 'react';
import axios from 'axios';
import API_URL from '../../config';
import './DeleteBook.css';

const DeleteBook = ({ bookId, onDeleteSuccess }) => {
  const handleDelete = async () => {
    if (!bookId) {
      console.error("Book ID is undefined or null.");
      alert("Error: Unable to delete the book. Book ID is missing.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        // Use bookId in the DELETE request
        await axios.delete(`${API_URL}/inventory/${bookId}/`);
        alert("Book deleted successfully!");
        onDeleteSuccess();
      } catch (error) {
        console.error("Error deleting book:", error);
        alert("Failed to delete the book. Please try again.");
      }
    }
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete
    </button>
  );
};

export default DeleteBook;
