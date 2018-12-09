import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Input = ({className, children, round, color, ...props}) => {
    const classes = classNames({
        'rb-input': true,
        'rb-input__round': round,
        'rb-input__light': color === 'light',
        'rb-input__dark': color === 'dark'
    }, className);

    return (
        <input className={classes} {...props}>
            {children}
        </input>
    );
};

Input.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    round: PropTypes.bool,
    color: PropTypes.oneOf(['light', 'dark'])
};

Input.defaultProps = {
    color: 'light'
};

export default Input;
