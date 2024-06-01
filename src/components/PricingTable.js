// src/components/PricingTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PricingTable = () => {
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        const response = await axios.get('/api/pricing');
        setPricingData(response.data);
      } catch (error) {
        console.error('There was an error fetching the pricing data!', error);
      }
    };

    fetchPricingData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Equipment ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Pros</th>
          <th>Cons</th>
          <th>User Type</th>
        </tr>
      </thead>
      <tbody>
        {pricingData.map((item) => (
          <tr key={item._id}>
            <td>{item.equipmentId}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.pros.join(', ')}</td>
            <td>{item.cons.join(', ')}</td>
            <td>{item.userType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PricingTable;
