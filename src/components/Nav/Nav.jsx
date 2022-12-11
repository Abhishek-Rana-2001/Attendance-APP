import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import {Routes,Route} from 'react-router-dom'
import Home from '../HomePage/Home'
import Login from '../Login/Login'
import Class from '../Class/Class'
import Attendance from '../Attendance/Attendance'

const Nav = () => {
  return (
    <>
    <div className = "Nav">
      <NavLink to="/Home" >Home</NavLink>
      <NavLink to="/Attendance" >Attendance</NavLink>
      <NavLink to="/class" >Class</NavLink>
      <NavLink to="/" >Login</NavLink>
    </div>

    <Routes>
      <Route path='/' element = {<Login/>} ></Route>
      <Route path='/home' element = {<Home/>} ></Route>
      <Route path='/class' element = {<Class/>} ></Route>
      <Route path='/attendance' element = {<Attendance/>} ></Route>
    </Routes>
    </>
  )
}

export default Nav