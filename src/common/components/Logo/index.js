import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Logo = ({size, className, ...props}) => {
    const classes = classNames('rb-logo', className);

    return (
        <div className={classes} {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={`${size}px`}
                height={`${size}px`}
            >
                <path d="M8.3,3.7L3.6,21.8l18.1,4.6l4.6-18.1L8.3,3.7z M16.3,17.3l-3.5-0.9l0.9-3.5l3.5,0.9L16.3,17.3z"/>
            </svg>
        </div>
    );
};

Logo.propTypes = {
    size: PropTypes.number
};

Logo.defaultProps = {
    size: 35
};

export default Logo;
