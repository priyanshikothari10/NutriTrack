import React from 'react'

export default function FoodTable({items,onEdit,onDelete}){
  return (
    <table style={{width:'100%'}}>
      <thead>
        <tr><th>Name</th><th>Meal</th><th>Calories</th><th>P</th><th>C</th><th>F</th><th/></tr>
      </thead>
      <tbody>
        {items.map(it=> (
          <tr key={it._id}>
            <td>{it.name}</td>
            <td>{it.meal}</td>
            <td>{it.calories}</td>
            <td>{it.protein}</td>
            <td>{it.carbs}</td>
            <td>{it.fat}</td>
            <td>
              <button onClick={()=>onEdit(it)}>Edit</button>
              <button onClick={()=>onDelete(it)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
