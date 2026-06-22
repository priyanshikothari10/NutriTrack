import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Login(){
  const [form,setForm]=useState({email:'',password:''})
  const { login } = useContext(AuthContext)
  const nav = useNavigate()
  const submit = async (e)=>{ e.preventDefault(); await login(form); nav('/') }
  return (
    <div style={{display:'grid',placeItems:'center',height:'100vh'}}>
      <form onSubmit={submit} style={{width:360,display:'grid',gap:8}}>
        <h3>Login</h3>
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
        <button>Login</button>
      </form>
    </div>
  )
}
