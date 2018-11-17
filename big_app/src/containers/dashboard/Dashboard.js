import React, { Component } from 'react';
import css from './Dashboard.module.css';
import axios from 'axios';

import GraphLayout from '../graphLayout/GraphLayout';
import OverView from '../overview/Overview';


class DashBoard extends Component {

    state={
        userData:[]
    }

    componentDidMount = () => {
        this.redirectUnAuth("/login");
    }

    redirectUnAuth = (url) => {
        if (this.props.location.state === undefined) {
            this.props.history.push(url);
        } else if (this.props.location.state.user === "") {
            this.props.history.push(url);
        } else {
            this.fetchUserData(this.props.location.state.user);
        }
    }

    fetchUserData = (user) => {
        let url = `https://api.github.com/users/${user}`
        axios.get(url)
            .then(response => {
                // console.log(response.data);
                alert(`Hello ${response.data.name}`);
                this.setState({userData:response.data})
            })
            .catch(err => {
                console.log(err);
            })
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