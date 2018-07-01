import * as React from "react";

const formatWrapperClass = (props) => {
    const wrapperClass = 'form-group';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
}

const onChangeInput = (props) => (e) => {
    //the .id allows us to target an id, the value is the display name
    props.onChange(e.target.id, e.target.value);
}

export const DropDownList = (props) => {

    var options = props.options.map((option) => {
        return (
            <option key={option.key} value={option.key}>{option.value}</option>
        );
    })

    return (
        <div className={formatWrapperClass(props)}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <select value={props.selectedValue}
                    onChange={onChangeInput(props)}
                    id={props.name}
                    className={props.className ? (props.className + "form-control") : "form-control"}
                    style={props.style}
                    disabled={props.disabled}>
                    {options}
                </select>
            </div>
            <div className="help-block">{props.error}</div>
        </div>
    );

}


