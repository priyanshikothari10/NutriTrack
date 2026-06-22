import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Navbar(){
  const { user, logout } = useContext(AuthContext)
  return (
    <div className="topbar">
      <div>Welcome, {user?.name || 'User'}</div>
      <div>
        <button onClick={logout}>Sign out</button>
      </div>
    </div>
  )
}
