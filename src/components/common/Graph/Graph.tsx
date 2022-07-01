import { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { MyThemeContext } from '../../../contexts/theme-context';
import './Graph.scss';

type Props = {
    data: Array<any>,
    lineKey: string,
    title?: string,
    area?: boolean,
    secondaryLineKey?: string,
    tertiaryLineKey?: string,
}

export default function Graph (props: Props) {

    const theme = useContext(MyThemeContext);
    return <div className='graph__container'>
        <ResponsiveContainer className='graph__content' width="100%" height="100%">
            {props.area ? (<AreaChart
                width={500}
                height={400}
                data={props.data}
                margin={{
                    top: 10,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey={props.lineKey} stackId="1" stroke={theme.graphColor} fill={theme.graphColor} />
                {props.secondaryLineKey && <Area type="monotone" dataKey={props.secondaryLineKey} stackId="1" stroke={theme.graphColorSeconday} fill={theme.graphColorSeconday} />}
                {props.tertiaryLineKey && <Area type="monotone" dataKey={props.tertiaryLineKey} stackId="1" stroke={theme.graphColorTertiary} fill={theme.graphColorTertiary} />}
                
                
                </AreaChart>)
            : (
            <LineChart width={400} height={400} data={props.data}>
                <Line type="monotone" dataKey={props.lineKey} stroke={theme.graphColor} />
                {props.secondaryLineKey && <Line type="monotone" dataKey={props.secondaryLineKey} stroke={theme.graphColorSeconday} />}
                {props.tertiaryLineKey && <Line type="monotone" dataKey={props.tertiaryLineKey} stroke={theme.graphColorTertiary} />}
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />


            </LineChart>)
            }
        </ResponsiveContainer>
        <h4 className='graph__title'>{props.title ?? props.lineKey}</h4>
    </div>
}