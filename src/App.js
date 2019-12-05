import React, { Component } from 'react';

// function App() {
//   return(
//     <React.Fragment>
//       <label htmlFor="bar">bbaa</label>
//       <input type="text" onChange={() => {console.log("Iam clicked")}} />
//     </React.Fragment>
//   )
// }

// クラスコンポーネンt
// class App extends Component {
//   render() {
//     return (
//       <div>helloo</div>
//     )
//   }
// }

// ファンクショナルコンポーネント
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!!</div>
}

export default App;
