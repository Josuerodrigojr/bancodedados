import { useState } from "react";

export function TodoListItem({ id, text, checked, updateChecked }) {
    const [checkedState, setCheckedState] = useState(checked);

    function changeCheckboxValue() {
        setCheckedState(!checkedState);
        updateChecked(id, !checkedState);

    }

    return (
        <>
            <input id={`check-${id}`} type="checkbox" onChange={changeCheckboxValue} checked={checkedState}/>
            <label htmlFor={`check-${id}`}>{ text }</label><br/>
        </>
    )
}