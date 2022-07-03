import { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart, Bar, BarChart } from 'recharts';
import { MyThemeContext } from '../../../contexts/theme-context';
import './Graph.scss';

type Props = {
    data: Array<any>,
    lineKey: string,
    title?: string,
    area?: boolean,
    bar?: boolean,
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
                <defs>
                    <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={theme.graphColor} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={theme.graphColor} stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSecondary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={theme.graphColorSeconday} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={theme.graphColorSeconday} stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorTertiary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={theme.graphColorTertiary} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={theme.graphColorTertiary} stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey={props.lineKey} stackId="1" stroke={theme.graphColor} fill="url(#colorPrimary)" />
                {props.secondaryLineKey && <Area type="monotone" dataKey={props.secondaryLineKey} stackId="1" stroke={theme.graphColorSeconday} fill="url(#colorSecondary)" />}
                {props.tertiaryLineKey && <Area type="monotone" dataKey={props.tertiaryLineKey} stackId="1" stroke={theme.graphColorTertiary} fill="url(#colorTertiary)" />}
                
                
                </AreaChart>)
            : props.bar ? <BarChart width={400} height={400} data={props.data}>
                
                    <defs>
                        <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={theme.graphColor} stopOpacity={1}/>
                        <stop offset="95%" stopColor={theme.graphColor} stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorSecondary" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={theme.graphColorSeconday} stopOpacity={1}/>
                        <stop offset="95%" stopColor={theme.graphColorSeconday} stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorTertiary" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={theme.graphColorTertiary} stopOpacity={1}/>
                        <stop offset="95%" stopColor={theme.graphColorTertiary} stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <Bar type="monotone" dataKey={props.lineKey} fill="url(#colorPrimary)" />
                    {props.secondaryLineKey && <Bar type="monotone" dataKey={props.secondaryLineKey} fill="url(#colorSecondary)" />}
                    {props.tertiaryLineKey && <Bar type="monotone" dataKey={props.tertiaryLineKey} fill="url(#colorTertiary)" />}
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />


                </BarChart>
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