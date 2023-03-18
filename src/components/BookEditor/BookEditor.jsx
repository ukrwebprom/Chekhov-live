import React from 'react';
import PropTypes from 'prop-types'
import { ContentElement } from './ContentElement';
/* import { useState } from 'react'; */

export const BookEditor = ({content}) => {
/*     const [active, setActive] = useState(null); */



    return (
        <ul>
        {content.map(el => 
        <li key={el.id}><ContentElement text={el.text}/>
        </li>)}
        </ul>
        
    )
}

BookEditor.propTypes = {
    content: PropTypes.array
}