import { Request, Response } from "express"
import { UserModel } from "../domain/models/user.model"
import organisationService from "../domain/services/organisation.service"
import { CreateOrganisationInput } from "../shared/types/models"

const createOrganisationController = async (req: Request, res: Response) => {
    const { adress, code, email, fullname, isRoot, phone }: CreateOrganisationInput = req.body
    const user = await UserModel.findById({ _id: req.body.user })
    const createOrganisation = await organisationService.createOrganisationService({
        adress, code, email, fullname, isRoot, phone,
    })
    user?.organisations.push(createOrganisation._id)
    await user?.save()
    await createOrganisation.save()
    return res.status(200).json({ data: createOrganisation })
}

const deleteOrganisationController = async (req: Request, res: Response) => {
    await organisationService.deleteOrganisationService(req.params.id)
    return res.status(200).json({ messsage: "organisation delete !" })
}

const getOneOrganisationController = async (req: Request, res: Response) => {
    const organisation = await organisationService.getOneOrganisationService(req.params.id)
    return res.status(200).json({ data: organisation })
}

const getAllOrganisationController = async (req: Request, res: Response) => {
    const organisations = await organisationService.getAllOrganisationService()
    return res.status(200).json({ data: organisations })
}

const getAllOrganisationControllerToken = async (req: Request, res: Response) => {
    const organisations = await organisationService.getOrganisationByToken(req.user.id, "user")
    return res.status(200).json({ data: organisations })
}

export { createOrganisationController, deleteOrganisationController, getAllOrganisationController, getOneOrganisationController, getAllOrganisationControllerToken }
