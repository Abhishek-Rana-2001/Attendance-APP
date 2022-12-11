import React from 'react'
import { useState } from 'react'


const Attendance = () => {

  const [checkedTrue,setCheckedTrue]  = useState(false)
  const [checkedFalse,setCheckedFalse]  = useState(true)

const handleChange = (e)=>{
  const name = e.target.name;
  if(name === 'true'){
    setCheckedTrue(!checkedTrue);
  }
  else{
    setCheckedFalse(!checkedFalse);
  }


}
console.log(checked);

  return (
    <>
      <div className="container">
        <h4>StudentName</h4>
        <input type="checkbox" name='true' checked={checkedTrue} onChange={handleChange}/>
        <input type="checkbox" name='false' checked={checkedFalse} onChange={handleChange}/> 


  
      </div>
    </>
  )
}

export default Attendance