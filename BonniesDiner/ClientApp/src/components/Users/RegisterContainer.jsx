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
             <div className="col-md-6">
                <RegisterForm
                    onChange={this.onFieldChange}
                    onSave={this.onSave}
                    registerEntity={this.state.registerEntity}
                />

            </div>
        );
    }
}