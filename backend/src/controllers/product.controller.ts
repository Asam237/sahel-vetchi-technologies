import { Request, Response } from "express";
import { OrganisationModel } from "../domain/models/organisation.model";
import productService from "../domain/services/product.service";
import { CreateProductInput } from "../shared/types/models";

const createProductController = async (req: Request, res: Response) => {
    const { description, prixAchat, prixGros, prixVente, title, sale }: CreateProductInput = req.body
    const organisation = await OrganisationModel.findById({ _id: req.body.organisation })
    const createProduct = await productService.createProductService({
        description, organisation, prixAchat, prixGros, prixVente, title, sale
    })
    organisation.products.push(createProduct._id)
    await organisation.save()
    await createProduct.save()
    return res.status(200).json({ data: createProduct })
}

const deleteProductController = async (req: Request, res: Response) => {
    await productService.deleteProductService(req.params.id)
    return res.status(200).json({ message: "product delete!" })
}

const getOneProductController = async (req: Request, res: Response) => {
    const product = await productService.getOneProductService(req.params.id)
    return res.status(200).json({ data: product })
}

const getAllProductController = async (req: Request, res: Response) => {
    const products = await productService.getAllProductService()
    return res.status(200).json({ data: products })
}

const getProductByTokenController = async (req: Request, res: Response) => {
    const products = await productService.getProductByToken(req.user.id, "organisation")
    return res.status(200).json({ data: products })
}

export { createProductController, deleteProductController, getOneProductController, getAllProductController, getProductByTokenController }