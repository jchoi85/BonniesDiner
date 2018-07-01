import * as React from "react";
import { RegisterForm } from "./RegisterForm";
import { browserHistory } from "react-router";


export class RegisterContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            registerEntity: {
                Email: "",
                Password: "",
                Username: "",
                IsAdmin: false
            },
            resetState: {
                Email: "",
                Password: "",
                Username: "",
                IsAdmin: false
            }
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }
  
     onFieldChange(fieldName, fieldValue) {
        const nextState = {
            ...this.state,
            registerEntity: {
                ...this.state.registerEntity,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState);
    };

     onCheck(name, checked) {
        this.setState({
            loginEntity: {
                ...this.state.loginEntity,
                [name]: checked
            }
        })
    };
   
    onSave() {
        console.log(this.state.registerEntity)
        let payload = this.state.registerEntity;

        fetch('/api/user/register', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(payload)
        })
            .then(
             browserHistory.push("login")
            )
            .catch((error) => {
                console.log("error");
            });
    };

     render() {
         return (
                <RegisterForm
                     onChange={this.onFieldChange}
                     onSave={this.onSave}
                     registerEntity={this.state.registerEntity}
                     onCheck={this.onCheck}
                />
        );
    }
}