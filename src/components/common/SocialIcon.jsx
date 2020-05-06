import React from 'react';

const SocialIcon = ({ src, altText }) => {
  return (
    <img src={src} alt={altText} style={{ height: 'auto', width: '30px' }} />
  );
};

export default SocialIcon;
