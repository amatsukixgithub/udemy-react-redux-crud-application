import React from 'react';

function App() {
  return(
    <React.Fragment>
      <label htmlFor="bar">bbaa</label>
      <input type="text" onChange={() => {console.log("Iam clicked")}} />
    </React.Fragment>
  )
}

export default App;
