
import * as React from "react";
import AuthService from "../../services/authService";
import { browserHistory } from "react-router";

export class LogoutContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
        };
	    this.Auth = new AuthService();
    }

	componentDidMount() {
		if (this.Auth.loggedIn())
			this.Auth.logout();

		browserHistory.push("login");
	}
    
     render() {
         return (
             <div>
            </div>
        );
    }
}