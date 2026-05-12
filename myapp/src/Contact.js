import React, { useEffect, useState } from 'react'

function Contact() {
    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.log("useeffect execute")
    },[count]);
    const increment=()=>{
        setCount(count+1);
    }
  return (
    <div>
      <button onClick={increment}>Click</button>
      counter:{count}
    </div>
  )
}

export default Contact
