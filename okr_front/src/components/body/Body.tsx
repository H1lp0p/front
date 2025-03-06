import React, { useState } from 'react'
import './Body.css'

interface BodyProps{

}

function Body() {

  const [counter, setCounter] = useState(0)

  return (
    <>
      <span>Мы делаем фронт, честно</span><br/>
      <button onClick={(event) => {setCounter(counter + 1)}}>Count = {counter}</button>
    </>
  )
}

export default Body
