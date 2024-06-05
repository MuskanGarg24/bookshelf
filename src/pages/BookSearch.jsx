import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

const BookSearch = () => {
  // States for search query, search results, loading state, and success message
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch books on initial render
  useEffect(() => {
    fetchBooks("tell me");
  }, []);

  // Fetch books from Open Library API
  const fetchBooks = async (searchQuery) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`
      );
      setResults(response.data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search input
  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    if (searchQuery) {
      fetchBooks(searchQuery);
    } else {
      setResults([]);
    }
  };

  // Add book to bookshelf
  const addToBookshelf = (book) => {
    let bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    if (bookshelf.some((b) => b.key === book.key)) {
      setSuccessMessage(`${book.title} is already added to your bookshelf.`);
      setTimeout(() => setSuccessMessage(""), 3000);
      return;
    }
    setSuccessMessage(`${book.title} is added to your bookshelf.`);
    setTimeout(() => setSuccessMessage(""), 3000);
    bookshelf.push(book);
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
  };

  return (
    <div className="py-14 sm:px-20 px-5">
      <h1 className="text-3xl text-center">Search for Books</h1>
      <div className="md:flex justify-center md:space-x-5 my-14">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded w-full md:w-[30vw]
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Type a book name..."
        />
        <div className="flex justify-center md:block">
          <Link to="/bookshelf">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:opacity-90 mt-5 md:mt-0">
              Go to My Bookshelf
            </button>
          </Link>
        </div>
      </div>
      {successMessage && (
        <p className="text-green-500 text-center font-semibold mb-12 text-lg">
          {successMessage}
        </p>
      )}
      {loading ? (
        <p className="text-2xl text-center font-semibold">
          Searching for books...🔍
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {results.map((book) => (
            <BookCard
              key={book.key}
              book={book}
              buttonText="Add to My Bookshelf"
              buttonColor="blue"
              onClick={() => addToBookshelf(book)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookSearch;
