import React from 'react';
import Layout from '../components/layout';

const About = () => (
  <Layout >
    <h1 >About Me</h1>
    <img src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Photographer" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
    <p>Welcome to my photography site! I am a passionate photographer dedicated to capturing the beauty of the world...</p>
    <section>
      <h2>My Journey</h2>
      <p>
        From a young age, I have been fascinated by the art of photography. My journey began when I received my first camera on my 10th birthday. I was immediately captivated by the ability to capture moments and freeze them in time. Over the years, I have explored various styles and techniques, always striving to improve and find my unique voice in the world of photography.
      </p>
      <p>
        I started with landscape photography, mesmerized by the beauty of nature and the changing seasons. As I grew older, my interests expanded to include portrait photography, where I discovered the joy of capturing human emotions and expressions. Each photoshoot became a new adventure, an opportunity to tell a story through my lens.
      </p>
      <p>
        My formal education in photography began in college, where I studied under some of the best mentors in the industry. They taught me the technical aspects of photography, including lighting, composition, and post-processing. However, the most valuable lesson I learned was to always follow my passion and let my creativity guide me.
      </p>
      <p>
        Throughout my career, I have had the privilege of working with numerous clients and on various projects, from weddings and events to commercial shoots and personal projects. Each experience has shaped me as a photographer and enriched my perspective.
      </p>
      <p>
        Today, I continue to pursue my passion for photography with the same enthusiasm and curiosity that I had as a child. I am constantly learning and experimenting, always looking for new ways to capture the beauty of the world around me. Through this website, I hope to share my journey and inspire others to explore their own creativity through photography.
      </p>
    </section>
  </Layout>
);

export default About;
