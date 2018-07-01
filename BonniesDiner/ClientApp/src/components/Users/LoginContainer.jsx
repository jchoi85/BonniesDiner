
import * as React from "react";
import { LoginForm } from "./LoginForm";
import { browserHistory } from "react-router";

export class LoginContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            loginEntity: {
                email: "",
                password: ""
            }
        };

        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentDidMount() {

    }

     onFieldChange(fieldName, fieldValue) {
        const nextState = {
            //...this.state,
            loginEntity: {
                ...this.state.loginEntity,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState);
    };
    
    LoginOnEnter(event) {
        if (event.key === 'Enter') {

            this.onSave()
            event.preventDefault();
        }
    }
    onSave() {
        console.log(this.state.loginEntity)
        let payload = this.state.loginEntity;

        fetch('/api/user/login', {
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
             <div className="col-md-6 col-md-offset-3" style={{ marginLeft: "200px" }}>
                <LoginForm
                    onChange={this.onFieldChange}
                    loginEntity={this.state.loginEntity}
                    onSubmit={this.onSave}
                    onEnter={this.LoginOnEnter.bind(this)}

                />
            </div>
        );
    }
}