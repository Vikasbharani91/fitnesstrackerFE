import { UserContextType } from "../contexts/user-context";

import JWTDecode from 'jwt-decode';


export default class UserService {
    static GetUserDetails = async (userName: string, password: string): Promise<UserContextType | null> => {

        try {

            const token = await fetch('https://wefitnesstracker.herokuapp.com/token', {
                method: 'post',
                body: JSON.stringify({userName, password}),
                headers: {
                    'content-type': 'application/json',
                }
            }).then(response => response.text())
    
            const decoded = JWTDecode<UserContextType>(token);
            decoded.dateOfBirth = new Date(decoded.dateOfBirth);
            return ({
                ...decoded,
                token
            })
        } catch(e) {
            return null;
        }
    }
}