import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { TrendLine } from '../components/Chart'
import API from '../services/api'

export default function Progress(){
  const [weights,setWeights]=useState([])

  useEffect(()=>{
    (async()=>{
      const { data } = await API.get('/progress/weights')
      setWeights(data || [])
    })()
  },[])

  const labels = weights.map(w=> new Date(w.date).toLocaleDateString())
  const values = weights.map(w=> w.weight)

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Navbar />
        <div style={{marginTop:16}}>
          <div className="card"><h3>Weight Trend</h3><TrendLine labels={labels} values={values} /></div>
        </div>
      </div>
    </div>
  )
}
