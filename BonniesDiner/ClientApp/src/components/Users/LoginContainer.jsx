
import * as React from "react";
import { LoginForm } from "./LoginForm";
import { browserHistory } from "react-router";
import AuthService from "../../services/authService";

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
	    this.Auth = new AuthService();
    }

    componentDidMount() {

    }

     onFieldChange(fieldName, fieldValue) {
        const nextState = {
            loginEntity: {
                ...this.state.loginEntity,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState);
    }
    
    LoginOnEnter(event) {
        if (event.key === 'Enter') {

            this.onSave()
            event.preventDefault();
        }
    }
	onSave() {
        let payload = this.state.loginEntity;

	    this.Auth.login(payload.email, payload.password)
            .then(response => 
                //console.log(response)
                browserHistory.push("menuPage")
            )
            .catch((error) => {
                console.log(error);
            });
    }
    
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