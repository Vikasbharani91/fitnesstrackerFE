import useHealthData from "../../helpers/healthdata.customHook";
import { HealthDataType } from "../../services/healthdata.service";
import Graph from "../common/Graph/Graph";


export default function Dashboard() {
    const healthData = useHealthData();

    const makeDate = (date: Date) => `${date.getDate()}-${date.getMonth() + 1}`;

    const data = healthData.map((item, index) => ({...item, date: makeDate(new Date((Date.now() - ((healthData.length - index) * 86400000))))}))

    const getBMI = (data: HealthDataType[]) => data.map((item, index) => ({...item, bmi: (item.weight/(item.height / 100 * item.height / 100)).toFixed(2), date: makeDate(new Date((Date.now() - ((healthData.length - index) * 86400000))))})
    )
    
    return <>
        <h1 className="page-title">Trends</h1>
        <Graph area data={data} lineKey="steps" title={`Steps taken in last ${healthData.length} days`}></Graph>
        <Graph area data={getBMI(healthData)} lineKey="bmi" title="Body-Mass index" secondaryLineKey="weight"></Graph>
        <Graph data={data} lineKey="weight" title="Weight log"></Graph>
    </>
}
