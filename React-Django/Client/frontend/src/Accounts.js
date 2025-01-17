// Filename - src/Accounts.js

import React from "react";
import axios from "axios";

class Accounts extends React.Component {
    state = {
        details: [],
        Name: "",
        Age: "",
        Gender: "",
        Balance: "",
    };

    componentDidMount() {
        let data;
        axios.get("http://127.0.0.1:8000/users", this.state)
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
          
            <div className="container">
     <center><h1>Current Accounts with Bank </h1></center>
    <div className="userlist">
            <table align="center" border={1}>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                </tr>
                {this.state.details.map((val, key) => {
                    return (
                        <tr>
                            <td>{val.Name}</td>
                            <td>{val.Age}</td>
                            <td>{val.Gender}</td>
                        </tr>
                    )
                })}
            </table>
            <br></br>
            <center>Thank You</center>
            <br></br>
        </div>
        
        
    </div>
            
        );
    }
}
export default Accounts;
