// savePricing.js
const mongoose = require('mongoose');
const Pricing = require('./Pricing');

const universityPricing = [
  { equipmentId: "1", name: 'Hyper-15 Table Top Type Integrated Multi-Process CNC Machine Tool', price: 'INR 1000', pros: ['Pros 1', 'Pros 2'], cons: ['Cons 1', 'Cons 2'], userType: 'university' },
  { equipmentId: "2", name: 'RF & DC Thermal &Magnetron Sputtering system', price: 'INR 1200', pros: ['Pros 3', 'Pros 4'], cons: ['Cons 3', 'Cons 4'], userType: 'university' },
  { equipmentId: "3", name: 'X-Ray Diffractometer (PXRD)', price: 'INR 800', pros: ['Pros 5', 'Pros 6'], cons: ['Cons 5', 'Cons 6'], userType: 'university' },
  { equipmentId: "4", name: 'Scanning Electron Microscope (SEM) with EDS  ', price: 'INR 1500', pros: ['Pros 7', 'Pros 8'], cons: ['Cons 7', 'Cons 8'], userType: 'university' },
  { equipmentId: "5", name: 'Scanning Probe Microscope (AFM)', price: 'INR 900', pros: ['Pros 9', 'Pros 10'], cons: ['Cons 9', 'Cons 10'], userType: 'university' },
  { equipmentId: "6", name: 'Piezo-based Multicomponent Dynamometer', price: 'INR 1100', pros: ['Pros 11', 'Pros 12'], cons: ['Cons 11', 'Cons 12'], userType: 'university' }
];

const regularPricing = [
  { equipmentId: "1", name: 'Hyper-15 Table Top Type Integrated Multi-Process CNC Machine Tool', price: 'INR 1500', pros: ['Pros 1', 'Pros 2'], cons: ['Cons 1', 'Cons 2'], userType: 'regular' },
  { equipmentId: "2", name: 'RF & DC Thermal &Magnetron Sputtering system', price: 'INR 2000', pros: ['Pros 3', 'Pros 4'], cons: ['Cons 3', 'Cons 4'], userType: 'regular' },
  { equipmentId: "3", name: 'X-Ray Diffractometer (PXRD)', price: 'INR 1200', pros: ['Pros 5', 'Pros 6'], cons: ['Cons 5', 'Cons 6'], userType: 'regular' },
  { equipmentId: "4", name: 'Scanning Electron Microscope (SEM) with EDS  ', price: 'INR 2500', pros: ['Pros 7', 'Pros 8'], cons: ['Cons 7', 'Cons 8'], userType: 'regular' },
  { equipmentId: "5", name: 'Scanning Probe Microscope (AFM)', price: 'INR 1400', pros: ['Pros 9', 'Pros 10'], cons: ['Cons 9', 'Cons 10'], userType: 'regular' },
  { equipmentId: "6", name: 'Piezo-based Multicomponent Dynamometer', price: 'INR 1800', pros: ['Pros 11', 'Pros 12'], cons: ['Cons 11', 'Cons 12'], userType: 'regular' }
];

const savePricing = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/pricingDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Insert the pricing details
    const result = await Pricing.insertMany([...universityPricing, ...regularPricing]);
    console.log('Pricing details saved successfully:', result);
  } catch (error) {
    console.error('Error saving pricing details:', error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
};

savePricing();
