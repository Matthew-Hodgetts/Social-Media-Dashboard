import React from 'react';
import './Profile.scss';
import ArrowIcon from './common/ArrowIcon';
import SocialIcon from './common/SocialIcon';

const Profile = ({ img: src, altText, username, followers, name, gain }) => {
  return (
    <div
      className={`profile flex-1 flex justify-center flex-col items-center p-5 m-4 ${name.toLowerCase()}`}>
      <div className='flex items-center'>
        <SocialIcon src={src} altText={altText} />
        <p className=' ml-3 text-sm'>{username}</p>
      </div>
      <p className='profile__follower-count text-5xl'>{followers}</p>
      <p className='profile__follower-text mb-5'>
        {name === 'youtube' ? 'Subscribers' : 'Followers'}
      </p>

      <ArrowIcon numValue={gain} textAfter='Today' />
    </div>
  );
};

export default Profile;
