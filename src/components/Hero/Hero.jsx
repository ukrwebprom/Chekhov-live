import React from 'react';
import './hero.scss';
import che from '../../images/che.png';

export const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className='hero-title'>Chekhov is typing...</h1>
                <img src={che} />
            </div>
            
        </div>
    )
}
