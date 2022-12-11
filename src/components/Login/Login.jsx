import React, { useEffect, useState } from 'react'
import "./login.css"


function Login({name}) {

const [values,setValues] = useState({
  username:'',
  password:'',
})

useEffect(()=>{
  document.title = `Username is ${values.username}`;
})


const inputEvent = (e)=>{
  const value = e.target.value;
  const name = e.target.name;

  setValues((prevValue)=>{
    if(name === 'username'){
      return {username:value,
              password:prevValue.password,
      };
    }else if(name === 'password'){
      return {
              username:prevValue.username,
              password:value,
      };
    }
  })


}

  return (
    <>
    <div className="container"> 
      <div className="form-box">
      <div className='login-heading'>
        <h3>Login Please</h3>
        </div>
        <span className='line'></span>
      <div className="form-container">
        <form >
          <label htmlFor="username">Username</label>
            <input 
                type="text" 
                name='username' 
                value={values.email}
                onChange = {inputEvent}/>
            <label htmlFor="password" >Password</label>
              <input 
                 type="password" 
                 name="password" 
                 value={values.password}
                 onChange = {inputEvent}/>
              <button className='butn-primary' type='Submit' /* onClick={handleSubmit} */>Login</button>
              <button className='butn-primary' /* onClick={handleSubmit} */>SignUp</button>
        </form>
      </div>
      </div>
    </div>
      
    </>
  )
}

export default Login