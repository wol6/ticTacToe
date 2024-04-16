import React from 'react'
import '../App.css';
import { useState } from 'react';


function Square({value,onSquareClick}) {
    // const [values,setValues] = useState(null)

    // function handleClick(){
    //     console.log("clicked")
    //     setValues("x")
    // }
  return (
   <>
   <button className='square'
   onClick={onSquareClick}
   >{value}</button>
   </>
  )
}

export default Square