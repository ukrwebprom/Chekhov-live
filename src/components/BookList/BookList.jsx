import React from "react";
import { BookPreview } from "../BookPreview/BookPreview";
import PropTypes from 'prop-types';
import "./booklist.scss";



export const BookList = ({books}) => {

  return (
    <>
      
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-list-item">
            <BookPreview book_data={book} />
          </li>
        ))}
      </ul>
    </>
  );
};

BookList.propTypes = {
  books:PropTypes.array.isRequired
}