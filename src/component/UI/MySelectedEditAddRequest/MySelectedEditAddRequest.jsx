import React from 'react';
import cl from './MySelectedEditAddRequest.module.css'

const MySelectedEditAddRequest = (props) => {

    const onChangeValue = (e) => {
        props.setValueSelet(e.target.value)
    }

    const {field} = props
    const {fieldState} = props


    return (
        <div className={cl.selectContainer} >
            <select
                {...fieldState}
                {...field}
                onChange={onChangeValue}
                className={cl.select}
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