import React from 'react';
import css from './graph.module.css';

import Header from './header/header';
import Bar from './chart/bar/bar';
import Circle from './chart/circle/circle';
import SemiCircle from './chart/semiCircle/semiCircle';
import Legends from './legends/legends';


const graph = () =>{
    return(
    <>
    <Header />
    {true?<Bar />:""}
    {false?<Circle />:""}
    {false?<SemiCircle />:""}
    <Legends />
    </>);
}

export default graph;