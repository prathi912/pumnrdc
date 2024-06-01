  // src/components/Booking.js
  import React, { useState } from 'react';
  import axios from 'axios';

const Booking = () => {
  const [equipmentId, setEquipmentId] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBooking = async () => {
    try {
      const response = await axios.post('/api/bookings', { equipmentId, bookingDate });
      console.log('Booking successful:', response.data);
      setBookingSuccess(true); // Set booking success flag to true
      // Optionally, you can show a success message or redirect to another page
    } catch (error) {
      console.error('Error booking equipment:', error);
    }
  };

  return (
    <div>
      <h1>Equipment Booking</h1>
      {bookingSuccess && <p>Booking successful!</p>} {/* Display flag if booking is successful */}
      <input type="text" placeholder="Equipment ID" value={equipmentId} onChange={(e) => setEquipmentId(e.target.value)} />
      <input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} />
      <button onClick={handleBooking}>Book</button>
    </div>
  );
};

  export default Booking;
