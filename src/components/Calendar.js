// src/components/Calendar.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calendar = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/api/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Equipment Availability Calendar</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            Equipment ID: {booking.equipmentId}, Date: {new Date(booking.bookingDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
