import React from 'react';
import { useLocation } from 'react-router-dom';

const OutputPage = () => {
  const location = useLocation();
  const { outputImage } = location.state || {}; // Destructure the passed state

  return (
    <div style={{ padding: '20px', border: '2px solid red' }}>
      <h3>Output Image</h3>
      {outputImage ? (
        <img src={outputImage} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} />
      ) : (
        <p>No image uploaded yet</p>
      )}
    </div>
  );
};

export default OutputPage;
