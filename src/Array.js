import React, { useState } from 'react'

function Array() {
    let[arr,arrFun]=useState([]);
    let items=["redmi","Iphone","vivo"];
    let addItems=()=>{arrFun(items)}
  return (
    <>
     <p>{arr}</p>
     <button onClick={addItems}>Add Items</button>
    </>
    
  )
}

export default Array