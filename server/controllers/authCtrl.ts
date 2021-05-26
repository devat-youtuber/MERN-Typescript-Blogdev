import { Request, Response } from 'express'
import Users from '../models/userModel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { generateActiveToken } from '../config/generateToken'
import sendMail from '../config/sendMail'
import { validateEmail } from '../middleware/vaild'


const CLIENT_URL = `${process.env.BASE_URL}`

const authCtrl = {
  register: async(req: Request, res: Response) => {
    try {
      const { name, account, password } = req.body

      const user = await Users.findOne({account})
      if(user) return res.status(400).json({msg: 'Email or Phone number already exists.'})

      const passwordHash = await bcrypt.hash(password, 12)

      const newUser = { name, account, password: passwordHash }

      const active_token = generateActiveToken({newUser})

      const url = `${CLIENT_URL}/active/${active_token}`

      if(validateEmail(account)){
        sendMail(account, url, "Verify your email address")
        return res.json({ msg: "Success! Please check your email." })
      }

    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  }
}


export default authCtrl;