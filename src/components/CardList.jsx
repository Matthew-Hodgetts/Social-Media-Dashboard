import React from 'react';
import Card from './common/Card';

import FacebookIcon from '../images/icon-facebook.svg';
import TwitterIcon from '../images/icon-twitter.svg';
import YoutubeIcon from '../images/icon-youtube.svg';
import InstagramIcon from '../images/icon-instagram.svg';

const CardList = () => {
  return (
    <React.Fragment>
      <div className='cardList container flex justify-between'>
        <Card
          text='Page Views'
          icon={FacebookIcon}
          number={87}
          gain={3}
          altText='Facebook Icon'
        />
        <Card
          text='Likes'
          icon={FacebookIcon}
          number={52}
          gain={-2}
          altText='Facebook Icon'
        />
        <Card
          text='Likes'
          icon={InstagramIcon}
          number={5462}
          gain={2257}
          altText='Instagram Icon'
        />
        <Card
          text='Profile Views'
          icon={InstagramIcon}
          number={52000}
          gain={1375}
          altText='Instagram Icon'
        />
      </div>
      <div className='cardList container flex justify-between'>
        <Card
          text='Retweets'
          icon={TwitterIcon}
          number={117}
          gain={303}
          altText='Twitter Icon'
        />
        <Card
          text='Likes'
          icon={TwitterIcon}
          number={507}
          gain={553}
          altText='Twitter Icon'
        />
        <Card
          text='Likes'
          icon={YoutubeIcon}
          number={107}
          gain={-19}
          altText='Youtube Icon'
        />
        <Card
          text='Total Views'
          icon={YoutubeIcon}
          number={1407}
          gain={-12}
          altText='Youtube Icon'
        />
      </div>
    </React.Fragment>
  );
};

export default CardList;
