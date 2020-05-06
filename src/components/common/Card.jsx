import React from 'react';
import './Card.scss';
import SocialIcon from '../common/SocialIcon';
import ArrowIcon from '../common/ArrowIcon';
const Card = ({ text, icon, number, gain, altText }) => {
  const displayNumber = (number) => {
    // Convert to a string
    const newNum = number.toString();
    if (newNum > 9999) {
      return newNum.slice(0, 2) + 'k';
    }
    return number;
  };
  return (
    <div className='card flex justify-between flex-wrap w-1/4 p-8 m-4'>
      <div className='flex flex-col justify-between'>
        <p className='mb-4 font-bold text-dgb card__title'>{text}</p>
        <p className='mt-4 text-3xl font-bold card__number'>
          {displayNumber(number)}
        </p>
      </div>
      <div className='flex flex-col justify-between'>
        <SocialIcon src={icon} altText={altText} />

        <ArrowIcon numValue={gain} textAfter='%' />
      </div>
    </div>
  );
};

export default Card;
