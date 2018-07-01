
import * as React from "react";
import { Button, Input } from "../../common/components/index";

export const LoginForm = (props) => {
    return (
        <div className="col-md-offset-2" style={{}}>
            <div >
        <form className="tg-loginform" method="post">
            <fieldset>
                <div className="form-group" style={{ padding: "20px" }}>
                    <br/>
                    <Input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        label="E-mail"
                        value={props.loginEntity.email}
                        onChange={props.onChange}
                    />
                </div>
                <div className="form-group" style={{ padding: "20px" }}>
                    <Input type="password"
                        name="password"
                        placeholder="Password"
                        label="Password"
                        value={props.loginEntity.password}
                        onChange={props.onChange}
                        onEnter={props.onLoginEnter}
                    />
                </div>
                <div className="form-group">
                    <Button label="Login Now"
                        onClick={props.onSubmit}
                        className="tg-btn tg-btn-lg"
                        disabled={false}
                    />
                </div>
                <div className="tg-description">
                    <p>Don't have an account? <a href="/#home"><strong>Signup</strong></a></p>
                </div>
            </fieldset>
                </form>
            </div>
        </div>
    )
};

