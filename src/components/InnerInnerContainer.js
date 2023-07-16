import React from 'react';
import Image from './Image';

function InnerInnerContainer({ catImage }) {
  return (
    <div className="InnerInnerContainer" style={{ border: '1px solid green', padding: '20px' }}>
      <Image catImage={catImage} />
    </div>
  );
}

export default InnerInnerContainer;
