import React from 'react';
import css from './semiCircle.module.css';
import PieChart from 'react-minimal-pie-chart';


const semiCircle = () => {
    return (
        <div className={css.semiCircle}>
            <PieChart
            data={[
                { title: 'Three', value: 6.43, color: '#cc4400' },
                { title: 'Two', value: 9.43, color: '#e5e5e5' }
            ]}
            lineWidth={20}
            animate
            startAngle={180}
            lengthAngle={180}
        />
        </div>);
}

export default semiCircle;