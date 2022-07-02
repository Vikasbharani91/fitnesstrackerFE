import { Link, matchPath, Outlet, useLocation } from "react-router-dom";
import useHealthData from "../../helpers/healthdata.customHook";
import { HealthDataType } from "../../services/healthdata.service";
import "./Data.scss";

export default function Data() {

    const healthData = useHealthData();
    
    const processedResults = Object.entries(healthData.reduce<HealthDataType>((c, value) => {
        c.weight += value.weight;
        c.height += value.height;
        c.steps += value.steps;
        c.bpm && (c.bpm += value.bpm ?? 0);
        c.bloodGlucose && (c.bloodGlucose += value.bloodGlucose ?? 0);
        
        return c;
    }, {bpm:0, height:0, weight:0, steps:0, bloodGlucose: 0, bmi: 0})).filter(([_key, value]) => !!value);
    
    const showFAB = !matchPath('/data/form', useLocation().pathname);

    return (
        <>
        <h1 className="page-title">Data</h1>
        
        <div className="data-stats__container">
            <h2 className="data-stats__title">Current Statistics</h2>
            <p className="data-stats__title-subtitle">Currently showing Average Details for {healthData.length} day{healthData.length > 1 && 's'}</p>
            <ul className="data-stats__health-list">
            { processedResults.map(([key, value], index) => <li className="data-stats__health-list-item" key={key}><span className="data-stats__health-property">{key}</span>{ '  ' }<span className="data-stats__health-value">{value && typeof value === 'number' && value/healthData.length}</span></li>) }
            </ul>

        </div>
        {showFAB && <Link className="data__fab" to='form'>
            <div className="data__fab-content">Enter Data</div>
        </Link>}
        <Outlet />
        </>
    )
}