import { User } from "lucide-react";
import { UserType } from "./enums";



export interface User {
  username: string;

  password: string;

  lastname: string;

  firstname: string;

  phone: string;

  userType: UserType;
}
