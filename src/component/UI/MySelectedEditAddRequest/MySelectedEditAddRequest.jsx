import React from 'react';

const MySelectedEditAddRequest = (props) => {


    const onChangeValue = (e) => {
        props.setValueSelet(e.target.value)
    }

    const {field} = props
    const {fieldState} = props


    return (
        <div>
            <label>{props.label}</label>
            <select
                {...fieldState}
                {...field}
                onChange={onChangeValue}
            >
                <option value="relevance">Без сортировки</option>
                <option value="title">По алфавиту</option>
                <option value="date">По дате</option>
                <option value="viewCount">От наибольшего кол-во просмотров</option>
            </select>
        </div>
    );
};

export default MySelectedEditAddRequest;