import useHealthData from "../../helpers/healthdata.customHook";
import { HealthDataType } from "../../services/healthdata.service";
import calculateBMI from "../../utils/bmi";
import Graph from "../common/Graph/Graph";


export default function Dashboard() {
    const healthData = useHealthData();
    const makeDate = (date: Date) => `${date.toDateString().split(' ')[1]}\n${parseInt(date.toDateString().split(' ')[2])}`;

    const data = healthData.map((item, index) => ({...item, date: makeDate(new Date((Date.now() - ((healthData.length - index) * 86400000))))}))

    const getBMI = (data: HealthDataType[]) => data.map((item, index) => ({...item, bmi: (calculateBMI(item)).toFixed(2), date: makeDate(new Date((Date.now() - ((healthData.length - index) * 86400000))))})
    )

    console.log(data)

    const bp = data.map(({bp}, index) => {
        if (bp) {
            return {
                lower: bp.split('/')[1],
                upper: bp.split('/')[0],
                date: makeDate(new Date((Date.now() - ((healthData.length - index) * 86400000))))
            }
        }
        return undefined
    })
    
    return <>
        <h1 className="page-title">Trends</h1>
        <Graph area data={data} lineKey="steps" title={`Steps taken in last ${healthData.length} days`}></Graph>
        <Graph area data={getBMI(healthData)} lineKey="bmi" title="Body-Mass index" secondaryLineKey="weight"></Graph>
        <Graph area data={bp} lineKey="lower" secondaryLineKey="upper" title="Blood Pressure (mmHg)"></Graph>
        <Graph data={data} bar lineKey="weight" title="Weight log (Kg)"></Graph>
    </>
}
