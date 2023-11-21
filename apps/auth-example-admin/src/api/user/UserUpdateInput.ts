import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string;
  name?: string;
  roles?: InputJsonValue;
  username?: string;
};
