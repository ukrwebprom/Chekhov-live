import React from 'react';
import PropTypes from 'prop-types';
import './title-description.scss';

export const TitleDescription = ({title, descr}) => {
    return(
        <div className="td_container">
            <h2 className="td-title">{title}</h2>
            <p className="td-descr">{descr}</p>
        </div>
    )
}

TitleDescription.propTypes = {
    title:PropTypes.string,
    descr:PropTypes.string,
}