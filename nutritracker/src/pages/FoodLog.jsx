import React from 'react'
import FoodForm from '../components/FoodForm'
import FoodTable from '../components/FoodTable'
import { deleteFood } from '../services/localStorageService'

export default function FoodLog({foods,setFoods}){
  function handleAdd(item){
    setFoods(prev=>[item,...prev])
  }
  function handleDelete(id){
    deleteFood(id)
    setFoods(prev=>prev.filter(p=>p.id!==id))
  }

  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:16}}>
      <section className="card">
        <h3>Log a food item</h3>
        <FoodForm onAdd={handleAdd} />
        <div style={{height:16}}></div>
        <FoodTable items={foods} onDelete={handleDelete} />
      </section>

      <aside className="card">
        <h4>Tips</h4>
        <p>Log each serving and include water intake as separate entries (e.g. Water - 0.5 L).</p>
      </aside>
    </div>
  )
}
