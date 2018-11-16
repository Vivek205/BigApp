import React from 'react';
import css from './legend.module.css';

const legend = (props) =>{
    let style="";
    if(props.type == "semiCircle"){
        style= css.sc
    } else if(props.type == "donut"){
       
    }
    return(
    
    <div className={style}>
    <p>52.3 %</p>
    <span>Tablet</span>
    </div>
    );
}

export default legend;