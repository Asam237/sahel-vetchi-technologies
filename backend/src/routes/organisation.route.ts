import { Router } from "express"
import * as organisationController from "../controllers/organisation.controller"
import { verifyToken } from "../utils/verifyToken"

const OrganisationRoute = () => {
    const router = Router()
    const prefix: string = "/organisations"
    router.post(`${prefix}/create`, organisationController.createOrganisationController)
    router.delete(`${prefix}/:id`, organisationController.deleteOrganisationController)
    router.get(`${prefix}/:id`, organisationController.getOneOrganisationController)
    router.get(`${prefix}/all`, organisationController.getAllOrganisationController)
    router.get(`${prefix}`, verifyToken, organisationController.getAllOrganisationControllerToken)
    return router;
}

export { OrganisationRoute }