import React from 'react'
import {deleteFood} from '../services/localStorageService'

export default function FoodTable({items, onDelete}){
  return (
    <div className="card">
      <h4>Today's food log</h4>
      <table>
        <thead>
          <tr><th>Food</th><th>Quantity</th><th>Meal</th><th>Time</th><th></th></tr>
        </thead>
        <tbody>
          {items.map(it=> (
            <tr key={it.id}>
              <td>{it.name}</td>
              <td>{it.quantity}</td>
              <td>{it.meal}</td>
              <td>{new Date(it.time).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</td>
              <td><button onClick={()=>{deleteFood(it.id); onDelete(it.id)}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
