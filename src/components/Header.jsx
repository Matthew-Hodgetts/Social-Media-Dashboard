import React from 'react';
import './Header.scss';

import Switch from './common/Switch';
const Header = ({ toggleDarkMode }) => {
  return (
    <header className='header pt-4 pb-20'>
      <div className='container flex justify-between items-center'>
        <div>
          <h1 className='header__title text-4xl font-bold'>
            Social Media Dashboard
          </h1>
          <p className='header__subtitle font-bold'>Total followers: 22,111</p>
        </div>
        <div>
          <Switch onClick={toggleDarkMode} />
        </div>
      </div>
    </header>
  );
};

export default Header;
