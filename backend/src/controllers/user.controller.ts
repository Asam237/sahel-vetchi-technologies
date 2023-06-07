import { Request, Response } from "express";
import { CreateUserInput, LoginUserInput } from "../shared/types/models";
import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"
import userService from "../domain/services/user.service";
import { TokenPayload } from "../shared/types/commons";
import { EXPIRES, JWT_SECRET } from "../shared/core/config";

const register = async (req: Request, res: Response) => {
  const { adress, email, fullname, isLocked, phone, userType }: CreateUserInput = req.body
  const password: string = bcrypt.hashSync(req.body.password, 10)
  const createUser = await userService.createUserService({
    adress, email, fullname, isLocked, password, phone, userType
  })
  return res.status(200).json({ data: createUser })
}

const login = async (req: Request, res: Response) => {
  const { email, password }: LoginUserInput = req.body
  const user = await userService.findByEmail(email)
  if (!user) {
    return res.status(400).json({ message: "Login failed!" })
  }
  const isMatch: boolean = bcrypt.compareSync(password, user.password)
  if (!isMatch) {
    return res.status(400).json({ message: "Login failed!" })
  }
  const { _id }: any = user
  const tokenPayload: TokenPayload = {
    id: _id
  }
  const token: string = jwt.sing(tokenPayload, JWT_SECRET!!, { expiresIn: EXPIRES!! })
  return res.status(200).json({ ...user, token })
}


export { register, login }