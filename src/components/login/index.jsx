import React from 'react';
import './index.css';
import {login} from '@api/login';
import {BASE_URL} from '@common/config';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  onInputChange(e) {
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    });
  }
  onSubmit(e) {
    const url = BASE_URL + '/manage/user/login.do';
    const {username, password} = this.state;
    login(url, {
      username,
      password
    }).then(res => {
      console.log(res)
    })

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default login-panel">
              <div className="panel-heading">
                <h1 className="panel-title">
                  欢迎登录 - 管理系统
                </h1>
              </div>
              <div className="panel-body">
                <form role="form">
                  <div className="form-group">
                    <label htmlFor="name">用户名</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="username"
                    name="username"
                    placeholder="请输入用户名"
                    onChange={e => this.onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">密码</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="password"
                    name="password"
                    placeholder="请输入密码"
                    onChange={e => this.onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <button onClick={e => this.onSubmit(e)} type="button" className="btn btn-primary btn-lg btn-block">登录</button>
                  </div>
                  <div className="form-group clearfix">
                    <a href="" className="pull-left">注册</a>
                    <a href="" className="pull-right">忘记密码</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;