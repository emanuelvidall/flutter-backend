import User from '../models/UserModel.js'
import bcrypt from 'bcrypt'

export default {
  async createUser(req, res) {
    try {
      const userData = req.body
      const userExists = await User.findOne({
        where: { email: userData.email },
      })
      if (userExists)
        return res.status(400).json({ message: 'Email já cadastrado' })
      userData.password = await bcrypt.hash(userData.password, 12)
      await User.create(userData)
      req.user_email = userData.email
      req.first_name = userData.first_name
    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: 'Erro ao tentar criar usuário' })
    }
  },
}
