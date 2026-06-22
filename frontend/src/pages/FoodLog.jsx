import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import FoodForm from '../components/FoodForm'
import FoodTable from '../components/FoodTable'
import foodService from '../services/foodService'

export default function FoodLog(){
  const [items,setItems]=useState([])
  const [editing,setEditing]=useState(null)

  const load = async ()=>{
    const res = await foodService.list({})
    setItems(res.data || [])
  }

  useEffect(()=>{ load() },[])

  const handleAdd = async (payload)=>{
    if(editing){
      await foodService.update(editing._id,payload)
      setEditing(null)
    }else{
      await foodService.create(payload)
    }
    await load()
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Navbar />
        <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:12,marginTop:16}}>
          <div className="card">
            <h3>{editing? 'Edit' : 'Add'} Food</h3>
            <FoodForm onSubmit={handleAdd} initial={editing} />
          </div>
          <div className="card">
            <h3>Food Log</h3>
            <FoodTable items={items} onEdit={setEditing} onDelete={async(it)=>{await foodService.remove(it._id); load()}} />
          </div>
        </div>
      </div>
    </div>
  )
}
