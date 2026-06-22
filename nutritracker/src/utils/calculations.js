// Basic calculations for totals. In a real app these would be derived from
// nutritional metadata per food item. For demo purposes, parse numbers from
// the quantity text when possible, and use small heuristics.

export function totalsForDay(items){
  // items: [{name, quantity, meal, time}]
  let calories = 0
  let protein = 0
  let carbs = 0
  let water = 0

  items.forEach(it=>{
    const name = (it.name||'').toLowerCase()
    // heuristic: if contains 'water' try to parse liters
    if(name.includes('water')){
      // quantity like '0.5 L' or '500 ml'
      const q = parseFloat(it.quantity) || 0
      if(it.quantity.toLowerCase().includes('ml')){
        water += q/1000
      }else{
        water += q
      }
      return
    }

    // simple keyword-based calorie/protein/carbs estimation
    if(name.includes('chicken') || name.includes('egg') || name.includes('yogurt') || name.includes('tofu')){
      calories += 250; protein += 25; carbs += 8
    } else if(name.includes('salad') || name.includes('veg') || name.includes('vegetable')){
      calories += 120; protein += 5; carbs += 12
    } else if(name.includes('bread') || name.includes('toast') || name.includes('rice')||name.includes('pasta')){
      calories += 320; carbs += 50; protein += 8
    } else if(name.includes('banana')||name.includes('apple')||name.includes('fruit')){
      calories += 95; carbs += 25; protein += 1
    } else {
      // fallback: try to parse number in quantity as calories
      const q = parseFloat(it.quantity)
      if(!isNaN(q)) calories += Math.round(q)
      else calories += 150
    }
  })

  // round water to one decimal
  water = Math.round(water*10)/10

  return {calories, protein, carbs, water}
}
