const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req,res,next)=>{
  try{
    const { name,email,password } = req.body
    const existing = await User.findOne({ email })
    if(existing) return res.status(400).json({ message: 'Email already in use' })
    const hash = await bcrypt.hash(password,10)
    const user = await User.create({ name,email,password:hash })
    const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET || 'secret', { expiresIn:'7d' })
    res.json({ user: { _id:user._id, name:user.name, email:user.email }, token })
  }catch(err){ next(err) }
}

exports.login = async (req,res,next)=>{
  try{
    const { email,password } = req.body
    const user = await User.findOne({ email })
    if(!user) return res.status(400).json({ message: 'Invalid credentials' })
    const ok = await bcrypt.compare(password, user.password)
    if(!ok) return res.status(400).json({ message: 'Invalid credentials' })
    const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET || 'secret', { expiresIn:'7d' })
    res.json({ user: { _id:user._id, name:user.name, email:user.email }, token })
  }catch(err){ next(err) }
}
