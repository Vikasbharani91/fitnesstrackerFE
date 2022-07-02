import { UserContextType } from "../contexts/user-context";

export type HealthDataType = {
    height: number, 
    weight: number,
    steps: number,
    bpm?: number,
    bloodGlucose?: number,
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

        const ageCalculator = (dateOfBirth: Date) => {
            return (new Date().getFullYear() - dateOfBirth.getFullYear())
        }
        
        const tempData: HealthDataType = {
            height: 170,
            weight: 80,
            steps: 4090,
            age: ageCalculator(userObj.dateOfBirth),
        }
        return ([tempData, {...tempData, weight: 79, steps: 3060}, {...tempData, weight: 79, steps: 3008}, {...tempData, weight: 81, steps: 5110}])
    }

    static PostHealthData = async (data: HealthDataPayload) => {
        fetch(`${HealthDataService.apiUrl}/health/addHealthData`, {
            method: 'POST',
            body: JSON.stringify(data),
        })
        return { status: 200, data}
    }
}