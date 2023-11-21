import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email: string;
  name: string;
  roles: InputJsonValue;
  username: string;
};
