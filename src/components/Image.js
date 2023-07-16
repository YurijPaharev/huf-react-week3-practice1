import React from 'react';

function Image({ catImage }) {
  return (
    <div className="Image" style={{ border: '1px solid blue', padding: '20px' }}>
      <img src={catImage} width={200} height={200} alt="A cat" />
    </div>
  );
}

export default Image;
