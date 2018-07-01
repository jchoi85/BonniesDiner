
import * as React from "react";
import { Button, Input, Checkbox } from "../../common/components/index";

export const RegisterForm = (props) => {

    return (
        <div className="container">
            <div>
                <div style={{ textAlign: "center", color: "white" }}>
                    <h3 style={{ color: "white" }}>Signup</h3>
                </div>
                <br/>
                <form id="form" className="col-md-8 col-md-offset-3" style={{ color: "white" }}>
                    <Input
                        label="Name"
                        type="text"
                        name="Username"
                        value={props.registerEntity.Name}
                        onChange={props.onChange}
                        placeholder="Name"
                    />
                    <Input label="Email"
                        type="email"
                        name="Email"
                        value={props.registerEntity.Email}
                        onChange={props.onChange}
                        placeholder="Email"
                    />
                    <Input type="password"
                        label="Password"
                        name="Password"
                        value={props.registerEntity.Password}
                        onChange={props.onChange}
                        placeholder="Password"
                    />
                    <Checkbox
                        onCheck={props.onCheck}
                        label="Admin"
                        name="IsAdmin"
                        checked={props.registerEntity.IsAdmin}
                    />
                    <div style={{ textAlign: "center" }}>
                        <Button
                            label="Submit"
                            className="an-btn-small"
                            style={{ marginLeft: "10px", marginTop: "10px", position: "relative", top: "5px" }}
                            onClick={props.onSave}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}