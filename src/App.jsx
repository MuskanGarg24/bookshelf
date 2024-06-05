import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookSearch from "./pages/BookSearch";
import Bookshelf from "./pages/Bookshelf";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookSearch />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
      </Routes>
    </Router>
  );
};

export default App;
