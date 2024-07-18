import React from 'react';
import Layout from '../components/layout';

const Portfolio = () => (
  <Layout>
    <h1>Portfolio</h1>
    <div className="article-grid">
      <article>
        <h2>Landscape Photography</h2>
        <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Landscape" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
        <p>Explore breathtaking landscapes from around the world...</p>
      </article>
      <article>
        <h2>Portrait Photography</h2>
        <img src="https://images.pexels.com/photos/5091121/pexels-photo-5091121.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Portrait" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
        <p>Discover the art of capturing expressions and emotions...</p>
      </article>
    </div>
  </Layout>
);

export default Portfolio;
