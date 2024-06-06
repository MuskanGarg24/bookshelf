import React from "react";

const BookCard = ({ book, buttonText, onClick }) => {
  return (
    <div className="p-4 border rounded-xl cursor-pointer hover:shadow-lg transition duration-300 ease-in-out">
      <h2 className="text-xl">{book.title}</h2>
      <p className="my-2">{book.author_name?.join(", ")}</p>
      <p className="my-2">Edition Count: {book.edition_count}</p>
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:opacity-90"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default BookCard;
