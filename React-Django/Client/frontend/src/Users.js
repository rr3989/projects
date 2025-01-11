// Filename - src/App.js

import React from "react";
import axios from "axios";

class Users extends React.Component {
    state = {
        details: [],
        username: "",
        password: "",
        confirmpassword: "",
    };

    componentDidMount() {
        let data;

        axios.get("http://127.0.0.1:8000/login", this.state)
            .then((res) => {
                data = res.data;
                this.setState({
                    details: data,
                });
            })
            .catch((err) => {});
    }
  
    render() {
        return (
          
            <div className="container jumbotron ">
    <div className="userlist">
            <table align="center" border={1}> 
                <th><tr>Current Users List</tr></th>
                <tr>
                    
                    <td>UserName</td>
                    <td>Password</td>
                </tr>
                {this.state.details.map((val, key) => {
                    return (
                        <tr key={key}>
                            
                            <td>{val.username}</td>
                            <td>********</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        
        
    </div>
            
        );
    }
}
export default Users;
