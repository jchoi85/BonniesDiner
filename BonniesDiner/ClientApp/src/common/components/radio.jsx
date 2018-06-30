import * as React from "react";

export const Radio= (props) => {

    return (
        <div className={formatWrapperClass(props)}>
            <div className="radio">
                <input type="radio"
                    name={props.name}
                    onChange={onCheck(props)}
                    value={props.value}
                    checked={props.checked}
                />
                {props.label}
            </div>
            <div className="help-block">{props.error}</div>
        </div>
    );

}



const formatWrapperClass = (props) => {
    const wrapperClass = 'form-group radio-inline';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
}


const onCheck = (props) => (e) => {
    props.onCheck(e.target.name, e.target.value);
}