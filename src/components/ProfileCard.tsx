import React from 'react';
import './ProfileCard.css';

const ProfileCard: React.FC = () => {
  return (
    <div className="profile-card">
      <div className="profile-content">
        <h1>Noah Noel Arredondo Torres</h1>
        <div className="profile-details">
          <p>Software Developer</p>
          <p>Web Development Enthusiast</p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
