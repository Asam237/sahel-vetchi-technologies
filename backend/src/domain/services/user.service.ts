import { CreateUserInput } from "../../shared/types/models";
import { UserModel } from "../models/user.model";

const createUserService = async (input: CreateUserInput) => {
  return await UserModel.create(input);
};

export { createUserService };
