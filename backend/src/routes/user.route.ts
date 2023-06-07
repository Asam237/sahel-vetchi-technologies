import { Router } from "express"
import * as userController from "../controllers/user.controller"

const UserRoute = () => {
    const router = Router()
    const prefix: string = "/auth"
    router.post(`${prefix}/register`, userController.register)
    router.post(`${prefix}/login`, userController.login)
    return router
}

export { UserRoute }