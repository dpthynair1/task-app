import React from 'react';
import PropTypes from 'prop-types';

 const Button = ({color, text,onClick}) => {

    return (
        <div>
        <button  onClick = {onClick}style= {{color}}className="btn">{text}</button>
            
        </div>
    )
}

Button.defaultProps = {
    text: 'Add',
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button;