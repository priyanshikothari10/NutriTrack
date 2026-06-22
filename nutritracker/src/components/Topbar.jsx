import React from 'react'

export default function Topbar(){
  return (
    <header className="topbar">
      <div>
        <h2 style={{margin:0}}>Dashboard</h2>
        <div style={{color:'#6b7a6c'}}>Track your nutrition and stay energized.</div>
      </div>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <button className="btn">Daily Summary</button>
        <div style={{width:40,height:40,borderRadius:8,background:'#e6f4e6',display:'grid',placeItems:'center',color:'#1f542f',fontWeight:700}}>JD</div>
      </div>
    </header>
  )
}
