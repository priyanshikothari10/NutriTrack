const KEY = 'nutri-foods-v1'

export function loadFoods(){
  try{
    const raw = localStorage.getItem(KEY)
    if(!raw) return []
    return JSON.parse(raw)
  }catch(e){
    console.error('loadFoods', e)
    return []
  }
}

export function saveAll(list){
  localStorage.setItem(KEY, JSON.stringify(list))
}

export function saveFood(item){
  const list = loadFoods()
  list.unshift(item)
  saveAll(list)
}

export function deleteFood(id){
  const list = loadFoods().filter(i=>i.id!==id)
  saveAll(list)
}
