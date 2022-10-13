import React, { useEffect, useState } from 'react';
import BookTable from './BookTable';
import DisplayBoard from './DisplayBoard';
import CreateBook from './CreateBook';
import { getAllBooks, createBook } from '../services/BookService';

const Book = () => {
  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBook();
  }, []);

  const getAllBook = () => {
    getAllBooks().then((data) => {
      setBooks(data);
    });
  };

  const handleOnChangeBookForm = (e) => {
    let inputData = { ...bookShelf };
    switch (e.target.name) {
      case 'book':
        inputData.book = e.target.value;
        break;
      case 'category':
        inputData.category = e.target.value;
        break;
      case 'author':
        inputData.author = e.target.value;
        break;
      default:
        break;
    }
    setBookShelf(inputData);
  };

  const handleBookSubmit = () => {
    createBook(bookShelf).then(() => {
      getAllBook();
    });
  };

  return (
    <>
      <CreateBook
        onChangeForm={handleOnChangeBookForm}
        handleSubmit={handleBookSubmit}
      />
      <DisplayBoard numberOfItems={books.length} getAllItem={getAllBook} />
      <BookTable books={books} />
    </>
  );
};

export default Book;
