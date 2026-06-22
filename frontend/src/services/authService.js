import API from './api'

const authService = {
  async login({ email, password }) {
    const { data } = await API.post('/auth/login', { email, password })
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
    return data.user
  },
  async register(payload){
    const { data } = await API.post('/auth/register', payload)
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
    return data.user
  },
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },
  getCurrentUser(){
    try{ return JSON.parse(localStorage.getItem('user')) }catch{ return null }
  }
}

export default authService
