import React from 'react';

const MyInputEditAddRequest = (props) => {

    const {field} = props
    const {fieldState} = props

    return (
        <div>
            <label>{props.label}</label>
            <input
                placeholder={props.placeholder}
                {...fieldState}
                {...field}
                type={props.type}
                disabled={props.disabled}

            />
        </div>
    );
};

export default MyInputEditAddRequest;