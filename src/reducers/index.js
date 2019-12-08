// Reducerを結合するための関数
import { combineReducers } from 'redux'
// count reducerをインポート
import count from './count'

// count reducerを結合する
export default combineReducers({ count })

// 複数Reducerがある場合、Reducerを列挙する。
// export default combineReducers({ foo, bar, bazz  })