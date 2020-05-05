import React from 'react';
import Profile from './Profile';
const ProfilesList = ({ profiles }) => {
  return (
    <div className='profiles-list container flex flex-col sm:flex-row'>
      {profiles.map((profile) => {
        return <Profile data={profile} />;
      })}
    </div>
  );
};

export default ProfilesList;
