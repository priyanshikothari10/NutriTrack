import React from 'react'

export default function StatCard({title,value, note}){
  return (
    <div className="card">
      <div style={{color:'#5c6a5a'}}>{title}</div>
      <div style={{fontSize:22,fontWeight:700,marginTop:6}}>{value}</div>
      {note && <div style={{color:'#7a8876',marginTop:8}}>{note}</div>}
    </div>
  )
}
