import { Router } from "express"
import * as organisationController from "../controllers/organisation.controller"

const OrganisationRoute = () => {
    const router = Router()
    const prefix: string = "/organisations"
    router.post(`${prefix}/create`, organisationController.createOrganisationController)
    router.delete(`${prefix}/:id`, organisationController.deleteOrganisationController)
    router.get(`${prefix}/:id`, organisationController.getOneOrganisationController)
    router.get(`${prefix}`, organisationController.getAllOrganisationController)
    return router;
}

export { OrganisationRoute }