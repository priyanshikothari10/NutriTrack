import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar(){
  return (
    <aside style={{width:240,padding:20,background:'#071022'}}>
      <h2>NutriTracker</h2>
      <nav style={{display:'flex',flexDirection:'column',gap:8}}>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/food">Food Log</NavLink>
        <NavLink to="/progress">Progress</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </aside>
  )
}
