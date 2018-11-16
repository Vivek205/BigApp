import React, { Component } from 'react';
import css from './GraphLayout.module.css';

import Graph from '../../components/graph/graph';

class GraphLayout extends Component {
    render() {
        return(
            <>
            <div className={css.graphsContainer}>
            <Graph donut title="Devices"/>
            <Graph bar title="Demographics"/>
            <Graph semiCircle title="New Users"/>
            </div>
            </> 
        );
    }
}

export default GraphLayout;