import { UserContextType } from "../contexts/user-context";
import calculateBMI from "../utils/bmi";

export type HealthDataType = {
    height: number, 
    weight: number,
    steps: number,
    bpm?: number,
    bp?: string,
    bloodGlucose?: number,
    bmi: number,
    [key: string]: number | undefined | string
}

export type HealthDataPayload = {
    bmi: number;
    height: number,
    steps: number,
    bpm?: number,
    bloodGluscose?: number,
    weight: number,
    bp?: string,
}

export default class HealthDataService {
    static apiUrl = 'https://wefitnesstracker.herokuapp.com/';

    
    static GetHealthData = async (userObj: null|UserContextType): Promise<HealthDataType[]> => {
        

        if (userObj === null) {
            return [];
        }

       return await fetch(`${HealthDataService.apiUrl}health/history`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${userObj.token}`
        }
       }).then(res => res.json() as Promise<HealthDataType[]>);

    }

    static PostHealthData = async (data: HealthDataPayload, userObj: UserContextType | null) => {
        data.bmi = calculateBMI(data);
        await fetch(`${HealthDataService.apiUrl}health/addHealthdata`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Authorization': `Bearer ${userObj?.token}`,
                'content-type': 'application/json'
            }
        })
        return { status: 200, data}
    }
}