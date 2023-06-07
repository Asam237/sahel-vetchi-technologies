import { Router } from "express"
import * as productController from "../controllers/product.controller"

const ProductRoute = () => {
    const router = Router()
    const prefix: string = "/products"
    router.post(`${prefix}/create`, productController.createProductController)
    router.get(`${prefix}`, productController.getAllProductController)
    router.get(`${prefix}/:id`, productController.getOneProductController)
    router.delete(`${prefix}/:id`, productController.deleteProductController)
    return router
}

export {ProductRoute}