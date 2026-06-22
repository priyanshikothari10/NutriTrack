import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { AuthContext } from '../context/AuthContext'
import API from '../services/api'

export default function Profile(){
  const { user } = useContext(AuthContext)
  const [form,setForm]=useState({name:user?.name||'',email:user?.email||'', dailyCalories:user?.dailyCalories||2000})

  const save = async ()=>{
    await API.put('/profile', form)
    alert('Saved')
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Navbar />
        <div style={{marginTop:16}} className="card">
          <h3>Profile</h3>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
            <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
            <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
            <input type="number" value={form.dailyCalories} onChange={e=>setForm({...form,dailyCalories:Number(e.target.value)})} />
            <button onClick={save}>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}
