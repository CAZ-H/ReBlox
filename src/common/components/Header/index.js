import React from 'react';

import Button from 'common/components/Button';
import Logo from 'common/components/Logo';
import SearchBar from 'common/components/SearchBar';

import './index.scss';

const Header = () => {
    return (
        <div className='rb-header'>
            <div className='rb-header__links'>
                <Logo className='rb-header__logo'/>
                <Button className='rb-header__links-btn' href='https://www.roblox.com/games' text='Games' round/>
                <Button className='rb-header__links-btn'  href='https://www.roblox.com/catalog' text='Catalog' round/>
                <Button className='rb-header__links-btn'  href='https://www.roblox.com/develop' text='Create' round/>
            </div>
            <div className='rb-header__search'>
                <SearchBar/>
            </div>
            <div className='rb-header__details'>

            </div>
        </div>
    );
};

export default Header;
