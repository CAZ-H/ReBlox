import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Button = ({text, onClick, round, color, className, ...props}) => {
    const classes = classNames({
        'rb-btn': true,
        'rb-btn__round': round,
        'rb-btn__light': color === 'light',
        'rb-btn__dark': color === 'dark'
    }, className);

    return (
        <button className={classes} onClick={onClick}{...props}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    onclick: PropTypes.func,
    round: PropTypes.bool,
    color: PropTypes.oneOf(['light', 'dark'])
};

Button.defaultProps = {
    color: 'light'
};

export default Button;
