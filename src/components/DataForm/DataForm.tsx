import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../contexts/user-context';
import useHealthData from '../../helpers/healthdata.customHook';
import HealthDataService, { HealthDataPayload } from '../../services/healthdata.service';
import './DataForm.scss';

type InputsType = {
    [propName: string]: number | string;
}

export default function DataForm () {
    const healthData = useHealthData();
    const userObj = useContext(UserContext);
    let height = '';
    if (healthData.length) {
        height = healthData[healthData.length - 1].height.toString();
    }
    const [inputs, setInputs] = useState<InputsType>({
        height
    });

    const containerEl = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        containerEl.current?.scrollIntoView({
            behavior: 'smooth'
        });
    })

    useEffect(() => {
        setInputs({height})
    }, [height])

   const processInputs = (inputs: InputsType) => {
    let obj : HealthDataPayload = {
        height: parseFloat(parseFloat(height as string).toFixed(3)),
        weight: 0,
        steps: 0,
        bmi: 0
    };
    Object.entries(inputs).forEach(([key, value]) => {
        if (key && value && value !== '') {
            if (key === 'bp' && typeof value === 'string') {
                obj = { ...obj, [key]: value }
            } else {
                obj = { ...obj, [key]: parseFloat(parseFloat(value as string).toFixed(3)) }
            }
        }
    });
    return obj
   }

   const navigate = useNavigate();

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(processInputs(inputs));
        try {
            await HealthDataService.PostHealthData(processInputs(inputs), userObj);
            navigate('/')
        } catch(e) {
            console.error(e)
        }
    }

    const handleFormChange = (e: any) => {
        setInputs((inputs) => ({
         ...inputs,
         [e.target.name]: e.target.value 
        }))
    }
    return <>
    
    <hr />
    <div className="data-form__container" ref={containerEl}>

        
        <h3 className="data-form__title">Track Data for today</h3>
        <form className="data-form__form" onSubmit={submitHandler} onChange={handleFormChange}>
            <label className="data-form__form-label" htmlFor="steps">Steps</label>
            <input className="data-form__form-input" autoFocus required type="number" name="steps" id="steps" />
            <label className="data-form__form-label" htmlFor="weight">Weight</label>
            <input className="data-form__form-input" required type="number" name="weight" id="weight" step=".01"/>Kgs
            <label className="data-form__form-label" htmlFor="height">height</label>
            <input className="data-form__form-input" required type="number" name="height" defaultValue={height} id="height" step=".01"/>cms
            <p className='data-form__form-separator'>Optional Data</p>

            
            <label className="data-form__form-label" htmlFor="bloodGlucose">Blood Glucose Level</label>
            <input className="data-form__form-input" type="number" name="bloodGlucose" id="bloodGlucose" step=".01"/>mg/dL
            <label className="data-form__form-label" htmlFor="bpm">Heart Rate (beats per minute)</label>
            <input className="data-form__form-input" type="number" name="bpm" id="bpm" />bpm
            <label className="data-form__form-label" htmlFor="bp">Blood Pressure (high/low)</label>
            <input className="data-form__form-input" type="text" name="bp" id="bp" pattern='[0-9]+\/[0-9]+' placeholder='120/80' />mmHg
            <button className="data__fab" type="submit">Submit</button>
        </form>
    </div>
    </>
}