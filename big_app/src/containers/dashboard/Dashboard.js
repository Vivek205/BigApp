import React, { Component } from 'react';
import css from './Dashboard.module.css';

import GraphLayout from '../graphLayout/GraphLayout';
import OverView from '../overview/Overview';


class DashBoard extends Component {
    componentDidMount = () => {
        console.log(this.props);
        if (this.props.location.state === undefined) {
            this.props.history.push("/login")
        }else if (this.props.location.state.user === "") {
            this.props.history.push("/login")
        }
    }

    render() {
        return (
            <>
                <GraphLayout />
                <OverView />
            </>
        );
    }
}

export default DashBoard;