import React from 'react';
import Column from './components/Column';

const catImageOne = 'https://cataas.com/cat';
const catImageTwo = 'https://cataas.com/cat/gif';
const catImageThree = 'https://cataas.com/cat/says/meow';

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <Column catImage={catImageOne} />
      <Column catImage={catImageTwo} />
      <Column catImage={catImageThree} />
    </div>
  );
}

export default App;
