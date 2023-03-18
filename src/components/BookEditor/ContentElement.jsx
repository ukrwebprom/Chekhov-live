import React from 'react';
import PropTypes from 'prop-types'

export const ContentElement = ({text}) => {
    return (
        <div>
            <p>{text}</p>
        </div>
    )
}

ContentElement.propTypes = {
    text: PropTypes.string
}