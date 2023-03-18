import { useState, useDebugValue } from 'react'
import { Button } from 'antd'

interface Counter {
  count: number
  increment: () => void
  decrement: () => void
}

function useCounter(initialValue: number): Counter {
  const [count, setCount] = useState(initialValue)

  // 在开发者工具中展示当前计数器的值
  useDebugValue(`Count: ${count}`)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return { count, increment, decrement }
}

function Counter() {
  const { count, increment, decrement } = useCounter(0)

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button type="primary" onClick={increment}>
        Increment
      </Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  )
}

export default Counter
