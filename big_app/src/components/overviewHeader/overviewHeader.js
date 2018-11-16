import React from 'react';
import css from './overviewHeader.module.css';

const overviewHeader = () =>{
    return(
        <div className={css.head}>
        <span>Overview Data</span>
        <input type="text" placeholder="Search.."/>
        </div>
    );
}

export default overviewHeader;