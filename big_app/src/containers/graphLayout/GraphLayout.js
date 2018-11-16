import React, { Component } from 'react';
import css from './GraphLayout.module.css';

import Graph from '../../components/graph/graph';

class GraphLayout extends Component {
    render() {
        return(
            <>
            <h1>GraphLayout</h1>
            <Graph />
            </> 
        );
    }
}

export default GraphLayout;