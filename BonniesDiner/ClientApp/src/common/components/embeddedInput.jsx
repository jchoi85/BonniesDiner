import * as React from "react";

export const EmbeddedInput = (props) => {

    return (
        <div className={formatWrapperClass(props)}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input type={props.type} required={props.required}
                    name={props.name}
                    className={props.className ? (props.className + "form-control") : "form-control"}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={onChangeInput(props)}
                    onBlur={onBlur(props)}
                    onKeyPress={onKeyPress(props)}
                    style={props.style}
                    size={props.size}
                />
            </div>
            <div className="help-block">{props.error}</div>
        </div>
    );
}

const formatWrapperClass = (props) => {
    const wrapperClass = 'form-group';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
}

const onChangeInput = (props) => (e) => {
    props.onChange(e.target.name, e.target.value);
}

const onBlur = (props) => (e) => {
    if (props.onBlur) {
        props.onBlur(e.target.name, e.target.value);
    }
}

const onKeyPress = (props) => (e) => {
    if (props.onEnter) {
        if (e.key === 'Enter') {
            props.onEnter();
        }
    }
}