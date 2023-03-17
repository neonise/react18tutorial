import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    image: "./images/book.jpg",
    author: "James Cameron",
    title: "Atomic Hobits",
    id: 1,
  },
  {
    image: "./images/book.jpg",
    author: "Nik Red",
    title: "Read Me!",
    id: 2,
  },
  {
    image: "./images/book.jpg",
    author: "Barbara De Anglis",
    title: "My Travels",
    id: 3,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const book = props.book;
  return (
    <article className="book">
      <img src={book.image} />
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
