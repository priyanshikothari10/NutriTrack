import React from 'react'
import { Pie, Line } from 'react-chartjs-2'
import { Chart as C, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js'
C.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

export function MacroPie({data}){
  const chartData = {labels:['Protein','Carbs','Fat'],datasets:[{data:[data.protein,data.carbs,data.fat],backgroundColor:['#06b6d4','#60a5fa','#f97316']}]}
  return <Pie data={chartData} />
}

export function TrendLine({labels,values}){
  const chartData = {labels, datasets:[{label:'Calories',data:values,borderColor:'#06b6d4',tension:0.3}]}
  return <Line data={chartData} />
}
