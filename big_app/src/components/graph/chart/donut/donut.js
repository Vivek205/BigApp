import React from 'react';
import css from './donut.module.css';
import PieChart from 'react-minimal-pie-chart';


const donut = () => {
    return (
        <div className={css.donut}>
        <PieChart
            data={[
                { title: 'Three', value: 16.4, color: '#cc4400' },
                { title: 'Two', value: 31.2, color: '#cc00ff' },
                { title: 'One', value: 52.4, color: '#00ccff' }
            ]}
            lineWidth={20}
            animate
        />
        </div>);
}

export default donut;