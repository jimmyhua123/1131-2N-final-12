import { useState } from 'react'

const UseStateBasics = () => {
  // let count = 0
  const [count, setCount] = useState(0)

  const handleClick = () => {
    // count++
    setCount(count + 1)
    console.log('count', count)
  }

  return (
    <>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        increment
      </button>
    </>
  )
}

export default UseStateBasics
