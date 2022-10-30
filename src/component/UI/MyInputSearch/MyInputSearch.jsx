import React, {useEffect, useRef, useState} from 'react';


const MyInputSearch = (props) => {
    const {field} = props
    const {fieldState} = props
    const inputRef = useRef()
    const [valueInput,setValueInput] = useState('')

    useEffect(() => {
        if(props.setInputValue){
            setValueInput(inputRef.current.defaultValue)
            props.setInputValue(valueInput)
        }
    },[valueInput])




    return (
        <div>
            <input
                placeholder={props.placeholder}
                {...fieldState}
                {...field}
                type={props.type}
                ref={inputRef}
            />
        </div>
    );
};

export default MyInputSearch;