import React from 'react'
import StatCard from '../components/StatCard'
import { totalsForDay } from '../utils/calculations'

export default function Dashboard({foods}){
  const totals = totalsForDay(foods)

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <p style={{margin:0,fontWeight:700,color:'#2b6c3b'}}>Good morning</p>
          <h1 style={{margin:'6px 0'}}>Today's snapshot</h1>
        </div>
      </div>

      <div className="stats-grid" style={{marginTop:18}}>
        <StatCard title="Total Calories" value={`${totals.calories} kcal`} note={`${Math.round((totals.calories/2200)*100)}% of daily goal`} />
        <StatCard title="Protein Intake" value={`${totals.protein} g`} note={`${Math.round((totals.protein/120)*100)}% of daily goal`} />
        <StatCard title="Carbohydrates" value={`${totals.carbs} g`} note={`${Math.round((totals.carbs/260)*100)}% of daily goal`} />
        <StatCard title="Water Intake" value={`${totals.water} L`} note={`${Math.round((totals.water/2.8)*100)}% of daily goal`} />
      </div>
    </div>
  )
}
