import React, { Component } from 'react';
import logo from './logo.svg';
import './css/login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="Login">
        <header className="Login-header">
          <img src={logo} className="Login-logo" alt="logo" />
          <h1 className="Login-title">Welcome to AIS</h1>
        </header>
        <div>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <br />
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                    </Button>
                    <br />
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        </div>
        <p className="Login-intro">
          To get started, edit <code>src/Login.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const Login = Form.create()(NormalLoginForm);
export default Login;
