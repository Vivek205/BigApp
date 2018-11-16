import React, { Component } from 'react';
import css from './Login.module.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        user: ""
    }

    userNameHandler = (e) => {
        this.setState({ user: e.target.value });
        if (e.key === 'Enter') {
            this.submithandler();
        }
    }

    submithandler = () => {
        this.props.history.push("/dashboard", { user: this.state.user });
    }

    render() {
        return (
            <div className={css.Login}>
                <h1 >Sign in in to proceed</h1>
                <label htmlFor="userName">Username:</label>
                <input id="userName" type="text"
                    value={this.state.user}
                    onChange={this.userNameHandler}
                    onKeyPress={this.userNameHandler} />
                    <button onClick={this.submithandler}>Submit</button>
                {/* <Link to={
                    {
                        pathname: "/dashboard",
                        state: { user: this.state.user }
                    }
                }>
                    <button>Submit</button>
                </Link> */}
            </div>
        );
    }
}

export default Login;