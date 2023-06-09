import axios from "axios"
import { AuthCreateType, AuthLoginType } from "../../types"

const baseURL: string = "http://127.0.0.1:3010"

const api = axios.create({
    baseURL
})

export const authLogin = async (input: AuthLoginType) => {
    return await api.post("/auth/login", input)
}

export const authRegister = async (input: AuthCreateType) => {
    return await api.post("/auth/register", input)
}