

export type ConsultantType = {
    consultantId: string,
    name: string,
    age: string,
    yoe: string,
    totalClients: string,
    description: string,
    imageSrc: string
}

export default class ConsultantService {
    static apiURL = 'https://wefitnesstracker.herokuapp.com/';

    static GetConsultantsList = async() => {
        return await fetch(`${ConsultantService.apiURL}consultants`).then(res => res.json() as Promise<ConsultantType[]>)
    }

    static GetConsultant = async (consultantId: string) => {
        return await fetch(`${ConsultantService.apiURL}consultantById/${consultantId}`).then(res => res.json() as Promise<ConsultantType>)
    }
}