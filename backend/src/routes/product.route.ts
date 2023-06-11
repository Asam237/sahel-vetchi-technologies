import { Router } from "express"
import * as productController from "../controllers/product.controller"
import { verifyToken } from "../utils/verifyToken"

const ProductRoute = () => {
    const router = Router()
    const prefix: string = "/products"
    router.post(`${prefix}/create`, productController.createProductController)
    router.put(`${prefix}/:id`, productController.updateProductController);
    router.get(`${prefix}`, verifyToken, productController.getProductByTokenController)
    router.get(`${prefix}/:id`, productController.getOneProductController)
    router.delete(`${prefix}/:id`, productController.deleteProductController)
    return router
}

export { ProductRoute }