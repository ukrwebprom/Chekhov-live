import { useState } from "react";
import React from "react";
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './menu-btn.css';

export function MenuBtn({onClick}) {
    const [state, setState] = useState(true);

    const toggle = () => {
        setState(e => !e);
        onClick(state)
    }

    return (
        <div className={clsx('burger', !state && 'opened')} onClick={toggle}>
            <div className="burger-part"></div>
            <div className="burger-part"></div>
            <div className="burger-part"></div>
        </div>
    )
}

MenuBtn.propTypes = {
    onClick:PropTypes.func.isRequired,
}