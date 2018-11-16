import React from 'react';
import css from './header.module.css';

const header = (props) =>{
    return(
    <div className={css.header}>
    <h3 className={css.text}>{props.title}</h3>
    <select className={css.drop}>
        <option>aaa</option>
        <option>bbb</option>
        <option>ccc</option>
    </select>
    <button id={css.moreBtn} className={css.moreBtn} className={css.menu}>
            <span className={css.moreDot}></span>
            <span className={css.moreDot}></span>
            <span className={css.moreDot}></span>
        </button>
    </div>)
}

export default header;