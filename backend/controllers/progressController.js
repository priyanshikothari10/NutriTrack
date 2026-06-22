const WeightProgress = require('../models/WeightProgress')

exports.listWeights = async (req,res,next)=>{
  try{
    const weights = await WeightProgress.find({ user: req.user.id }).sort({ date: 1 })
    res.json(weights)
  }catch(err){ next(err) }
}

exports.addWeight = async (req,res,next)=>{
  try{
    const w = await WeightProgress.create({ ...req.body, user: req.user.id })
    res.status(201).json(w)
  }catch(err){ next(err) }
}
