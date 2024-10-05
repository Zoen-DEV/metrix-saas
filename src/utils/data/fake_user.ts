import {v4 as id} from "uuid"
import { IUser } from "../interfaces/user.interface"

export const FakeUser: IUser = {
    id: id(),
    name: "Enzo Holgado",
    createdAt: "2023-01-5T12:00:00Z",
    role: "user"
  }