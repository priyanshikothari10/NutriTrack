const FoodEntry = require('../models/FoodEntry')

exports.list = async (req,res,next)=>{
  try{
    const user = req.user.id
    const { limit=100 } = req.query
    const items = await FoodEntry.find({ user }).sort({ date: -1 }).limit(Number(limit))
    res.json(items)
  }catch(err){ next(err) }
}

exports.create = async (req,res,next)=>{
  try{
    const payload = { ...req.body, user: req.user.id }
    const entry = await FoodEntry.create(payload)
    res.status(201).json(entry)
  }catch(err){ next(err) }
}

exports.update = async (req,res,next)=>{
  try{
    const entry = await FoodEntry.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, req.body, { new: true })
    if(!entry) return res.status(404).json({ message: 'Not found' })
    res.json(entry)
  }catch(err){ next(err) }
}

exports.remove = async (req,res,next)=>{
  try{
    await FoodEntry.deleteOne({ _id: req.params.id, user: req.user.id })
    res.json({ success: true })
  }catch(err){ next(err) }
}
