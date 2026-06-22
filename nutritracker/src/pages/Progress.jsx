import React from 'react'
import ProgressBar from '../components/ProgressBar'
import { totalsForDay } from '../utils/calculations'

export default function Progress({foods}){
  const totals = totalsForDay(foods)

  return (
    <div className="card">
      <h3>Daily goals progress</h3>
      <div style={{display:'grid',gap:16,marginTop:12}}>
        <ProgressBar label="Calories" value={totals.calories} max={2200} />
        <ProgressBar label="Protein" value={totals.protein} max={120} />
        <ProgressBar label="Carbs" value={totals.carbs} max={260} />
        <ProgressBar label="Water" value={totals.water} max={2.8} />
      </div>
    </div>
  )
}
