import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onclick, buttonStyle, 
    buttonSize}) => { 
        /*checks the style the button is assigned to, if none it is set to a default style*/
        const checkButtonStyle = STYLES.includes(buttonStyle) ? 
        buttonStyle : STYLES[0]
        /*checks the size the button is assigned to, if none it is set to a default size*/
        const checkButtonSize = SIZES.includes(buttonSize) ? 
        buttonSize : SIZES[0]

        return (
            /*Assigning the sign up button*/
            <Link to='/sign-up' className ='btn-mobile'>
                <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onclick={onclick}
                type={type}
                >
                    {children}
                </button>
            </Link>
        )
    };