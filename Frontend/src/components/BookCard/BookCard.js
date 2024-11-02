// src/components/BookCard/BookCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import DeleteBook from '../DeleteBook/DeleteBook';
import './BookCard.css';

const BookCard = ({ book, onDeleteSuccess }) => {
  // Placeholder image URL
  const placeholderImage = "https://img.freepik.com/free-vector/atomic-love-wattpad-book-cover_23-2149231553.jpg?t=st=1730494941~exp=1730498541~hmac=8da7c1ae4ad51589e7b9bdc24ce0175b79c49242b09229edf058a857bca0c836&w=740";

  return (
    <div className="book-card">
      <img src={placeholderImage} alt={book.title} className="book-image" />
      <div className="book-details">
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Genre:</strong> {book.genre}</p>
        <p><strong>Publication Date:</strong> {book.publication_date}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>
      </div>
      <div className="card-actions">
        <Link to={`/update/${book.entry_id}`} className="edit-button">Edit</Link>
        <DeleteBook bookId={book.entry_id} onDeleteSuccess={onDeleteSuccess} />
      </div>
    </div>
  );
};

export default BookCard;
