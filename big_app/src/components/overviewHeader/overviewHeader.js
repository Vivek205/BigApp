import React from 'react';
import css from './overviewHeader.module.css';

const overviewHeader = (props) =>{
    return(
        <div className={css.head}>
        <span>Overview Data</span>
        <input type="text" 
        value={props.searchQuery} 
        placeholder="Search Name.."
        onChange={props.changed}/>
        </div>
    );
}

export default overviewHeader;