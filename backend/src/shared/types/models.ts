export type CreateUserInput = {
  fullname: string;
  email: string;
  password: string;
  phone: string;
  adress: string;
  userType: string;
  isLocked: boolean;
};

export type LoginUserInput = {
  email: string;
  password: string;
};

export type CreateOrganisationInput = {
  fullname: string
  phone: string
  email: string
  adress: string
  code: string
  isRoot: boolean
}

export type CreateProductInput = {
  title: string
  description: string
  prixAchat: string
  prixGros: string
  prixVente: string
  sale: boolean
  user: any
}