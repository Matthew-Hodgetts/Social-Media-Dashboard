import React from 'react';
import './Switch.scss';
const Switch = ({ onClick }) => {
  return (
    <div className='flex items-center font-bold switch__text'>
      <p className='mr-5'>Dark mode</p>
      <label className='switch'>
        <input type='checkbox' onChange={onClick} />
        <span className='slider round'></span>
      </label>
    </div>
  );
};

export default Switch;
