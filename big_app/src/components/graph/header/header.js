import React from 'react';
import css from './header.module.css';

import Menu from './menu/menu';

const header = (props) =>{
    return(
    <div className={css.header}>
    <h3 className={css.text}>{props.title}</h3>
    <select className={css.drop}>
        <option>aaa</option>
        <option>bbb</option>
        <option>ccc</option>
    </select>
    <Menu />
    </div>)
}

export default header;