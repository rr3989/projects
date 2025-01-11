// Filename - src/AccountDtl.js

import React from "react";
import axios from "axios";

class AccountDtl extends React.Component {
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
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/users", this.state)
            .then((res) => {
                console.log(res,this.state.details);
               })
            .catch((err) => {});
    };
   
    render() {
        return (
          
            <div className="container jumbotron ">
               
            <center>
               
               <h1>Register Your Credentials</h1>
               <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"
                                  id="basic-addon1">
                               Name
                            </span>
                        </div>
                        <input type="text" className="form-control" 
                               aria-describedby="basic-addon1"
                               value={this.state.details.Name} name="Name"
                               onChange={this.handleInput} />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               Age 
                            </span>
                        </div>
                        <input type="text" className="form-control " 
                                  value={this.state.details.Age} name="Age" 
                                  onChange={this.handleInput}/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               Gender 
                            </span>
                        </div>
                        <input type="text" className="form-control " 
                                  value={this.state.details.Gender} name="Gender" 
                                  onChange={this.handleInput}/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               Balance 
                            </span>
                        </div>
                        <input type="text" className="form-control " 
                                  value={this.state.details.Balance} name="Balance" 
                                  onChange={this.handleInput}/>
                    </div>

                    <button type="submit" className="btn btn-primary mb-5">
                        Submit
                    </button>
                </form>

               
</center><br></br>
    </div>
            
        );
    }
}
export default AccountDtl;
