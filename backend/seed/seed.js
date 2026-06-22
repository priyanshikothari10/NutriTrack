require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = require('../config/db')
const User = require('../models/User')
const FoodEntry = require('../models/FoodEntry')
const Weight = require('../models/WeightProgress')
const bcrypt = require('bcryptjs')

async function seed(){
  await connectDB()
  await User.deleteMany({})
  await FoodEntry.deleteMany({})
  await Weight.deleteMany({})

  const pass = await bcrypt.hash('password',10)
  const user = await User.create({ name:'Demo User', email:'demo@example.com', password:pass, dailyCalories:2200 })

  const foods = [
    { user: user._id, name:'Oatmeal', meal:'breakfast', calories:320, protein:10, carbs:54, fat:5 },
    { user: user._id, name:'Chicken Salad', meal:'lunch', calories:450, protein:40, carbs:12, fat:22 },
    { user: user._id, name:'Salmon + Veg', meal:'dinner', calories:600, protein:45, carbs:20, fat:30 }
  ]

  await FoodEntry.insertMany(foods)

  const weights = [
    { user: user._id, weight:85, date: new Date(Date.now()-1000*60*60*24*30) },
    { user: user._id, weight:84, date: new Date(Date.now()-1000*60*60*24*21) },
    { user: user._id, weight:83.5, date: new Date(Date.now()-1000*60*60*24*7) }
  ]
  await Weight.insertMany(weights)

  console.log('Seeded demo user: demo@example.com / password')
  process.exit(0)
}

seed().catch(err=>{console.error(err);process.exit(1)})
