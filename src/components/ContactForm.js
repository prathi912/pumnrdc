import React, { useState } from 'react';
import './ContactForm.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phoneNumber: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.status === 'success') {
        alert('Message sent!');
      } else {
        alert('Error sending message.');
      }
    } catch (error) {
      alert('There was a problem with the request: ' + error.message);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-info">
        <h2>Get in touch</h2>
        <h3>Visit us</h3>
        <p>Come say hello at our office H.Q.</p>
        <p>67 Wisteria Way Croydon South VIC 3136 AU</p>
        <h3>Chat to us</h3>
        <p>Our team is here to help.</p>
        <p><a href="mailto:micronanornd@paruluniversity.ac.in">micronanornd@paruluniversity.ac.in</a></p>
        <div className="social-media">
          <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="name-fields">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        </div>
        <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <PhoneInput className="phone"
          country={'in'}
          value={formData.phoneNumber}
          onChange={handlePhoneChange}
          inputStyle={{
            width: '100%',
            padding: '25px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            marginBottom: '20px'
          }}
        />
        <textarea name="message" placeholder="Tell us what we can help you with" value={formData.message} onChange={handleChange} required></textarea>
        <label>
          <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
          I'd like to receive more information about the company. I understand and agree to the Privacy Policy.
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
