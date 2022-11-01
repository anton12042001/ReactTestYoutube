import React from 'react';

const MySelectedEditAddRequest = (props) => {
console.log(props.sortingValue)

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
                <option selected={(props.sortingValue) === "relevance" && "selected"} value="relevance">Без сортировки</option>
                <option selected={(props.sortingValue) === "title" && "selected"}  value="title">По алфавиту</option>
                <option selected={(props.sortingValue) === "date" && "selected"}  value="date">По дате</option>
                <option selected={(props.sortingValue) === "viewCount" && "selected"}  value="viewCount">От наибольшего кол-во просмотров</option>
            </select>
        </div>
    );
};

export default MySelectedEditAddRequest;