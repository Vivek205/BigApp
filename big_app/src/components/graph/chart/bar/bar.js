import React from 'react';
import css from './bar.module.css';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
    ValueGrid,
} from '@devexpress/dx-react-chart-material-ui';
import { Scale, Animation } from '@devexpress/dx-react-chart';


const bar = () => {
    const data = [
        { year: '18-24', population: 12 },
        { year: '25-34', population: 25 },
        { year: '35-44', population: 15 },
        { year: '45-54', population: 9.5 },
        { year: '55-64', population: 13 },
        { year: '65+', population: 3 }
    ];
    return (
        <div className={css.barChart}>
            <Paper>
                <Chart data={data} height={150}>
                    <ArgumentAxis />
                    <ValueAxis x={5} max={30} lineComponent={EmptyComponent} tickComponent={EmptyComponent}  />
                    <ValueGrid />
                    <BarSeries
                        valueField="population"
                        argumentField="year"
                    />
                    {/* <Title text="World population" style={{ textAlign: 'center', width: '100%', marginBottom: '10px' }} /> */}
                    <Animation />
                    <Scale/>
                </Chart>
            </Paper>
        </div>);
}

const EmptyComponent = () => null;
export default bar;