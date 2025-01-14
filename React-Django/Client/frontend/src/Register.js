// Filename - src/Register.js

import React from "react";
import axios from "axios";
import { useState } from "react";
import {Button, Form, Input} from 'antd';


function Register() {

    const [post, setPost] = useState({
        username: "",
        password: "",
        confirmpassword: ""
    });
    
    const config = {
        headers: {
           'Content-Type': 'application/json',
            'accept':'application/json'
        }
      };
      const [form] = Form.useForm()

      const reset = () => {
        form.resetFields();
      };
    
      
      const onFinish = (form) => {
      axios.post("http://127.0.0.1:8000/login", JSON.stringify(form),config)
            .then(response => {
                console.log(response);
                if(form.password!=form.confirmpassword)
                {
                    alert("Passwords Dont Match")
                }
                else
                {
                    alert("User Registered")
                }
                reset();
                
            })
            .catch (err => 
                {
                    console.log(err);
                })
    }

    return (
          
            <div className="container">
            <center>
               <h1>Register Your Credentials</h1>
               <Form onFinish={onFinish} form ={form} labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
                <Form.Item label='Username' name={"username"} 
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
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
                <Button htmlType="submit" type="primary">Register</Button>
                </Form>
            </center>
            <br></br>
    </div>
            
        );
    }
export default Register;
