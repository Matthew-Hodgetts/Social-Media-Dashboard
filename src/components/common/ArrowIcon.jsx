import React from 'react';
import './ArrowIcon.scss';
import IconUp from '../../images/icon-up.svg';
import IconDown from '../../images/icon-down.svg';
const ArrowIcon = ({ numValue, textAfter }) => {
  if (numValue >= 0) {
    return (
      <div className='icon icon--positive'>
        <img src={IconUp} alt={numValue} />{' '}
        <span>{numValue + ' ' + textAfter}</span>
      </div>
    );
  }
  const negativeNum = numValue.toString().slice(1);
  return (
    <div className='icon icon--negative'>
      <img src={IconDown} alt={numValue} />{' '}
      <span>{negativeNum + ' ' + textAfter}</span>
    </div>
  );
};

export default ArrowIcon;
