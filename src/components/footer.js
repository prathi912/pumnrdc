import React from 'react';
import './footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import pu_logo from './pu_logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={pu_logo} alt="Parul University" className="pu_logo" />
        </div>
        <div className="footer-links">
          <h4>Quick links</h4>
          <ul>
            <li>Resource Booking</li>
            <li>Cost Calculator</li>
            <li>Who We Are</li>
            <li>What We Do</li>
            <li>Our People & Values</li>
            <li>News & Views</li>
          </ul>
        </div>
        <div className="footer-contact">
           <a href="https://maps.app.goo.gl/Gj1fwqDi9GdETKP59" className="PUMNRDC">
              <h4>
              Parul University Micro-Nano Research & Development Centre
              </h4>
             <p className="address">P. O Limda, Waghodia, Vadodara,<br />Gujarat, India - 391760</p>
          </a>
          <p className="GetinTouch">Get in Touch: <a href="mailto:micronanornd@paruluniversity.ac.in">micronanornd@paruluniversity.ac.in</a></p>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/paruluniversity">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/paruluniversity">
              <FacebookIcon />
            </a>
            <a href="mailto:micronanornd@paruluniversity.ac.in">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
