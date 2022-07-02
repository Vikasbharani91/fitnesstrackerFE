import { HealthDataType } from "../services/healthdata.service";

export default function calculateBMI (item: HealthDataType) {
    return (item.weight/(item.height / 100 * item.height / 100))
}
