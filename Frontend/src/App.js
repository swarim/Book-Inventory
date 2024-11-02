// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Welcome from './pages/Welcome/Welcome';
import Inventory from './pages/Inventory/Inventory';
import AddBook from './pages/AddBook/AddBook';
import UpdateBook from './pages/UpdateBook/UpdateBook';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/update/:id" element={<UpdateBook />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
