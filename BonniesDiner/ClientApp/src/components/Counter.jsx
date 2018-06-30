import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

//testing
import { Input } from "../common/components/index";
//import { browserHistory } from "react-router";
//import { Validation } from "../../common/components/form/Validation";
//import { RegisterForm } from "./RegisterForm";
//import { Button } from "../../common/components/form/index";
//import { UserApi } from "../../api/index";


const Counter = props => (
  <div>
    <h1>Counter</h1>

    <p>This is a simple example of a React component.</p>

    <p>Current count: <strong>{props.count}</strong></p>

    <button onClick={props.increment}>Increment</button>

    </div>

);


export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);

const FormErrors = (props) => {
    return (
        <div className="formErrors">
            {Object.keys(props).map((fieldName, i) => {
                if (props[fieldName].length > 0)
                    return <p key={i}>{fieldName} {props[fieldName]}</p>
            })}
        </div>
    );
}

