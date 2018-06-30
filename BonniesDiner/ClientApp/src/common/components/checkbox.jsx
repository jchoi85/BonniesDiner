
import * as React from "react";


export const Checkbox = (props) => {

    return (
        <div className={formatWrapperClass(props)}>
            <label>
                <input style={props.style} name={props.name} type="checkbox" className="checkbox" checked={props.checked} onChange={onCheck(props)} />
                {props.label}
            </label>
        </div>
    );
}

const formatWrapperClass = (props) => {
    const wrapperClass = 'form-group';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
}

const onCheck = (props) => (e) => {
    props.onCheck(e.target.name, e.target.checked);
}