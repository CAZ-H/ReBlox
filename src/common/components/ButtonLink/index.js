import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const ButtonLink = ({text, href, round, color, className, ...props}) => {
    const classes = classNames({
        'rb-btn-lnk': true,
        'rb-btn-lnk__round': round,
        'rb-btn-lnk__light': color === 'light',
        'rb-btn-lnk__dark': color === 'dark'
    }, className);

    return (
        <a className={classes} href={href} {...props}>
            {text}
        </a>
    );
};

ButtonLink.propTypes = {
    text: PropTypes.string,
    href: PropTypes.string,
    round: PropTypes.bool,
    color: PropTypes.oneOf(['light', 'dark'])
};

ButtonLink.defaultProps = {
    color: 'light'
};

export default ButtonLink;
