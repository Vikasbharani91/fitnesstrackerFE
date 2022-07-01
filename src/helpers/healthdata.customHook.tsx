import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/user-context";
import HealthDataService, { HealthDataType } from "../services/healthdata.service";


export default function useHealthData() {
    const [healthData, setHeathData] = useState<HealthDataType[]>([])
    const userObj = useContext(UserContext);
    useEffect(() => {
        async function getHealthData() {
            setHeathData(await HealthDataService.GetHealthData(userObj));
       }
        getHealthData();
    }, [setHeathData, userObj])
    return healthData;
}