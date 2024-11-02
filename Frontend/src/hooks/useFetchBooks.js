// src/hooks/useFetchBooks.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../config';

const useFetchBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${API_URL}/inventory/`);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return books;
};

export default useFetchBooks;
