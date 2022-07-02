import { UserContextType } from "../contexts/user-context";

export type HealthDataType = {
    height: number, 
    weight: number,
    steps: number,
    bpm?: number,
    bloodGlucose?: number,
    bmi: number,
    [key: string]: number | undefined
}

export type HealthDataPayload = {
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

    static PostHealthData = async (data: HealthDataPayload) => {
        fetch(`${HealthDataService.apiUrl}health/addHealthData`, {
            method: 'POST',
            body: JSON.stringify(data),
        })
        return { status: 200, data}
    }
}