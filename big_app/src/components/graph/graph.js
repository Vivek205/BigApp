import React from 'react';
import css from './graph.module.css';

import Header from './header/header';
import Bar from './chart/bar/bar';
import Donut from './chart/donut/donut';
import SemiCircle from './chart/semiCircle/semiCircle';
import Legends from './legends/legends';
import { propTypes } from 'react-minimal-pie-chart';


const graph = (props) => {
    return (
        <div className={css.graph}>
            <Header title={props.title}/>
            {/* <div className={css.main}> */}
                {props.bar ?
                    <div className={css.bar}> 
                    <Bar />
                    
                    </div> : ""}
                {props.donut ?
                    <div className={css.donut}>
                        <Donut />
                        <div className={css.donutLegends}>
                            <Legends type="donut"/>
                        </div>
                    </div>

                    : ""}
                {props.semiCircle ? 
                <>
                <SemiCircle />
                <Legends type="semiCircle"/>
                 </>: ""}

            {/* </div> */}
        </div>);
}

export default graph;