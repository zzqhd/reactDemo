// js跳转路由,为社么不用link的方式：需要判断是否登陆成功才跳转
import React from 'react'

import {Redirect} from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            password:'',
            loginSuccess: false,
        };
    }
    submit = (e) => {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        console.log(username);
        console.log(password);

        if (username == '1' && password == '1') {
            console.log('登陆成功');
            this.setState({
                loginSuccess: true
            })
        }  else  {
            console.log('登陆失败');
        }
    }
    render() {
        if (this.state.loginSuccess) {
            return <Redirect to='/HomeOrder' />
        }
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input type='text' ref='username'/><br/><br/>
                    <input type='password' ref='password'/><br/><br/>
                    <input type='submit' /><br/><br/>
                </form>
            </div>
        )
    }
}

export default Login;