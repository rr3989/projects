// Filename - src/Login.js

import React, { useState } from 'react';


const Login =() => {
    const [formInput, setFormInput] = useState(
        {
        username:"",
        password: "",
        confirmpassword: "",
        successMessage: "",
});

const [formError, setFormError] = useState({
    username:"",
    password: "",
    confirmpassword: "",   

});

const handleUserInput = (name,value) =>{
setFormInput({
    ...formInput,
    [name]: value,
    });
};

const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
        username:"",
        password:"",
        confirmpassword:"",
    };

    if(!formInput.username && !formInput.password){
        setFormError({
            ...inputError,
            username:"Enter Valid Username",
            password: "Password should not be empty",
        });
        return;
    }


    if(!formInput.password && !formInput.confirmpassword){
        setFormError({
            ...inputError,
            password:"Password is required",
            confirmpassword: "Confirm Password is required",
        });
        return;
    }
    
    if(!formInput.username){
        setFormError({
            ...inputError,
            username: "Enter Valid Username",
        });
        return;
    }
    
    if(!formInput.password){
        setFormError({
            ...inputError,
            password: "Password should not be empty",
        });
        return;
    }
    
    if(formInput.password !== formInput.confirmpassword){
        setFormError({
            ...inputError,
            confirmpassword: "Password and Confirm Password should match",
        });
        return;
    }
    setFormInput({
        password: "",
        confirmpassword: "",
        successMessage: "Password Matched",
        
    });

    setFormError(inputError);
    setFormInput((prevState) => ({
    ...prevState,
    successMessage: "Password Matched",
}));

}

return (
    <div><center>
        <h1>Please Login to your Account</h1>
        <form onSubmit={validateFormInput}>

        <label>Username :
        <input value={formInput.username} 
        onChange={({target}) => {handleUserInput(target.name, target.value);
        }}
        name="username"
        type="text" 
        placeholder="Enter Username" />
        </label>
        <p className="error">{formError.username}</p>
        <label>Password :
        <input value={formInput.password} 
        onChange={({target}) => {
            handleUserInput(target.name, target.value);
        }}
        name="password"
        type="password" 
        placeholder="Enter Password" />
        </label>
        <p className="error">{formError.password}</p>
      
        <label>Confirm Password :
        <input value={formInput.confirmpassword} 
        onChange={({target}) => {
            handleUserInput(target.name, target.value);
        }}
        name="confirmpassword"
        type="password" 
        placeholder="Confirm Password" />
        </label>
        <p className="error">{formError.confirmpassword}</p>
        <p className="success-message">{formInput.successMessage}</p>
        <input type="submit" value="Submit" />
        </form>
        </center>
    </div>
);

}
export default Login;
