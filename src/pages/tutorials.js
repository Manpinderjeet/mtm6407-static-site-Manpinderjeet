import React from 'react';
import Layout from '../components/layout';

const Tutorials = () => (
  <Layout>
    <h1>Tutorials</h1>
    <div className="article-grid">
      <article>
        <h2>Mastering Camera Settings</h2>
        <img src="https://images.pexels.com/photos/355069/pexels-photo-355069.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Camera settings tutorial" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
        <p>Learn how to configure your camera for the best shots...</p>
        <ul>
          <li>
            <h3>1. Understand Exposure</h3>
            <p>Exposure is determined by the ISO, aperture, and shutter speed. Understanding how these three elements interact is key to mastering photography.</p>
            <ul>
              <li><strong>ISO:</strong> Controls the camera's sensitivity to light. Lower ISO is less sensitive and is used in bright conditions; higher ISO is more sensitive and used in low-light conditions.</li>
              <li><strong>Aperture:</strong> The size of the lens opening. A lower f-number means a larger aperture, which lets in more light and creates a shallow depth of field.</li>
              <li><strong>Shutter Speed:</strong> The length of time the camera's shutter is open. Faster shutter speeds freeze motion, while slower speeds can create motion blur.</li>
            </ul>
          </li>
          <li>
            <h3>2. Learn to Use the Histogram</h3>
            <p>The histogram is a graphical representation of the tonal values in your image. It helps you understand the exposure of your image.</p>
            <ul>
              <li><strong>Left Side:</strong> Represents the shadows and black tones.</li>
              <li><strong>Right Side:</strong> Represents the highlights and white tones.</li>
              <li><strong>Middle:</strong> Represents mid-tones. Aim for a balanced histogram for a well-exposed image.</li>
            </ul>
          </li>
          <li>
            <h3>3. Master Autofocus Modes</h3>
            <p>Different autofocus modes can help you capture sharp images in various situations.</p>
            <ul>
              <li><strong>Single-Point AF:</strong> Best for stationary subjects. You select the focus point manually.</li>
              <li><strong>Continuous AF:</strong> Ideal for moving subjects. The camera continually adjusts focus as the subject moves.</li>
              <li><strong>Auto AF:</strong> The camera selects the focus point automatically. Useful for general photography.</li>
            </ul>
          </li>
        </ul>
      </article>
      <article>
        <h2>Post-Processing Tips</h2>
        <img src="https://images.pexels.com/photos/6953990/pexels-photo-6953990.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Post-processing tutorial" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
        <p>Enhance your photos with these post-processing techniques...</p>
        <ul>
          <li>
            <h3>1. Use Non-Destructive Editing</h3>
            <p>Non-destructive editing ensures that your original image remains untouched and you can always revert back to it.</p>
            <ul>
              <li>Use adjustment layers in software like Adobe Photoshop.</li>
              <li>Work with RAW files for maximum flexibility.</li>
              <li>Utilize layers and masks to make selective adjustments.</li>
            </ul>
          </li>
          <li>
            <h3>2. Adjust Exposure and Contrast</h3>
            <p>Balancing exposure and contrast can significantly improve your photo’s overall look.</p>
            <ul>
              <li>Use the exposure slider to brighten or darken your image.</li>
              <li>Increase contrast to add depth to your photo.</li>
              <li>Use curves to fine-tune the tonal range.</li>
            </ul>
          </li>
          <li>
            <h3>3. Sharpen Your Images</h3>
            <p>Sharpening enhances the detail and texture in your photos.</p>
            <ul>
              <li>Use the sharpening tool or filter to enhance edges.</li>
              <li>Be cautious not to over-sharpen, as it can create unwanted artifacts.</li>
              <li>Use selective sharpening for specific areas that need more detail.</li>
            </ul>
          </li>
        </ul>
      </article>
    </div>
  </Layout>
);

export default Tutorials;
