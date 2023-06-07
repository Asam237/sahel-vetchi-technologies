import { CreateOrganisationInput } from "../../shared/types/models";
import { OrganisationModel } from "../models/organisation.model";

const createOrganisationService = async (input: CreateOrganisationInput) => {
    return await OrganisationModel.create(input)
}

const deleteOrganisationService = async (id: any) => {
    return await OrganisationModel.deleteOne({ _id: id })
}

const getOneOrganisationService = async (id: any) => {
    return await OrganisationModel.findOne({ _id: id })
}

const getAllOrganisationService = async (id: any) => {
    return await OrganisationModel.find({})
}

export default { createOrganisationService, deleteOrganisationService, getOneOrganisationService, getAllOrganisationService }