import React from 'react';
import './Profile.scss';
import Icon from './common/Icon';

import Facebook from '../images/icon-facebook.svg';
import Twitter from '../images/icon-twitter.svg';
import Instagram from '../images/icon-instagram.svg';
import Youtube from '../images/icon-youtube.svg';

const determineIcon = (name) => {
  let profileName = name.toLowerCase();
  if (profileName === 'youtube') {
    return Youtube;
  }
  if (profileName === 'twitter') {
    return Twitter;
  }
  if (profileName === 'instagram') {
    return Instagram;
  }
  if (profileName === 'facebook') {
    return Facebook;
  }
};
const Profile = ({ data: profile }) => {
  return (
    <div
      className={`profile flex-1 flex justify-center flex-col items-center p-5 m-4 ${profile.name.toLowerCase()}`}>
      <div className='flex items-center'>
        <img
          classname='profile__social-icon'
          src={determineIcon(profile.name)}
          alt={`${profile.name} icon`}
        />
        <p className=' ml-3 text-sm'>{profile.username}</p>
      </div>
      <p className='profile__follower-count text-5xl'>{profile.followers}</p>
      <p className='profile__follower-text mb-5'>
        {profile.name.toLowerCase() === 'youtube' ? 'Subscribers' : 'Followers'}
      </p>

      <Icon number={profile.gain} textAfter='Today' />
    </div>
  );
};

export default Profile;
