// SkillCard.js
import React from 'react';
import '../Skills/SkillsCard.css'; // Import file CSS

const SkillCard = ({ skillName, level, icon }) => {
  return (
    <div className="skill-card">
      <div className="icon">
        <img src={icon} alt={skillName} />
      </div>
      
      <h3 className="skill-name">{skillName}</h3>
      <div className="level-bar">
        <div className="level-progress" style={{ width: `${level}%`}}>{level}%</div>
      </div>
      {/* <p className="skill-level">{level}</p> */}
    </div>
  );
};

export default SkillCard;