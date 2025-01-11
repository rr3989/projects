// Filename - src/Register.js

import React from "react";
import axios from "axios";
import { useState } from "react";


function Register() {

    const [post, setPost] = useState({
        username: "",
        password: "",
        confirmpassword: ""
    });
    
    const handleInput = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    
    }
    
    const config = {
        headers: {
           'Content-Type': 'application/json',
            'accept':'application/json'
        }
      };

     function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://127.0.0.1:8000/login", JSON.stringify(post),config)
            .then(response => {
                console.log(response)
                post.confirmpassword=''
                post.password=''
                post.username=''
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
               <form onSubmit={handleSubmit}>
                        User Name :<input type="text" name="username" onChange={handleInput}/>
                        <p/>
                        Password :<input type="password" name="password" onChange={handleInput}/>
                        <p/>
                        Confirm Password :<input type="password" name="confirmpassword" onChange={handleInput}/>
                        <p/>
                    <button type="submit">Submit</button>
                </form>

               
</center><br></br>
    </div>
            
        );
    }
export default Register;
