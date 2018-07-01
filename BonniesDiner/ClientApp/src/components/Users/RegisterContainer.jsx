import * as React from "react";
import { RegisterForm } from "./RegisterForm";
import { Button } from "../../common/components/index";


export class RegisterContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            registerEntity: {
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            resetState: {
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
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
      console.log("test")
    }

     render() {
        return (
            <div className="mfp-content">
                <RegisterForm
                    onChange={this.onFieldChange}
                    onSave={this.onSave}
                    registerEntity={this.state.registerEntity}
                />

            </div>
        );
    }
}