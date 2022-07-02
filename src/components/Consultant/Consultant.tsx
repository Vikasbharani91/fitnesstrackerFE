import './Consultant.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ConsultantService, { ConsultantType } from '../../services/consultants.service';

export default function Consultant() {

    const { consultantId } = useParams();

    const [consultant, setConsultant] = useState<ConsultantType | null>(null);

    useEffect(() => {
        async function getConsultant() {
            if (consultantId) setConsultant(await ConsultantService.GetConsultant(consultantId))
        }
        getConsultant();
    }, [setConsultant, consultantId])

    return consultant ? <div className='consultant__container'>
        <img src={consultant?.imageSrc} alt={`${consultant?.name} profile pic`} className="consultant__image" />
        <div className="consultant__details">
            <div className="consultant__intro">
                <h2 className="consultant__title">{consultant?.name}</h2>
                <div className="consultant__experience">
                    <p className="consultant__experience-type">Experience: <span>{consultant?.yoe}</span>{' '}years</p>
                    <p className="consultant__experience-type">Clients: <span>{consultant?.totalClients}</span></p>
                </div>
            </div>
            <p className="consultant__desc">{consultant?.description}</p>
        </div>
    </div> : null
}