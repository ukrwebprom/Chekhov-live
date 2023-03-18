import { useState } from "react";
import React from "react";
import PropTypes from 'prop-types';
import { MenuBtn } from "../MenuBtn/MenuBtn";
import './book-data.css'

export const BookData = ({book}) => {
    const [opened, setOpened] = useState(false);

    const {cover, title} = book;
    return (
        <div className="book-module">
            <div className="book-module_cover">
                <img src={cover} className="book-module_img" alt={title} />
            </div>
            <div className="book-module_hotline">
                <h2 className="book-module_title">{title}</h2>
                <MenuBtn onClick={setOpened} />
            </div>
        
        {opened ?? <p>Details</p>}
        </div>
    )
}


BookData.propTypes = {
    book:PropTypes.shape({
        cover:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
    }).isRequired,
}