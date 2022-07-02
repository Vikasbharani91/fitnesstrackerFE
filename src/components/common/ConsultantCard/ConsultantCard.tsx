import { Link } from "react-router-dom";
import { ConsultantType } from "../../../services/consultants.service";
import './ConsultantCard.scss'

export default function ConsultantCard(props: ConsultantType) {


    return <Link className="consultant-card__container" to={`/consultants/${props.consultantId}`}>
        <img src={props.imageSrc} alt={`${props.name} profile pic`} className="consultant-card__image" />
        <div className="consultant-card__details">
            <h4 className="consultant-card__title">{props.name}</h4>
            <div className="consultant-card__experience">
                <p className="consultant-card__type">Experience: <span>{props.yoe}</span>{' '}years</p>
                <p className="consultant-card__type">Clients: <span>{props.totalClients}</span></p>
            </div>
            <p className="consultant-card__desc">{props.description.substring(0, 150)}...</p>
        </div>
    </Link>
}