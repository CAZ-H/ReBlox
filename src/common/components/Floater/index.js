import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

class Floater extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        onUnfocus: PropTypes.func.isRequired
    };

    static defaultProps = {
        onUnfocus: () => {}
    };

    constructor(props) {
        super(props);

        this.paneNode = null;
        this.setRef = this.setRef.bind(this);
        this.checkUnfocus = this.checkUnfocus.bind(this);
    }

    checkUnfocus(event) {
        if (this.paneNode && !this.paneNode.contains(event.target)) {
            this.props.onUnfocus();
        }
    }

    setRef(node) {
        this.paneNode = node;
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.checkUnfocus, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.checkUnfocus, false);
    }

    render() {
        const {className, floaterClassName, children, hidden, onUnfocus, ...props} = this.props;

        const outerClasses = classNames({
            'rb-floater': true
        }, className);

        const innerClasses = classNames({
            'rb-floater__pane': true
        }, floaterClassName);

        return (
            <div className={outerClasses}>
                <div ref={this.setRef} className={innerClasses} hidden={hidden} {...props}>
                    {children}
                </div>
            </div>
        );
    }

}

export default Floater;
