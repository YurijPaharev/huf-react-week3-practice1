import React from 'react';
import InnerInnerContainer from './InnerInnerContainer';

function InnerContainer({ catImage }) {
  return (
    <div className="InnerContainer" style={{ border: '1px solid red', padding: '20px' }}>
      <InnerInnerContainer catImage={catImage} />
    </div>
  );
}

export default InnerContainer;
