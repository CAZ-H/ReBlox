import React from 'react';
import PropTypes from 'prop-types';

import ButtonLink from 'common/components/ButtonLink';
import Logo from 'common/components/Logo';
import SearchBar from 'common/components/SearchBar';

import './index.scss';

class Header extends React.Component {
    static propTypes = {
        defaultOpenDropMenu: PropTypes.bool
    };

    static defaultProps = {
        defaultOpenDropMenu: false
    };

    constructor(props) {
        super(props);

        this.state = {
            dropMenuOpen: props.defaultOpenDropMenu
        };

        this.handleDropMenuOpen = this.handleDropMenuOpen.bind(this);
    }

    handleDropMenuOpen() {
        this.setState((state, props) => {
            return {
                dropMenuOpen: !state.dropMenuOpen
            }
        })
    };

    render() {
        return (
            <div className='rb-header'>
                <div className='rb-header__links'>
                    <Logo className='rb-header__logo' onClick={this.handleDropMenuOpen}/>
                    <ButtonLink className='rb-header__links-btn' href='https://www.roblox.com/games' text='Games' color='dark'/>
                    <ButtonLink className='rb-header__links-btn'  href='https://www.roblox.com/catalog' text='Catalog' color='dark'/>
                    <ButtonLink className='rb-header__links-btn'  href='https://www.roblox.com/develop' text='Create' color='dark'/>
                </div>
                <div className='rb-header__search'>
                    <SearchBar/>
                </div>
                <div className='rb-header__details'>

                </div>
            </div>
        )
    }
};

export default Header;
