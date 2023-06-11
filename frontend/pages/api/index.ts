import axios from "axios"
import { AuthCreateType, AuthLoginType, OrganisationCreateType } from "../../types"

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

export const createOrganisation = async (input: OrganisationCreateType) => {
    return await api.post("/organisations/create", input)
}

export const getAllProduct = async (token: any) => {
    api.defaults.headers.common = { 'Authorization': 'Bearer ' + token }
    return await api.get("/products").then((res) => res.data)
}

export const saleProduct = async (id: any, data: any) => {
    return await api.put(`/products/${id}`, data)
}

export const createProduct = async (data: any) => {
    return await api.post("/products/create", data)
}

export const destroyProduct = async (id: any) => {
    return await api.delete(`/products/${id}`)
}
