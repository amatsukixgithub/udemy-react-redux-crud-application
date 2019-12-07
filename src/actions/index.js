// reducer側でも使用する
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//↓アクションクリエイター
export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})