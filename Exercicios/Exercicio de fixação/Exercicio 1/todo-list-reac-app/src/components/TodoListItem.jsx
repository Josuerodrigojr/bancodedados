import { useState } from "react";

let xBoolean = [];
let identificacao = [];
export function TodoListItem({ id, text, checked}) {
    const [checkedState, setCheckedState] = useState(checked);

    function changeCheckboxValue() {
        setCheckedState(!checkedState);
        
        identificacao.push(id)
        
        localStorage.setItem("Identificacao",JSON.stringify(identificacao));
  
        
       
        xBoolean.push(!checkedState);

        localStorage.setItem("Objeto_Booleano",JSON.stringify(xBoolean));
    }

    return (
        <>
            <input id={`check-${id}`} type="checkbox" onChange={changeCheckboxValue} checked={checkedState}/>
            <label htmlFor={`check-${id}`}>{ text }</label><br/>
        </>
    )
}