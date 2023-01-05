import React from 'react'
import { useState } from 'react'
function State() {
    const[changing,funchanging]= useState(345);
    var increase=()=>funchanging(changing+1);
    var decrease=()=>funchanging(changing-1);
  return (
    <>
    <div>{changing}</div>
    <button onClick={increase}>Add</button>
    <button onClick={decrease}>Substrate</button>
    </>
  )
}

export default State