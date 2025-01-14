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

     const onFinish = (form) => {
        axios.post("http://127.0.0.1:8000/login", JSON.stringify(form),config)
            .then(response => {
                console.log(response);
                alert("User Registered")
                form.resetFields();
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
                <Form.Item label='Username' name='username'>
                    <Input placeholder="Enter Username"/>
                </Form.Item>
                <Form.Item label='Password'  name='password'>
                    <Input type='password'/>
                </Form.Item>
                <Form.Item label='Confirm Password'  name='confirmpassword'>
                    <Input type='password'/>
                </Form.Item>
                <Button htmlType="submit" type="primary">Submit</Button>
                </Form>
            </center>
            <br></br>
    </div>
            
        );
    }
export default Register;
