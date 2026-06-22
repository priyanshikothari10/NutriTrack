const User = require('../models/User')

exports.getProfile = async (req,res,next)=>{
  try{
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  }catch(err){ next(err) }
}

exports.updateProfile = async (req,res,next)=>{
  try{
    const updates = { name: req.body.name, email: req.body.email, dailyCalories: req.body.dailyCalories }
    const user = await User.findByIdAndUpdate(req.user.id, updates, { new:true }).select('-password')
    res.json(user)
  }catch(err){ next(err) }
}
