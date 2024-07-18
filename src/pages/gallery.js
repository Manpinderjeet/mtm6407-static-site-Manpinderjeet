import React from 'react';
import Layout from '../components/layout';
import './gallery.css';

const Gallery = () => (
  <Layout>
    <h1>Gallery</h1>
    <p>Explore a collection of my best photographs.</p>
    <section className="gallery">
      <img src="https://images.pexels.com/photos/277054/pexels-photo-277054.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery image 1" style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
      <img src="https://images.pexels.com/photos/3348363/pexels-photo-3348363.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery image 2" style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
      <img src="https://images.pexels.com/photos/10915959/pexels-photo-10915959.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery image 3" style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
      <img src="https://images.pexels.com/photos/9962639/pexels-photo-9962639.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gallery image 4" style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
    </section>
  </Layout>
);

export default Gallery;
