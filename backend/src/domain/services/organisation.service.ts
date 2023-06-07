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

const getAllOrganisationService = async () => {
    return await OrganisationModel.find({})
}
const getOrganisationByToken = async (id: any, populate: string) => {
    return await OrganisationModel.find({ user: id }).populate(populate)
}

export default { createOrganisationService, deleteOrganisationService, getOneOrganisationService, getAllOrganisationService, getOrganisationByToken }