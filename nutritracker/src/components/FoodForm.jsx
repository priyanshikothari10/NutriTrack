import React, {useState} from 'react'
import {saveFood} from '../services/localStorageService'

export default function FoodForm({onAdd}){
  const [name,setName]=useState('')
  const [quantity,setQuantity]=useState('')
  const [meal,setMeal]=useState('Breakfast')

  function handleSubmit(e){
    e.preventDefault()
    const item = {id:Date.now(), name, quantity, meal, time: new Date().toISOString()}
    saveFood(item)
    onAdd(item)
    setName(''); setQuantity(''); setMeal('Breakfast')
  }

  return (
    <form className="food-form" onSubmit={handleSubmit}>
      <div>
        <label>Food name</label>
        <input value={name} onChange={e=>setName(e.target.value)} required />
      </div>
      <div>
        <label>Quantity</label>
        <input value={quantity} onChange={e=>setQuantity(e.target.value)} required />
      </div>
      <div>
        <label>Meal type</label>
        <select value={meal} onChange={e=>setMeal(e.target.value)}>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snacks</option>
        </select>
      </div>
      <div>
        <button className="btn btn-primary" type="submit">Add entry</button>
      </div>
    </form>
  )
}
