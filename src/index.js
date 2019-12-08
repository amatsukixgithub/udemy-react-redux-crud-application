import React from 'react';
import ReactDOM from 'react-dom';

// Storeを定義するための関数
import { createStore } from 'redux'
// 作成したStoreを全コンポーネントに渡すための機能
import { Provider } from 'react-redux'

import './index.css';

// 作成したReducerを定義
import reducer from './reducers'

// componentsとしてまとめておくとわかりやすい。
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// アプリケーション唯一のStore
// アプリケーション内の全てのStateはこのStoreに集約される
const store = createStore(reducer);

// 既存のコンポーネントをProviderコンポーネントでラップし、
// store属性に作成したstoreを渡す。
// =>アプリケーション内の全階層のコンポーネントでStoreが利用可能になる。
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
