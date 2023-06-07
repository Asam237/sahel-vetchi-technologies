import { CreateProductInput } from "../../shared/types/models";
import { ProductModel } from "../models/product.model";

const createProductService = async (input: CreateProductInput) => {
    return await ProductModel.create(input)
}

const deleteProductService = async (id: any) => {
    return await ProductModel.deleteOne({ _id: id })
}

const getOneProductService = async (id: any) => {
    return await ProductModel.findOne({ _id: id })
}
const getAllProductService = async () => {
    return await ProductModel.find({})
}
const getProductByToken = async (id: any, populate: string) => {
    return await ProductModel.find({ user: id }).populate(populate)
}

export default { createProductService, deleteProductService, getOneProductService, getAllProductService, getProductByToken }