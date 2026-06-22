import React, { useState } from 'react'

export default function FoodForm({onSubmit, initial}){
  const [form, setForm] = useState(initial || {name:'',calories:0,protein:0,carbs:0,fat:0,meal:'other'})
  const handle = (e)=>{
    const {name,value} = e.target
    setForm(f=>({...f,[name]: name==='name' || name==='meal' ? value : Number(value)}))
  }
  return (
    <form onSubmit={e=>{e.preventDefault(); onSubmit(form)}} style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
      <input name="name" placeholder="Food name" value={form.name} onChange={handle} />
      <select name="meal" value={form.meal} onChange={handle}><option>breakfast</option><option>lunch</option><option>dinner</option><option>snack</option><option>other</option></select>
      <input name="calories" type="number" placeholder="Calories" value={form.calories} onChange={handle} />
      <input name="protein" type="number" placeholder="Protein (g)" value={form.protein} onChange={handle} />
      <input name="carbs" type="number" placeholder="Carbs (g)" value={form.carbs} onChange={handle} />
      <input name="fat" type="number" placeholder="Fat (g)" value={form.fat} onChange={handle} />
      <div style={{gridColumn:'1 / -1'}}>
        <button type="submit">Save</button>
      </div>
    </form>
  )
}
