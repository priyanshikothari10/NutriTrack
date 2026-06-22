import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import authService from '../services/authService'

export default function Register(){
  const [form,setForm]=useState({name:'',email:'',password:''})
  const nav = useNavigate()
  const submit = async (e)=>{ e.preventDefault(); await authService.register(form); nav('/') }
  return (
    <div style={{display:'grid',placeItems:'center',height:'100vh'}}>
      <form onSubmit={submit} style={{width:360,display:'grid',gap:8}}>
        <h3>Register</h3>
        <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
        <button>Register</button>
      </form>
    </div>
  )
}
