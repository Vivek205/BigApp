import React from 'react';
import css from './header.module.css';

const header = () =>{
    return(
    <>
    <h3>Devices</h3>
    <select>
        <option>aaa</option>
        <option>bbb</option>
        <option>ccc</option>
    </select>
    <button id={css.moreBtn} className={css.moreBtn}>
            <span className={css.moreDot}></span>
            <span className={css.moreDot}></span>
            <span className={css.moreDot}></span>
        </button>
    </>)
}

export default header;