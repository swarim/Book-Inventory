import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import API_URL from '../../config';
import './UpdateBook.css';

const UpdateBook = ({ onBookUpdated }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [isbn, setIsbn] = useState('');

  useEffect(() => {
    // Fetch book details to populate the form
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${API_URL}/inventory/${id}/`);
        const book = response.data;
        setTitle(book.title);
        setAuthor(book.author);
        setGenre(book.genre);
        setPublicationDate(book.publication_date);
        setIsbn(book.isbn);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/inventory/${id}/`, {
        title,
        author,
        genre,
        publication_date: publicationDate,
        isbn
      });
      alert("Book updated successfully!");
      // Redirect to the inventory page
      navigate('/inventory/');
    } catch (error) {
      console.error("Error updating book:", error);
  
      // Extract the error message from the API response
      let errorMessage = "Failed to update the book. Please try again.";
      if (error.response && error.response.data) {
        errorMessage += ` ${error.response.data.detail || JSON.stringify(error.response.data)}`;
      }
  
      alert(errorMessage);
    }
  };
  

  return (
    <div className="update-book">
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit} className="update-book-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <input
          type="date"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
