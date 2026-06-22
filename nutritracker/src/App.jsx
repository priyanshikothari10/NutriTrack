import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import FoodLog from './pages/FoodLog'
import Progress from './pages/Progress'
import Profile from './pages/Profile'
import { loadFoods } from './services/localStorageService'

export default function App() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    setFoods(loadFoods())
  }, [])

  return (
    <div className="app-root">
      <Sidebar />
      <div className="content">
        <Topbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard foods={foods} />} />
            <Route path="/food-log" element={<FoodLog foods={foods} setFoods={setFoods} />} />
            <Route path="/progress" element={<Progress foods={foods} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
