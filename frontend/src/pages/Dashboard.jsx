import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import DashboardCard from '../components/DashboardCard'
import { MacroPie, TrendLine } from '../components/Chart'
import foodService from '../services/foodService'

export default function Dashboard(){
  const [summary,setSummary] = useState({calories:0,protein:0,carbs:0,fat:0,recent:[]})

  useEffect(()=>{
    (async()=>{
      const res = await foodService.list({limit:10})
      const items = res.data || []
      const recent = items.slice(0,5)
      const totals = items.reduce((acc,i)=>({
        calories:acc.calories+i.calories, protein:acc.protein+i.protein, carbs:acc.carbs+i.carbs, fat:acc.fat+i.fat
      }),{calories:0,protein:0,carbs:0,fat:0})
      setSummary({...totals, recent})
    })()
  },[])

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Navbar />
        <div style={{display:'flex',gap:12,marginTop:16}}>
          <DashboardCard title="Calories" value={summary.calories} />
          <DashboardCard title="Protein" value={`${summary.protein} g`} />
          <DashboardCard title="Carbs" value={`${summary.carbs} g`} />
          <DashboardCard title="Fat" value={`${summary.fat} g`} />
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:16}}>
          <div className="card"><MacroPie data={summary} /></div>
          <div className="card"><h3>Recent</h3><ul>{summary.recent.map(r=> <li key={r._id}>{r.name} - {r.calories} kcal</li>)}</ul></div>
        </div>
      </div>
    </div>
  )
}
