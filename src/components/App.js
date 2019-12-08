import React, { Component } from 'react';
// connect関数を定義
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component{
  render(){
    const props = this.props
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
// dispatch: Actionが発生した際にReducerにtypeに応じた状態遷移を実行させるための関数
// incrementをキーにincrement関数を引数にもつdispatchを定義
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

// mapDispatchToProps の処理はこのように短くもかける。
// const mapDispatchToProps = ({ increment, decrement })

//stateとactionをコンポーネントに関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(App)
