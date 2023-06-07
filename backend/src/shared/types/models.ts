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
