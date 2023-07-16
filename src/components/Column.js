import React from 'react';
import InnerContainer from './InnerContainer';

function Column({ catImage }) {
  return (
    <div className="Column" style={{ border: '1px solid black', padding: '20px', width: '30%' }}>
      <InnerContainer catImage={catImage} />
    </div>
  );
}

export default Column;
