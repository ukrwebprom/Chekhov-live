import React from 'react';
import PropTypes from 'prop-types';
import './user.css';
import { myUser } from '../UserProvider/UserProvider';

export const User = () => {
    const {isLogged, userName, logIn} = myUser();
    
    return(
        <div className="user-container">
            {isLogged ? <p>{userName[0]}</p> : <button onClick={logIn}>Log in</button>}
{/*         {ava ? <img src={ava} className="user-image" /> : <p>{username[0]}</p>} */}
        </div>
    ) 
}

User.propTypes = {
    userData:PropTypes.shape({
        username:PropTypes.string,
        ava:PropTypes.string,
    })
}