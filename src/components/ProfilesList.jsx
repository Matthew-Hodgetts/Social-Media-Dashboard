import React from 'react';
import Profile from './Profile';

import FacebookIcon from '../images/icon-facebook.svg';
import TwitterIcon from '../images/icon-twitter.svg';
import InstagramIcon from '../images/icon-instagram.svg';
import YoutubeIcon from '../images/icon-youtube.svg';
const ProfilesList = ({ profiles }) => {
  return (
    <div className='profiles-list container flex flex-col sm:flex-row'>
      <Profile
        name='Facebook'
        followers={1987}
        username={'@nathanf'}
        gain={12}
        img={FacebookIcon}
        altText='Facebook Logo'
      />
      <Profile
        name='Twitter'
        followers={1044}
        username={'@nathanf'}
        gain={99}
        img={TwitterIcon}
        altText='Twitter Logo'
      />
      <Profile
        name='Instagram'
        followers={'11k'}
        username={'@realnathanf'}
        gain={1099}
        img={InstagramIcon}
        altText='Instagram Logo'
      />
      <Profile
        name='Youtube'
        followers={8239}
        username={'Nathan F.'}
        gain={-144}
        img={YoutubeIcon}
        altText='Youtube Logo'
      />
    </div>
  );
};

export default ProfilesList;
