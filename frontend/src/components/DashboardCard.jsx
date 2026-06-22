import React from 'react'

export default function DashboardCard({title,value,children}){
  return (
    <div className="card" style={{minWidth:180}}>
      <h4 style={{margin:0,color:'var(--muted)'}}>{title}</h4>
      <div style={{fontSize:20,fontWeight:700}}>{value}</div>
      {children}
    </div>
  )
}
