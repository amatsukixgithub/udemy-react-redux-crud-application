// actionのtypeを定義
import { INCREMENT, DECREMENT } from '../actions'

// Stateの初期状態
// state ではcountの値を保持させる
const initialState = { value: 0 }

// 状態とアクションを引数にもつ
export default (state = initialState, action) => {
  // actionのtypeは action.type で取得
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}