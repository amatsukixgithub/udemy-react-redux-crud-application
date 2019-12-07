import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: 1, age: '10'},
    { name: "NoName"}
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}!, and {props.age} years old.</div>
}

User.propTypes = {
  name: PropTypes.string, //nameは文字列
  age: PropTypes.number.isRequired, // numberは数値で存在が必須
}

export default App;
