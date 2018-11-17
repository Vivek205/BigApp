import React from 'react';
import css from './legends.module.css';

import Legend from './legend/legend'

const legends = (props) =>{
    let style="";
    if(props.type=="semiCircle"){
        style = css.sclegends
    }
    else if(props.type=="donut"){
        style = css.donutlegends
    }
 return(
     <div className={style}>
     <Legend type={props.type}/>
     <Legend type={props.type}/>
     {props.type === "donut"?<Legend type={props.type}/>:""}
     </div>
 );
}

export default legends;