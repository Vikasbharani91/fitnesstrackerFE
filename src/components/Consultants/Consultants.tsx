import { useEffect, useState } from "react";
import { matchPath, Outlet, useLocation } from "react-router-dom";
import ConsultantService, { ConsultantType } from "../../services/consultants.service";
import ConsultantCard from "../common/ConsultantCard/ConsultantCard";
import './Consultants.scss';

export default function Consultants() {

    const [consultantsList, setConsultantsList] = useState<ConsultantType[]>([]);;

    useEffect(() => {
        async function getConsultants() {
            setConsultantsList(await ConsultantService.GetConsultantsList())
        }

        getConsultants();
    }, [setConsultantsList])

    return <>
        {!matchPath('/consultants/:consultantId', useLocation().pathname) && <div className="consultants-list__container">
            {consultantsList.map(consultant =>  <ConsultantCard key={consultant.consultantId} {...consultant}></ConsultantCard>)}
        </div>}
        <Outlet />
    </>
}