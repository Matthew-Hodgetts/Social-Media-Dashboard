import React from 'react';
import './Icon.scss';
import IconUp from '../../images/icon-up.svg';
import IconDown from '../../images/icon-down.svg';
const Icon = ({ number, textAfter }) => {
  if (number >= 0) {
    return (
      <div className='icon icon--positive'>
        <img src={IconUp} alt={number} />{' '}
        <span>{number + ' ' + textAfter}</span>
      </div>
    );
  }
  return (
    <div className='icon icon--negative'>
      <img src={IconDown} alt={number} />{' '}
      <span>{number + ' ' + textAfter}</span>
    </div>
  );
};

export default Icon;
