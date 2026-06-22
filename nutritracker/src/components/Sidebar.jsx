import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo">N</div>
        <div>
          <div style={{fontWeight:700}}>NutriTracker</div>
          <div style={{fontSize:12,color:'#6b7a6c'}}>Health dashboard</div>
        </div>
      </div>

      <nav className="nav">
        <NavLink to="/" end className={({isActive})=>isActive? 'active':''}>Dashboard</NavLink>
        <NavLink to="/food-log" className={({isActive})=>isActive? 'active':''}>Food Log</NavLink>
        <NavLink to="/progress" className={({isActive})=>isActive? 'active':''}>Progress</NavLink>
        <NavLink to="/profile" className={({isActive})=>isActive? 'active':''}>Profile</NavLink>
      </nav>
    </aside>
  )
}
