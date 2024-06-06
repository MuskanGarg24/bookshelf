import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

const Bookshelf = () => {
  // State for bookshelf
  const [bookshelf, setBookshelf] = useState([]);

  // Fetch bookshelf from local storage
  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(storedBookshelf);
  }, []);

  // Remove book from bookshelf
  const removeFromBookshelf = (bookKey) => {
    const updatedBookshelf = bookshelf.filter((book) => book.key !== bookKey);
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="py-16 sm:px-20 px-5">
      <div className="md:flex mb-28">
        {bookshelf.length > 0 && (
          <div className="flex justify-center md:block">
            <Link to="/">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:opacity-90">
                Go Back to Book Search
              </button>
            </Link>
          </div>
        )}
        <h1 className="text-3xl text-center mx-auto md:mt-0 mt-9">
          My Bookshelf
        </h1>
      </div>
      {bookshelf.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {bookshelf.map((book, index) => (
            <BookCard
              key={index}
              book={book}
              buttonText="Remove from Bookshelf"
              onClick={() => removeFromBookshelf(book.key)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-2xl mt-20">
          No books in your bookshelf. Go to{" "}
          <Link to="/" className="text-blue-500">
            Search
          </Link>{" "}
          to add books.
        </p>
      )}
    </div>
  );
};

export default Bookshelf;
