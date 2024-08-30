import React from 'react';
import './team.css'; 
import cp from './assets/cp.jpg'
import vcp1 from './assets/vcp-1.jpg';
import vcp2 from './assets/vcp-2.jpg';
import vcp3 from './assets/vcp-3.jpg';

const pictures = [
    cp,
    vcp1,
    vcp2,
    vcp3
  ];

const Team = () => {

  return (
    <div className="team-grid">
      {pictures.map((url, index) => (
        <div className="team-rectangle" key={index}>
          <img className="team-image" src={url} alt={`Team Member ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Team;
