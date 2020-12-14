import React, { useState } from 'react'


function TestOne() {
  const [numberA, setNumberA] = useState(0)
  const [numberB, setNumberB] = useState(0)
  const [sum, setSum] = useState(0)

  const addition = () => {
    setSum(numberA + numberB)
  }

  const numberASet = (event) => {
    setNumberA(parseInt(event.target.value));
  }

  const numberBSet = (event) => {
    setNumberB(parseInt(event.target.value));
  }

  return (
    <>
      <h1>Test ONE</h1>
      <h2>{`Number A: ${numberA}`}</h2>
      <h2>{`Number B: ${numberB}`}</h2>
      <input type="number" placeholder="Number A" onChange={numberASet}></input>
      <input type="number" placeholder="Number B" onChange={numberBSet}></input>
      <h2>{`Sum: ${sum}`}</h2>
      <button onClick={addition}>Addition</button>
    </>
  )
}

export default TestOne
