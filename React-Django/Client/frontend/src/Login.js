// Filename - src/Login.js

import React, { useState } from 'react';
import {Form, Input, Button} from 'antd';
import { useForm } from 'antd/es/form/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import AccountDtl from './AccountDtl';


const Login =() => {

//const navigate = useNavigate()
const [form] = useForm();


const state = {
    details: [],
    username: "",
    password: "",
    confirmpassword: "",
};

const OnFinish = (form) =>{
    
    let data;
    if(form.password!==form.confirmpassword)
        {
            alert("Passwords Entered Dont Match")
        }
    else
    {
        axios.get("http://127.0.0.1:8000/login")
            .then((res) => {
                data = res.data;
                let details=Object.values(data)
                
                for(let i in details){
                    if(details[i].username === form.username)
                    {
                        if(details[i].password !== form.password)
                        {
                            alert("Password entered is Wrong")
                        }
                        else
                        {
                            
                            //navigate('/AccountDtl');
                            form.resetFields()
                            
                            
                        }
                        break
                    }
                    else
                    {
                        alert("Username is not Registered")
                        break
                    }
                }

                this.setState({
                    details: data,
                }) 
            })
            .catch((err) => {});
    }
}
return (
    <div><center>
        <h1>Please Login to your Account</h1>
        <Form onFinish={OnFinish} form ={form} labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
                <Form.Item label='Username' name={"username"}
                rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder="Enter Username"/>
                </Form.Item>
                <Form.Item label='Password'  name={"password"}
                rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input type='password'/>
                </Form.Item>
                <Form.Item label='Confirm Password'  name={"confirmpassword"}
                rules={[{ required: true, message: 'Please confirm your password!' }]}>
                    <Input type='password'/>
                </Form.Item>
                <Button htmlType="submit" type="primary">Login</Button>
                </Form>
        </center>
    </div>
);

}
export default Login;
