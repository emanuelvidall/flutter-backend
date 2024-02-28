import User from '../models/UserModel.js'
import bcrypt from 'bcrypt'

export default {
  async tryLogin(req, res) {
    try {
      const { email, password } = req.body
      if (!email || !password)
        return res.status(400).json({ message: 'Preencha todos os campos' })
      const user = await User.findOne({ where: { email } })
      if (!user)
        return res.status(404).json({ message: 'Usuário não cadastrado' })
      const isPasswordCorrect = await bcrypt.compare(password, user.password)
      if (!isPasswordCorrect)
        return res.status(400).json({ message: 'Senha incorreta' })
      return res.status(200).json({ message: 'Login efetuado' })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: 'Erro ao tentar fazer login' })
    }
  },
}
