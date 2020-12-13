import React, { useState } from 'react'


function changeNumber(num, valueSet) {
  valueSet(parseInt(num.target.value))
}


function TestOne() {
  const [numberA, setNumberA] = useState(0)
  const [numberB, setNumberB] = useState(0)
  const [sum, setSum] = useState(0)

  const addition = () => {
    setSum(numberA + numberB)
  }

  return (
    <>
      <h1>Test ONE</h1>
      <h2>{`Number A: ${numberA}`}</h2>
      <h2>{`Number B: ${numberB}`}</h2>
      <input type="number" placeholder="Number A" onChange={event => changeNumber(event, setNumberA)}></input>
      <input type="number" placeholder="Number B" onChange={event => changeNumber(event, setNumberB)}></input>
      <h2>{`Sum: ${sum}`}</h2>
      <button onClick={addition}>Addition</button>
    </>
  )
}

export default TestOne
