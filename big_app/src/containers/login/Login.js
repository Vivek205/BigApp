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
            this.submitHandler();
        }
    }

    submitHandler = () => {
        this.props.history.push("/dashboard", { user: this.state.user });
    }

    render() {
        return (
            <div className={css.Login}>
                <h1 className={css.txt}>Sign in in to proceed</h1>
                <label className={css.lbl} htmlFor="userName">Username:</label>
                <input className={css.ipt} id="userName" type="text"
                    value={this.state.user}
                    onChange={this.userNameHandler}
                    onKeyPress={this.userNameHandler} />
                    <button className={css.btn} onClick={this.submitHandler}>Submit</button>
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