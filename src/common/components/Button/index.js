import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Button = ({text, onClick, href, round, color, className, ...props}) => {
    const classes = classNames({
        'rb-btn': true,
        'rb-btn__round': round,
        'rb-btn__light': color === 'light',
        'rb-btn__dark': color === 'dark'
    }, className);

    if (href) {
        return (
            <a className={classes} href={href} {...props}>
                {text}
            </a>
        );
    } else {
        return (
            <button className={classes} onClick={onClick}{...props}>
                {text}
            </button>
        );
    }
};

Button.propTypes = {
    text: PropTypes.string,
    onclick: PropTypes.func,
    href: PropTypes.string,
    round: PropTypes.bool,
    color: PropTypes.oneOf(['light', 'dark'])
};

Button.defaultProps = {
    color: 'light'
};

export default Button;
