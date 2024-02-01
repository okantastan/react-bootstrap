import React from 'react';

function ExampleCarouselImage({ text, imageUrl }) {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={imageUrl}
        alt={text}
        style={{ width: '100%', height: 'auto' }}
      />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px'
      }}>
        {text}
      </div>
    </div>
  );
}

export default ExampleCarouselImage;
