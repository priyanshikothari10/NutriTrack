const mongoose = require('mongoose')

const NutritionGoalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dailyCalories: { type: Number },
  proteinRatio: { type: Number },
  carbRatio: { type: Number },
  fatRatio: { type: Number }
})

module.exports = mongoose.model('NutritionGoal', NutritionGoalSchema)
