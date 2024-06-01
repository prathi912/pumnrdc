import React from 'react';
import './OurTeam.css'; // Updated import
import { LinkedIn } from '@mui/icons-material';
import AnandJoshi from './AnandJoshi.jpg';
import unnatiJoshi from './TeamPhotograph/UNNATIJOSHI.jpg'; 
import heli_shah from './TeamPhotograph/HELISHAH.jpeg';
import jaivik_pathak from './TeamPhotograph/jaivik_pathak.jpg';
import jalpa_zalawadia from './TeamPhotograph/JALPAZALAWADIA.jpg';
import bhavesh_mewada from './TeamPhotograph/bhavesh_mewada.jpg';
import mahendra_rathore from'./TeamPhotograph/MAHENDRARATHORE.jpeg';
import prashantsingh_tomar from './TeamPhotograph/PRASHANTSINGHTOMAR.jpeg';
import vishalkumar_sandhwar from './TeamPhotograph/WhatsApp Image 2024-01-08 at 5.04.34 PM - VISHAL SANDHWAR.jpeg';
import TARUNKUMAR_UPADHYAY from './TeamPhotograph/TARUNKUMAR_UPADHYAY.jpg';

const teamMembers = [
  {
    name: 'Prof. (Dr.) Anand Joshi',
    title: 'Professor, Mechantronics Engineering Department',
    image: AnandJoshi,
    linkedin: 'https://www.linkedin.com/in/dranandjoshi'
  },
  {
    name: 'Prof. (Dr.) Unnati Joshi',
    title: 'Professor, Mechanical Engineering Department',
    image: unnatiJoshi,
    linkedin: 'https://www.linkedin.com/in/unnati-joshi-a5248722'
  },
  {
    name: 'Dr. Bhaveshkumar Mewada',
    title: 'Director - LAEP & Consultancy Center & Professor, Mechanical Engineering Department',
    image: bhavesh_mewada,
    linkedin: 'https://www.linkedin.com/in/bhavesh-mewada-70263830'
  },
  {
    name: 'Vishal Kumar Sandhwar',
    title: 'HOD & Assistant Professor, Chemical Engineering Department',
    image: vishalkumar_sandhwar,
    linkedin: 'https://www.linkedin.com/in/dr-vishal-kumar-sandhwar-46737397/'
  },
  {
    name: 'Dr. Heli Shah',
    title: 'Professor and Head, Department of Mechatronics / Robotics and Automation Engineering Department',
    image: heli_shah,
    linkedin: 'https://www.linkedin.com/in/dr-heli-amit-shah-7316ba117'
  },
  {
    name: 'Dr. Mahendra Singh Rathod',
    title: 'Associate Professor',
    image: mahendra_rathore,
    linkedin: 'https://linkedin.com/in/mahendra-singh-3b7439175'
  },
  {
    name: 'Jaivik Pathak',
    title: 'Lecturer',
    image: jaivik_pathak,
    linkedin: 'https://www.linkedin.com/in/jaivik-pathak-90aabaa5'
  },
  {
    name: 'Jalpa Zalawadia' ,
    title: 'Assistant Professor',
    image: jalpa_zalawadia,
    linkedin: 'https://www.linkedin.com/in/jalpa-zalawadia-027906108/'
  },
  {
    name: 'Prashantsingh R Tomar',
    title: 'Assistant Professor, Mechatronics Engineering Department',
    image: prashantsingh_tomar,
    linkedin: 'https://www.linkedin.com/in/prashant-tomar-290a3743'
  },
  {
    name: 'Dr. Tarun Kumar Upadhyay',
    title: 'Assistant Professor & Scientist',
    image: TARUNKUMAR_UPADHYAY,
    linkedin: 'https://www.linkedin.com/in/tarun-upadhyay-11318071/'
  }
];

const TeamSection = () => { // Updated component name
  return (
    <div className="team-section-container"> {/* Updated className */}
      <h2>Meet Our Team</h2>
      <div className="team-grid-container"> {/* Updated className */}
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-container"> {/* Updated className */}
            <img src={member.image} alt={member.name} />
            <div className="member-info-container"> {/* Updated className */}
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <div className="social-icons-container"> {/* Updated className */}
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedIn />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection; // Updated export
