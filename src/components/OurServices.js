import React from 'react';
import './OurServices.css';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Link } from '@mui/material';
import NanoResearch from './Nano_Research.png';
import MicroTechnology from './Micro_Technology.png';
import InnovationHub from './Innovation_Hub.png';

const services = [
  {
    title: 'Nano Research',
    description: 'Our nanotechnology research is focused on unlocking new possibilities and developing game-changing applications for various industries.',
    image: NanoResearch,
    link: '#'
  },
  {
    title: 'Innovation Hub',
    description: 'Our innovation hub fosters collaboration, creativity, and technological advancement, providing access to cutting-edge resources, mentorship, and training for researchers and businesses.',
    image: InnovationHub,
    link: '#'
  },
  {
    title: 'Micro Technology',
    description: 'Our microtechnology research focuses on developing high-performance microdevices that can drive innovation and meet the demands of various industries.',
    image: MicroTechnology,
    link: '#'
  }
];

const OurServices = () => {
  return (
    <Box className="services-container">
      <Typography variant="h4" component="h2" gutterBottom className="services-title">
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card className="service-card">
              <CardMedia
                component="img"
                className="service-image"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {service.description}
                </Typography>
                <Link href={service.link} underline="hover">
                  Read More
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurServices;
