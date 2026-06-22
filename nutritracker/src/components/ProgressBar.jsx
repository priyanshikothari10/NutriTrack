import React from 'react'

export default function ProgressBar({label, value, max}){
  const pct = Math.min(100, Math.round((value/max)*100))
  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{color:'#4f6b55'}}>{label}</div>
        <div style={{fontWeight:700}}>{value} / {max}{label==='Water'?' L':' g'}</div>
      </div>
      <div className="progress-bar" style={{marginTop:8}}>
        <span style={{width:`${pct}%`}}></span>
      </div>
    </div>
  )
}
