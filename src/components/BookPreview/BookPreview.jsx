import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './book-preview.scss';

export const BookPreview = ({book_data}) => {
    const {cover, title, id} = book_data;

    return (
        <div className="book-preview">
            <div className="book-preview_cover">
                <Link to={`/books/${id}`}><img src={cover} className="book-preview_img" alt={title} /></Link>
            </div>
            <Link to={`/books/${id}`} className="book-preview_title">{title}</Link>
        </div>
    )
}

BookPreview.propTypes = {
    book_data:PropTypes.shape({
        cover:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,
    }).isRequired,
}