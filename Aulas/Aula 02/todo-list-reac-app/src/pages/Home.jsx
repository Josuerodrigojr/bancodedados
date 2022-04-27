import { useEffect, useState } from "react";
import { TodoListItem } from "../components/TodoListItem";
import "./Home.css";

export function Home() {
  const [itemsArray, setItemsArray] = useState(() => {
      let  array = [
        { id: 1, text: "Acordar 7 horas da manhã", checked: false },
        {
          id: 2,
          text: "Lavar toda a louça suja que está dentro ou fora da pia",
          checked: false,
        },
        {
          id: 3,
          text: "Levar os cachorros para passear por 30 min",
          checked: false,
        },
        { id: 4, text: "Lavar o carro todo", checked: true },
      ];
    const storedArray = localStorage.getItem("itemsArray");
    if (storedArray != null) {
        array=JSON.parse(storedArray);

    } else {
      const itemsArrayString = JSON.stringify(array);
      localStorage.setItem("itemsArray", itemsArrayString);
    }
    return array;
  });

  // localStorage.setItem("abc", "oi, tudo bem?");
  // sessionStorage.setItem("def", "não, ta tudo uma bela bosta!");
  // console.log(itemsArray);

  // Adicionar elemento na tabela de to-do;

  // localStorage.setItem("abc", "oi, tudo bem?");

  useEffect(() => {
    const storedArray = localStorage.getItem("itemsArray");
    if (storedArray != null) {
      setItemsArray(JSON.parse(storedArray));
    } else {
      const itemsArrayString = JSON.stringify(itemsArray);
      localStorage.setItem("itemsArray", itemsArrayString);
    }
  }, []);

  const updateChecked = (id, checked) => {
    const buscaIndex = itemsArray.findIndex((item) => {
      return item.id == id;
    });
    itemsArray[buscaIndex].checked = checked;
    console.log(itemsArray);

    localStorage.setItem("itemsArray", JSON.stringify(itemsArray));
  };

  // Adicionar na lista sem substituir

  // const addItemToTodoList = (id, checked) =>{
  //     const ultimoId = itemsArray[itemsArray.length -1].id;
  //     setItemsArray([...itemsArray, {
  //         id: ultimoId + 1,
  //         text: "Qualquer tarefa",
  //         checked: false,

  //     }])
  // }

  return (
    <div className="container">
      {itemsArray.map(({ id, text, checked }) => {
        {
          /* return <TodoListItem {...obj} /> */
        }
        return (
          <TodoListItem
            id={id}
            text={text}
            key={id}
            checked={checked}
            updateChecked={updateChecked}
          />
        );
      })}
    </div>
  );
}
