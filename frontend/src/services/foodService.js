import API from './api'

const foodService = {
  list(params){ return API.get('/food', { params }) },
  create(payload){ return API.post('/food', payload) },
  update(id,payload){ return API.put(`/food/${id}`, payload) },
  remove(id){ return API.delete(`/food/${id}`) }
}

export default foodService
