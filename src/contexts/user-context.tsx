import { createContext } from "react";
export type UserContextType = {
    userName: string,
    name: string,
    dateOfBirth: Date,
    sex: 'male'|'female'|'other',
    token: string
}
export const UserContext = createContext<null | UserContextType>(null)