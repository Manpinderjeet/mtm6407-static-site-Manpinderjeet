import React from 'react';
import Layout from '../components/layout';

const Home = () => (
  <Layout>
    <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h1>Welcome to My Photography Site</h1>
      <p style={{ textAlign: 'center', marginLeft: '14.2rem' }}>Discover stunning photography and tutorials to help you improve your skills.</p>
      <img src="https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Beautiful scenery" style={{ width: '500px', height: 'auto', maxWidth: '800px', borderRadius: '8px', margin: '2rem auto' }} />
    </section>
    <section>
      <h2>Featured Portfolio</h2>
      <div className="article-grid">
        <article>
          <h3>Landscape Photography</h3>
          <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Landscape" />
          <p>Explore breathtaking landscapes from around the world...</p>
        </article>
        <article>
          <h3>Portrait Photography</h3>
          <img src="https://images.pexels.com/photos/5091121/pexels-photo-5091121.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Portrait" />
          <p>Discover the art of capturing expressions and emotions...</p>
        </article>
      </div>
    </section>
    <section>
      <h2>Latest Tutorials</h2>
      <div className="article-grid">
        <article>
          <h3>Mastering Camera Settings</h3>
          <img src="https://images.pexels.com/photos/355069/pexels-photo-355069.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Camera settings tutorial" />
          <p>Learn how to configure your camera for the best shots...</p>
        </article>
        <article>
          <h3>Post-Processing Tips</h3>
          <img src="https://images.pexels.com/photos/6953990/pexels-photo-6953990.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Post-processing tutorial" />
          <p>Enhance your photos with these post-processing techniques...</p>
        </article>
      </div>
    </section>
  </Layout>
);

export default Home;
