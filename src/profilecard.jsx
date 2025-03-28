//profile.jsx

import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, email, address, achievements, image }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-img" />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-email">{email}</p>
        <p className="profile-address">{address}</p>
        <h3 className="achievements-heading">Achievements</h3>
        <ul className="achievements-list">
          {achievements.map((item, index) => (
            <li key={index} className="achievement-item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
